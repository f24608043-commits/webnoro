import { useState, useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  getAllPosts, 
  createPost, 
  updatePost, 
  deletePost, 
  uploadBlogImage, 
  supabase,
  BlogPost, 
  CATEGORIES, 
  CategorySlug 
} from '@/lib/supabase';
import { toast } from 'sonner';
import { 
  Plus, 
  LogOut, 
  Save, 
  Send, 
  Trash2, 
  Edit2, 
  Image as ImageIcon, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Search,
  Globe,
  Loader2
} from 'lucide-react';

const VALID_ADMINS = [
  { email: 'alexabraham587@gmail.com', password: 'Abdullah@1221' },
  { email: 'f24608043@nutech.edu.pk', password: 'Qasim.11' }
];

// Markdown to HTML conversion for paste
const convertMarkdownToHtml = (text: string): string => {
  let html = text
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/^\-\s(.*)$/gim, '<ul><li>$1</li></ul>')
    .replace(/^\d+\.\s(.*)$/gim, '<ol><li>$1</li></ol>')
    .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/\n/gim, '<br />');

  // Wrap in p if not already
  if (!html.startsWith('<')) html = '<p>' + html + '</p>';

  // Fix consecutive list items
  html = html.replace(/<\/ul>\s*<ul>/gim, '');
  html = html.replace(/<\/ol>\s*<ol>/gim, '');

  return html;
};

const BlogAdmin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'list' | 'editor' | 'preview'>('list');
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<CategorySlug>('digital-marketing');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [author, setAuthor] = useState('Nexa Growth Team');
  const [status, setStatus] = useState<'draft' | 'published' | 'scheduled'>('draft');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [readTime, setReadTime] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');

  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setIsLoggedIn(true);
          await fetchPosts();
        } else {
          // Fallback to old session storage for backward compatibility during transition
          const legacySession = sessionStorage.getItem('blogAdminLoggedIn');
          if (legacySession === 'true') {
            setIsLoggedIn(true);
            await fetchPosts();
          } else {
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error('Session check error:', error);
        setIsLoading(false);
      }
    };
    
    checkSession();
    document.title = 'Blog Admin | Nexa Growth';
  }, []);

  useEffect(() => {
    if (activeTab === 'editor' && editorRef.current && content) {
      if (editorRef.current.innerHTML !== content) {
        editorRef.current.innerHTML = content;
      }
    }
  }, [activeTab, content]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await getAllPosts();
      if (error) {
        console.error('Supabase fetch error, using local storage:', error);
        // Fallback to local storage
        const localPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        setPosts(localPosts);
      } else {
        setPosts(data || []);
        // Also merge with local storage posts
        const localPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        if (localPosts.length > 0) {
          // Merge local and remote posts, preferring remote
          const mergedPosts = [...(data || []), ...localPosts.filter((local: BlogPost) => 
            !(data || []).some((remote: BlogPost) => remote.id === local.id)
          )];
          setPosts(mergedPosts);
        }
      }
    } catch (error) {
      console.error('Complete fetch failure, using local storage only:', error);
      const localPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      setPosts(localPosts);
    }
    setIsLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // If Supabase Auth fails, try the hardcoded fallback just in case
        const admin = VALID_ADMINS.find(a => a.email === email && a.password === password);
        if (admin) {
          setIsLoggedIn(true);
          sessionStorage.setItem('blogAdminLoggedIn', 'true');
          fetchPosts();
        } else {
          setLoginError(error.message);
        }
      } else if (data.user) {
        setIsLoggedIn(true);
        sessionStorage.setItem('blogAdminLoggedIn', 'true');
        fetchPosts();
      }
    } catch (err) {
      setLoginError('An unexpected error occurred during authentication');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    sessionStorage.removeItem('blogAdminLoggedIn');
    setPosts([]);
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!editingPost?.id) setSlug(generateSlug(val));
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    const html = convertMarkdownToHtml(text);
    document.execCommand('insertHTML', false, html);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const loadingToast = toast.loading('Uploading image...');
    const url = await uploadBlogImage(file);
    toast.dismiss(loadingToast);

    if (url) {
      setFeaturedImage(url);
      toast.success('Image uploaded successfully');
    } else {
      toast.error('Failed to upload image');
    }
  };

  const resetForm = () => {
    setEditingPost(null);
    setTitle('');
    setSlug('');
    setCategory('digital-marketing');
    setExcerpt('');
    setContent('');
    setFeaturedImage('');
    setAuthor('Nexa Growth Team');
    setStatus('draft');
    setTags([]);
    setReadTime('');
    setFocusKeyword('');
    setCanonicalUrl('');
    if (editorRef.current) editorRef.current.innerHTML = '';
  };

  const startCreating = () => {
    resetForm();
    setActiveTab('editor');
  };

  const startEditing = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setCategory(post.category as CategorySlug);
    setExcerpt(post.excerpt || '');
    setContent(post.content);
    setFeaturedImage(post.featured_image || '');
    setAuthor(post.author || 'Nexa Growth Team');
    setStatus(post.status);
    setTags(post.tags || []);
    setReadTime(post.read_time || '');
    setFocusKeyword(post.focus_keyword || '');
    setCanonicalUrl(post.canonical_url || '');
    setActiveTab('editor');
    setTimeout(() => {
      if (editorRef.current) editorRef.current.innerHTML = post.content;
    }, 100);
  };

  const handleSave = async (targetStatus?: 'draft' | 'published') => {
    const currentContent = editorRef.current?.innerHTML || content;
    
    if (!title || !slug || !currentContent) {
      toast.error('Please fill in title, slug, and content');
      return;
    }
    const finalStatus = targetStatus || status;

    setIsSaving(true);
    const postData: Partial<BlogPost> = {
      id: editingPost?.id || `local_${Date.now()}`,
      title,
      slug,
      category,
      excerpt,
      content: currentContent,
      featured_image: featuredImage,
      author,
      status: finalStatus,
      tags,
      read_time: readTime,
      focus_keyword: focusKeyword,
      canonical_url: canonicalUrl,
      created_at: editingPost?.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    let result;
    try {
      if (editingPost?.id) {
        result = await updatePost(editingPost.id, postData);
      } else {
        result = await createPost(postData);
      }
    } catch (error) {
      console.error('Supabase error, falling back to local storage:', error);
      result = { data: null, error: { message: 'Using local storage fallback' } };
    }

    setIsSaving(false);

    if (result.error) {
      // Fallback to local storage
      try {
        const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        
        if (editingPost?.id) {
          // Update existing post
          const index = existingPosts.findIndex((p: BlogPost) => p.id === editingPost.id);
          if (index !== -1) {
            existingPosts[index] = postData;
          }
        } else {
          // Add new post
          existingPosts.push(postData);
        }
        
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
        
        toast.success(finalStatus === 'published' ? 'Post published to local storage!' : 'Draft saved to local storage!');
        setActiveTab('list');
        resetForm();
        
        // Refresh posts from local storage
        fetchPosts();
      } catch (localError) {
        toast.error('Error saving post: ' + result.error.message + ' (Local storage also failed)');
      }
    } else {
      toast.success(finalStatus === 'published' ? 'Post published!' : 'Draft saved!');
      fetchPosts();
      setActiveTab('list');
      resetForm();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    const { error } = await deletePost(id);
    if (error) {
      toast.error('Error deleting post');
    } else {
      toast.success('Post deleted');
      fetchPosts();
    }
  };

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#f8faf9] text-[#1a2233]">
        <Navigation />
        <section className="pt-48 pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto bg-white p-10 rounded-2xl shadow-xl border border-[#e4ebe7]">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-[#1a9e6e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#1a9e6e]" />
                </div>
                <h1 className="text-3xl font-display font-black tracking-tight">NEXA ADMIN</h1>
                <p className="text-[#5c6b7a]">Manage your growth content</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    className="h-12 border-[#e4ebe7] focus:ring-[#1a9e6e] focus:border-[#1a9e6e]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    className="h-12 border-[#e4ebe7] focus:ring-[#1a9e6e] focus:border-[#1a9e6e]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {loginError && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100 italic">
                    <AlertCircle className="w-4 h-4" />
                    {loginError}
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-12 bg-[#1a9e6e] hover:bg-[#0f6e4a] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#1a9e6e]/20"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Secure Admin Access'}
                </Button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#1a2233] font-sans">
      <Navigation />

      <section className="pt-48 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-display font-black tracking-tighter flex items-center gap-3 italic">
                <span className="text-[#1a9e6e]">/</span>BLOG ADMIN
              </h1>
              <p className="text-[#5c6b7a] font-medium italic">Content Command Center</p>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => setActiveTab('list')}
                className={`rounded-full h-11 px-6 border-[#e4ebe7] ${activeTab === 'list' ? 'bg-[#1a9e6e]/5 text-[#1a9e6e] border-[#1a9e6e]' : ''}`}
              >
                Dashboard
              </Button>
              <Button 
                onClick={startCreating}
                className="rounded-full h-11 px-6 bg-[#1a9e6e] hover:bg-[#0f6e4a] text-white shadow-lg shadow-[#1a9e6e]/10 gap-2"
              >
                <Plus className="w-4 h-4" /> New Article
              </Button>
              <Button variant="ghost" onClick={handleLogout} className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full h-11 w-11 p-0">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {activeTab === 'list' ? (
            <div className="bg-white rounded-2xl border border-[#e4ebe7] shadow-sm overflow-hidden min-h-[500px]">
              {isLoading ? (
                <div className="p-20 flex flex-col items-center justify-center space-y-4">
                  <Loader2 className="w-10 h-10 text-[#1a9e6e] animate-spin" />
                  <p className="text-[#5c6b7a] font-medium animate-pulse">Syncing with Nexa Base...</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f8faf9] border-b border-[#e4ebe7]">
                        <th className="px-8 py-5 text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Article</th>
                        <th className="px-8 py-5 text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Category</th>
                        <th className="px-8 py-5 text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Status</th>
                        <th className="px-8 py-5 text-xs font-bold text-[#5c6b7a] uppercase tracking-widest text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-8 py-20 text-center text-[#5c6b7a] italic">
                            No articles found. Start by creating your first masterpiece.
                          </td>
                        </tr>
                      ) : (
                        posts.map((post) => (
                          <tr key={post.id} className="border-b border-[#e4ebe7] hover:bg-[#f0faf5]/30 transition-colors group">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-16 bg-[#f0faf5] rounded-lg overflow-hidden flex-shrink-0 border border-[#e4ebe7]">
                                  {post.featured_image ? (
                                    <img src={post.featured_image} alt="" className="w-full h-full object-cover" />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[#1a9e6e]/30">
                                      <ImageIcon className="w-6 h-6" />
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <h3 className="font-display font-bold text-[#1a2233] group-hover:text-[#1a9e6e] transition-colors line-clamp-1">{post.title}</h3>
                                  <p className="text-xs text-[#5c6b7a] mt-1 font-mono italic">/{post.slug}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <span className="px-3 py-1 bg-[#f0faf5] text-[#1a9e6e] text-[10px] font-black uppercase tracking-wider rounded-full border border-[#1a9e6e]/10">
                                {CATEGORIES[post.category as CategorySlug] || post.category}
                              </span>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-2">
                                {post.status === 'published' ? (
                                  <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Published
                                  </span>
                                ) : post.status === 'scheduled' ? (
                                  <span className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
                                    <Clock className="w-3.5 h-3.5" /> Scheduled
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1.5 text-slate-400 text-xs font-bold italic">
                                    <FileText className="w-3.5 h-3.5" /> Draft
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-8 py-6 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => startEditing(post)}
                                  className="h-9 w-9 p-0 rounded-lg hover:bg-[#1a9e6e]/10 hover:text-[#1a9e6e]"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleDelete(post.id)}
                                  className="h-9 w-9 p-0 rounded-lg hover:bg-red-50 hover:text-red-500"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Main Editor */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl border border-[#e4ebe7] shadow-sm overflow-hidden">
                  <div className="p-8 border-b border-[#e4ebe7] bg-[#f8faf9] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1a9e6e] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#1a9e6e]/20">
                        <Edit2 className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-display font-black italic uppercase">Editor</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setActiveTab('editor')}
                        className={`rounded-lg px-4 ${activeTab === 'editor' ? 'bg-[#1a9e6e]/10 text-[#1a9e6e]' : ''}`}
                      >
                        Write
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (editorRef.current) setContent(editorRef.current.innerHTML);
                          setActiveTab('preview');
                        }}
                        className={`rounded-lg px-4 ${activeTab === 'preview' ? 'bg-[#1a9e6e]/10 text-[#1a9e6e]' : ''}`}
                      >
                        Preview
                      </Button>
                      <div className="flex items-center gap-1 text-[#5c6b7a] text-[10px] font-bold uppercase ml-4 border-l border-[#e4ebe7] pl-4">
                        <Clock className="w-3.5 h-3.5" /> Auto-sync active
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-8">
                    <div className="space-y-4">
                      <Label className="text-sm font-bold uppercase tracking-widest text-[#5c6b7a]">Article Title</Label>
                      <Input
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="E.g. The Future of AI in Digital Marketing"
                        className="text-2xl font-display font-bold h-16 border-none px-0 focus-visible:ring-0 placeholder:text-slate-300"
                      />
                    </div>

                    <div className="space-y-4">
                      {activeTab === 'preview' ? (
                        <div className="blog-editor prose prose-slate max-w-none min-h-[600px] bg-white p-2 rounded-xl border border-dashed border-[#e4ebe7]">
                           <div dangerouslySetInnerHTML={{ __html: editorRef.current?.innerHTML || content }} />
                        </div>
                      ) : (
                        <>
                          <Label className="text-sm font-bold uppercase tracking-widest text-[#5c6b7a]">Article Content</Label>
                          <div className="editor-container border-t border-[#e4ebe7] pt-8">
                            <div
                              ref={editorRef}
                              contentEditable
                              onPaste={handlePaste}
                              className="blog-editor min-h-[600px] outline-none prose prose-slate max-w-none"
                              data-placeholder="Start writing or paste from ChatGPT/Claude..."
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* SEO & Meta */}
                <div className="bg-white rounded-2xl border border-[#e4ebe7] shadow-sm p-8 space-y-8">
                  <div className="flex items-center gap-3 border-b border-[#e4ebe7] pb-6 mb-6">
                    <Search className="w-5 h-5 text-[#1a9e6e]" />
                    <h2 className="text-xl font-display font-black italic uppercase">SEO Configuration</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Focus Keyword</Label>
                      <Input 
                        value={focusKeyword} 
                        onChange={(e) => setFocusKeyword(e.target.value)} 
                        placeholder="Keyword for SEO ranking"
                        className="bg-[#f8faf9] border-[#e4ebe7]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Read Time (mins)</Label>
                      <Input 
                        value={readTime} 
                        onChange={(e) => setReadTime(e.target.value)} 
                        placeholder="E.g. 5 min read"
                        className="bg-[#f8faf9] border-[#e4ebe7]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">SEO Excerpt (120-160 chars)</Label>
                    <Textarea 
                      value={excerpt} 
                      onChange={(e) => setExcerpt(e.target.value)} 
                      placeholder="Catchy meta description for search engines..."
                      className="min-h-[100px] bg-[#f8faf9] border-[#e4ebe7] resize-none"
                    />
                    <p className="text-right text-[10px] font-bold text-[#5c6b7a]">
                      {excerpt.length}/160 characters
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Canonical URL</Label>
                    <Input 
                      value={canonicalUrl} 
                      onChange={(e) => setCanonicalUrl(e.target.value)} 
                      placeholder="https://nexagrowth.com/blog/..."
                      className="bg-[#f8faf9] border-[#e4ebe7]"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar Settings */}
              <div className="space-y-8 sticky top-32">
                {/* Actions */}
                <div className="bg-white rounded-2xl border border-[#e4ebe7] shadow-sm p-8 space-y-4">
                  <Button 
                    onClick={() => handleSave('published')}
                    disabled={isSaving}
                    className="w-full h-14 bg-[#1a9e6e] hover:bg-[#0f6e4a] text-white font-black uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg shadow-[#1a9e6e]/20 gap-3"
                  >
                    {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
                    Launch Publication
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleSave('draft')}
                    disabled={isSaving}
                    className="w-full h-14 border-[#e4ebe7] text-[#1a2233] font-black uppercase text-xs tracking-widest rounded-xl hover:bg-[#f8faf9] gap-3"
                  >
                    <Save className="w-4 h-4" /> Save as Draft
                  </Button>
                </div>

                {/* Primary Config */}
                <div className="bg-white rounded-2xl border border-[#e4ebe7] shadow-sm p-8 space-y-8">
                  <div className="space-y-3">
                    <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Article Slug</Label>
                    <Input 
                      value={slug} 
                      onChange={(e) => setSlug(e.target.value.toLowerCase())} 
                      placeholder="url-identifier"
                      className="bg-[#f8faf9] border-[#e4ebe7] font-mono text-xs"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Growth Category</Label>
                    <Select value={category} onValueChange={(val: CategorySlug) => setCategory(val)}>
                      <SelectTrigger className="bg-[#f8faf9] border-[#e4ebe7] font-bold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(CATEGORIES).map(([slug, label]) => (
                          <SelectItem key={slug} value={slug} className="font-medium text-xs uppercase tracking-wider">{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Featured Image Link (URL)</Label>
                      <Input 
                        value={featuredImage} 
                        onChange={(e) => setFeaturedImage(e.target.value)} 
                        placeholder="https://example.com/image.jpg"
                        className="bg-[#f8faf9] border-[#e4ebe7] text-xs"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Or Upload Image</Label>
                      <div className="space-y-4">
                        {featuredImage ? (
                          <div className="relative aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-[#e4ebe7] group">
                            <img src={featuredImage} alt="Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6 text-center">
                              <ImageIcon className="w-8 h-8 text-white mb-2" />
                              <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">Image Set</p>
                              <Button size="sm" variant="secondary" onClick={() => setFeaturedImage('')} className="rounded-full h-8 text-[10px] font-black uppercase">Remove Image</Button>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-square bg-[#f8faf9] border-2 border-dashed border-[#e4ebe7] rounded-2xl flex flex-col items-center justify-center p-8 text-center transition-colors hover:border-[#1a9e6e]/50 cursor-pointer relative">
                            <ImageIcon className="w-10 h-10 text-slate-300 mb-4" />
                            <p className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest mb-1">Square Crop</p>
                            <p className="text-[10px] text-slate-400 font-medium italic">Best size: 800×800px (square)</p>
                            <input type="file" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs font-bold text-[#5c6b7a] uppercase tracking-widest">Tag Clusters</Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-[#f0faf5] text-[#1a9e6e] text-[10px] font-black uppercase tracking-tighter rounded flex items-center gap-1">
                          {tag} <Trash2 className="w-3 h-3 cursor-pointer" onClick={() => removeTag(tag)} />
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input 
                        value={tagInput} 
                        onChange={(e) => setTagInput(e.target.value)} 
                        onKeyDown={(e) => e.key === 'Enter' && addTag()}
                        placeholder="Add tag..."
                        className="h-10 text-xs bg-[#f8faf9] border-[#e4ebe7]"
                      />
                      <Button onClick={addTag} className="h-10 w-10 p-0 bg-[#e4ebe7] hover:bg-[#1a9e6e] text-[#1a2233] hover:text-white transition-colors">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      
      {/* Editor Styles Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-editor {
          min-height: 400px;
          cursor: text;
        }
        .blog-editor:empty:before {
          content: attr(data-placeholder);
          color: #cbd5e1;
          pointer-events: none;
        }
        .blog-editor h1 {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: #1a2233;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }
        .blog-editor h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a2233;
          margin-top: 2rem;
          margin-bottom: 0.6rem;
        }
        .blog-editor h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #1a9e6e;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .blog-editor h4 {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a2233;
          margin-top: 1rem;
          margin-bottom: 0.4rem;
        }
        .blog-editor p {
          font-size: 16px;
          line-height: 1.8;
          color: #3a4a5a;
          margin-bottom: 1rem;
        }
        .blog-editor blockquote {
          border-left: 4px solid #1a9e6e;
          padding-left: 1.25rem;
          color: #5c6b7a;
          font-style: italic;
          margin: 1.5rem 0;
        }
        .blog-editor table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .blog-editor th {
          background: #f0faf5;
          color: #1a2233;
          padding: 10px 14px;
          border: 1px solid #e4ebe7;
          font-weight: 700;
          text-align: left;
        }
        .blog-editor td {
          padding: 10px 14px;
          border: 1px solid #e4ebe7;
          color: #3a4a5a;
        }
        .blog-editor tr:nth-child(even) {
          background: #f8faf9;
        }
        .blog-editor code {
          background: #f0faf5;
          padding: 2px 7px;
          border-radius: 5px;
          font-family: monospace;
          font-size: 13px;
          color: #1a9e6e;
        }
        .blog-editor pre {
          background: #1a2233;
          color: #e6edf3;
          padding: 1.25rem;
          border-radius: 10px;
          overflow-x: auto;
          font-size: 13px;
        }
        .blog-editor img {
          max-width: 100%;
          border-radius: 10px;
          margin: 1rem auto;
          display: block;
        }
      `}} />
    </div>
  );
};

export default BlogAdmin;
