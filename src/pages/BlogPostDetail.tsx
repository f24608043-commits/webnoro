import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getPostBySlug, getPublishedPosts, BlogPost, CATEGORIES, CategorySlug } from '@/lib/supabase';
import { 
  Clock, 
  User, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Twitter, 
  Linkedin, 
  MessageCircle,
  Link as LinkIcon,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    const { data: currentPost, error } = await getPostBySlug(slug!);
    
    if (error || !currentPost) {
      toast.error('Post not found');
      setLoading(false);
      return;
    }

    setPost(currentPost);
    document.title = `${currentPost.title} | Nexa Growth`;

    // Fetch related posts
    const { data: allPosts } = await getPublishedPosts();
    if (allPosts) {
      const related = allPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }

    // Generate TOC
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = currentPost.content;
    const headings = tempDiv.querySelectorAll('h2, h3');
    const tocItems = Array.from(headings).map((h, i) => {
      const id = `heading-${i}`;
      h.setAttribute('id', id);
      return {
        id,
        text: h.textContent || '',
        level: h.tagName === 'H2' ? 2 : 3
      };
    });
    setToc(tocItems);

    setLoading(false);
    window.scrollTo(0, 0);
  };

  const shareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-64 pb-32 flex flex-col items-center justify-center space-y-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="text-muted-foreground font-medium animate-pulse italic uppercase tracking-widest">Accessing Nexa Knowledge Base...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-64 pb-32 text-center">
          <h1 className="text-4xl font-display font-black mb-8 text-foreground">Article Not Found</h1>
          <Link to="/blog">
            <Button className="rounded-full bg-primary hover:bg-primary/90">Back to Growth Insights</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.featured_image,
    "author": {
      "@type": "Organization",
      "name": "Nexa Growth Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexa Growth",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexagrowth.com/logo.png"
      }
    },
    "datePublished": post.created_at,
    "dateModified": post.updated_at,
    "description": post.excerpt
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Hero Image Section */}
      <section className="pt-24">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-[40px] overflow-hidden border border-border shadow-xl shadow-black/5">
            <div className="relative aspect-square md:max-h-[500px] overflow-hidden">
                <img 
                    src={post.featured_image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80'} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start gap-4">
                     <span className="px-4 py-1.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-full">
                        {CATEGORIES[post.category as CategorySlug] || post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.1] tracking-tighter uppercase italic drop-shadow-lg max-w-4xl">
                        {post.title}
                    </h1>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar TOC - Left */}
            <aside className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32 space-y-12">
                <div className="space-y-6">
                   <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            <Clock className="w-4 h-4" />
                        </div>
                        <div className="text-xs uppercase font-black text-muted-foreground tracking-widest leading-none">
                            <span className="block text-[10px] opacity-70 mb-0.5 tracking-tight font-medium italic">Read Time</span>
                            {post.read_time || '5 MIN READ'}
                        </div>
                   </div>
                   <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#f0faf5] rounded-lg flex items-center justify-center text-[#1a9e6e]">
                            <User className="w-4 h-4" />
                        </div>
                        <div className="text-xs uppercase font-black text-[#5c6b7a] tracking-widest leading-none">
                            <span className="block text-[10px] opacity-70 mb-0.5 tracking-tight font-medium italic">Strategist</span>
                            {post.author || 'Nexa Growth Team'}
                        </div>
                   </div>
                   <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#f0faf5] rounded-lg flex items-center justify-center text-[#1a9e6e]">
                            <Calendar className="w-4 h-4" />
                        </div>
                        <div className="text-xs uppercase font-black text-[#5c6b7a] tracking-widest leading-none">
                            <span className="block text-[10px] opacity-70 mb-0.5 tracking-tight font-medium italic">Published</span>
                            {date}
                        </div>
                   </div>
                </div>

                <div className="pt-10 border-t border-border">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6 italic">Navigation Map</h3>
                    <nav className="space-y-4">
                        {toc.map((item) => (
                            <a 
                                key={item.id} 
                                href={`#${item.id}`}
                                className={`block text-[13px] font-bold text-muted-foreground hover:text-primary transition-colors leading-tight ${item.level === 3 ? 'pl-4 border-l border-border' : ''}`}
                            >
                                {item.text}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="pt-10 border-t border-border">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6 italic">Amplification</h3>
                    <div className="flex items-center gap-3">
                        <button onClick={shareLink} className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                            <LinkIcon className="w-4 h-4" />
                        </button>
                        <a href="#" className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-sm">
                            <MessageCircle className="w-4 h-4" />
                        </a>
                    </div>
                </div>
              </div>
            </aside>

            {/* Post Content - Main */}
            <article className="lg:w-3/4 max-w-3xl">
              <div 
                className="prose-container blog-content"
                dangerouslySetInnerHTML={{ 
                    __html: post.content.split('<h2').map((part, i) => i === 0 ? part : `<h2 id="heading-${i-1}"` + part).join('') 
                }}
              />
              
              <div className="mt-20 pt-10 border-t border-[#e4ebe7] flex flex-wrap gap-3">
                 {post.tags?.map(tag => (
                     <span key={tag} className="px-4 py-1.5 bg-white border border-[#e4ebe7] text-[#5c6b7a] text-[11px] font-bold uppercase tracking-widest rounded-full hover:border-[#1a9e6e] hover:text-[#1a9e6e] transition-colors cursor-pointer">
                         #{tag}
                     </span>
                 ))}
              </div>

              {/* Author Box */}
              <div className="mt-16 bg-primary/10 p-10 rounded-3xl border border-primary/10 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex-shrink-0 flex items-center justify-center text-white text-3xl font-black italic shadow-lg shadow-primary/20">
                      NX
                  </div>
                  <div>
                      <h4 className="text-xl font-display font-black italic uppercase text-foreground mb-2">The Nexa Team</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          Elite strategists focused on explosive growth through digital excellence. We design, develop, and scale brands for the modern economy.
                      </p>
                      <Link to="/about" className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                          Our Mission <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                  </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-32 bg-background border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-3 mb-16">
                    <div className="w-12 h-[2px] bg-primary" />
                    <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] font-display italic">Growth Synergies</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {relatedPosts.map(post => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                            <div className="aspect-[16/10] bg-muted rounded-3xl overflow-hidden mb-6 border border-border">
                                <img src={post.featured_image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
                            </div>
                            <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-2 block">{CATEGORIES[post.category as CategorySlug] || post.category}</span>
                            <h3 className="text-xl font-display font-black text-foreground italic group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
      )}

      <Footer />

      {/* Public styles for blog content */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h1 {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: hsl(var(--foreground));
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        .blog-content h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          margin-top: 3rem;
          margin-bottom: 1.2rem;
          scroll-margin-top: 150px;
        }
        .blog-content h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-top: 2rem;
          margin-bottom: 1rem;
          scroll-margin-top: 150px;
        }
        .blog-content h4 {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-top: 1.5rem;
          margin-bottom: 0.8rem;
        }
        .blog-content p {
          font-size: 18px;
          line-height: 1.8;
          color: hsl(var(--muted-foreground));
          margin-bottom: 1.5rem;
        }
        .blog-content blockquote {
          border-left: 4px solid hsl(var(--primary));
          padding-left: 1.5rem;
          color: hsl(var(--muted-foreground));
          font-style: italic;
          margin: 2.5rem 0;
          font-size: 1.2rem;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          font-size: 16px;
          margin-bottom: 2rem;
        }
        .blog-content th {
          background: hsl(var(--primary) / 0.1);
          color: hsl(var(--foreground));
          padding: 14px 18px;
          border: 1px solid hsl(var(--border));
          font-weight: 700;
          text-align: left;
        }
        .blog-content td {
          padding: 14px 18px;
          border: 1px solid hsl(var(--border));
          color: hsl(var(--muted-foreground));
        }
        .blog-content tr:nth-child(even) {
          background: hsl(var(--muted) / 0.5);
        }
        .blog-content code {
          background: hsl(var(--primary) / 0.1);
          padding: 2px 8px;
          border-radius: 5px;
          font-family: monospace;
          font-size: 14px;
          color: hsl(var(--primary));
        }
        .blog-content pre {
          background: #1a2233;
          color: #e6edf3;
          padding: 2rem;
          border-radius: 15px;
          overflow-x: auto;
          font-size: 14px;
          margin-bottom: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .blog-content img {
          max-width: 100%;
          border-radius: 20px;
          margin: 2.5rem auto;
          display: block;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }
        .blog-content ul, .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
        }
        .blog-content li {
            font-size: 18px;
            color: hsl(var(--muted-foreground));
            margin-bottom: 0.5rem;
        }
      `}} />
    </div>
  );
};

export default BlogPostDetail;
