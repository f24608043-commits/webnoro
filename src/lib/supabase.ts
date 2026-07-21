import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_project_url' && 
  supabaseAnonKey !== 'your_supabase_anon_key';

if (!isSupabaseConfigured) {
  console.warn('Supabase is not properly configured. Some features may not work.');
  console.warn('Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.');
}

export const supabase = isSupabaseConfigured ? createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
    global: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
) : null;

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  status: 'draft' | 'published' | 'scheduled';
  tags: string[];
  read_time: string;
  focus_keyword: string;
  canonical_url: string;
  scheduled_at: string | null;
  created_at: string;
  updated_at: string;
}

export type CategorySlug = 
  | 'digital-marketing'
  | 'ecommerce-growth'
  | 'web-development'
  | 'content-strategy'
  | 'business-growth';

export const CATEGORIES: Record<CategorySlug, string> = {
  'digital-marketing': 'Digital Marketing',
  'ecommerce-growth': 'E-commerce Growth',
  'web-development': 'Web Development',
  'content-strategy': 'Content Strategy',
  'business-growth': 'Business Growth',
};

// Legacy mapping
export const mapLegacyCategory = (category: string): CategorySlug => {
  const cat = category.toLowerCase();
  if (cat === 'business') return 'business-growth';
  if (cat === 'marketing') return 'digital-marketing';
  if (cat === 'content') return 'content-strategy';
  if (cat === 'webdevelopment') return 'web-development';
  return 'business-growth'; // default
};

// Get published blogs
export const getPublishedPosts = async (): Promise<{ data: BlogPost[] | null; error: any }> => {
  if (!supabase) {
    return { data: null, error: { message: 'Supabase is not configured' } };
  }
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false });

  return { data, error };
};

// Get single post by slug
export const getPostBySlug = async (slug: string): Promise<{ data: BlogPost | null; error: any }> => {
  if (!supabase) {
    return { data: null, error: { message: 'Supabase is not configured' } };
  }
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  return { data, error };
};

// Admin CRUD
export const getAllPosts = async (): Promise<{ data: BlogPost[] | null; error: any }> => {
  if (!supabase) {
    return { data: null, error: { message: 'Supabase is not configured' } };
  }
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  return { data, error };
};

export const createPost = async (post: Partial<BlogPost>): Promise<{ data: BlogPost | null; error: any }> => {
  if (!supabase) {
    return { data: null, error: { message: 'Supabase is not configured' } };
  }
  
  try {
    console.log('Creating post with data:', { ...post, content: post.content?.substring(0, 100) + '...' });
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([post])
      .select()
      .single();

    if (error) {
      console.error('Supabase createPost error:', error);
    }

    return { data, error };
  } catch (err) {
    console.error('Unexpected error in createPost:', err);
    return { data: null, error: { message: err instanceof Error ? err.message : 'Network error - Failed to fetch', details: err } };
  }
};

export const updatePost = async (id: string, post: Partial<BlogPost>): Promise<{ data: BlogPost | null; error: any }> => {
  if (!supabase) {
    return { data: null, error: { message: 'Supabase is not configured' } };
  }
  
  try {
    console.log('Updating post:', id, 'with data:', { ...post, content: post.content?.substring(0, 100) + '...' });
    
    const { data, error } = await supabase
      .from('blog_posts')
      .update({ ...post, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase updatePost error:', error);
    }

    return { data, error };
  } catch (err) {
    console.error('Unexpected error in updatePost:', err);
    return { data: null, error: { message: err instanceof Error ? err.message : 'Network error - Failed to fetch', details: err } };
  }
};

export const deletePost = async (id: string): Promise<{ error: any }> => {
  if (!supabase) {
    return { error: { message: 'Supabase is not configured' } };
  }
  
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  return { error };
};

export const uploadBlogImage = async (file: File): Promise<string | null> => {
  if (!supabase) {
    console.error('Supabase is not configured');
    return null;
  }
  
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `blog-posts/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Error uploading image:', uploadError);
    return null;
  }

  const { data: { publicUrl } } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filePath);

  return publicUrl;
};
