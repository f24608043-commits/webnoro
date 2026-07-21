-- Supabase Blog Table Setup (Updated Schema with Image and Category)
-- Run this SQL in your Supabase SQL Editor

-- Drop existing table if it exists (to update schema)
DROP TABLE IF EXISTS blogs;

-- Create blogs table with updated schema
CREATE TABLE blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('business', 'webdevelopment', 'marketing', 'content')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published'))
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to read published blogs
CREATE POLICY "Public read published"
ON blogs FOR SELECT
TO anon, authenticated
USING (status = 'published');

-- Policy: Allow anyone to create blogs (simple admin - uses password gate instead)
CREATE POLICY "Allow all create"
ON blogs FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Allow authenticated users to update blogs (for admin)
CREATE POLICY "Allow authenticated update"
ON blogs FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Policy: Allow authenticated users to delete blogs (for admin)
CREATE POLICY "Allow authenticated delete"
ON blogs FOR DELETE
TO authenticated
USING (true);

-- Create indexes for faster lookups
CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_status ON blogs(status);
CREATE INDEX idx_blogs_category ON blogs(category);
CREATE INDEX idx_blogs_created_at ON blogs(created_at DESC);
