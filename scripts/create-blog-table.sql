-- Run this SQL in your Supabase SQL Editor to create the blog_posts table

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  excerpt TEXT,
  featured_image TEXT,
  author TEXT DEFAULT 'Admin',
  category TEXT DEFAULT 'business',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  tags TEXT[] DEFAULT '{}',
  read_time INTEGER DEFAULT 5,
  focus_keyword TEXT,
  canonical_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read published posts
CREATE POLICY "Published posts are viewable by everyone" ON blog_posts
  FOR SELECT USING (status = 'published');

-- Create policy for authenticated users to insert posts
CREATE POLICY "Authenticated users can insert posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy for authenticated users to update their own posts
CREATE POLICY "Authenticated users can update posts" ON blog_posts
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policy for authenticated users to delete posts
CREATE POLICY "Authenticated users can delete posts" ON blog_posts
  FOR DELETE USING (auth.role() = 'authenticated');

-- Grant permissions
GRANT ALL ON blog_posts TO authenticated;
GRANT SELECT ON blog_posts TO anon;

-- Create function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at 
  BEFORE UPDATE ON blog_posts 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert a sample post for testing
INSERT INTO blog_posts (
  title, 
  slug, 
  content, 
  excerpt, 
  author, 
  category, 
  status
) VALUES (
  'Welcome to Our Blog',
  'welcome-to-our-blog',
  'This is a sample blog post to test the system.',
  'A brief introduction to our blog platform.',
  'Admin',
  'business',
  'published'
) ON CONFLICT (slug) DO NOTHING;
