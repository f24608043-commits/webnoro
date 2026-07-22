# Codebase Optimization Prompt: Remove Backend/Admin Functionality

## Objective
Optimize the React/Vite/Tailwind CSS project by removing all unnecessary backend/admin functionality while preserving the static /blog page. Reduce bundle size, eliminate unused dependencies, and clean up the codebase for production deployment.

## Current State Analysis

### Files/Directories to Remove

**Admin/Backend Pages:**
- `src/pages/BlogAdmin.tsx` - Remove entire admin interface
- `src/pages/BlogPostDetail.tsx` - Remove if only used for admin functionality

**Supabase Integration:**
- `src/lib/supabase.ts` - Remove entire Supabase client library
- `scripts/check-supabase-status.js` - Remove Supabase testing scripts
- `scripts/test-supabase-connection.js` - Remove Supabase testing scripts
- `scripts/create-blog-table.sql` - Remove database schema
- `supabase/` directory - Remove entire Supabase configuration

**Environment Variables:**
- Remove Supabase-related variables from `.env.example`:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

### Dependencies to Remove from package.json

**Supabase-Related:**
- `@supabase/supabase-js` - Remove entire Supabase SDK

**Rich Text Editor (used in BlogAdmin):**
- `@tiptap/extension-character-count`
- `@tiptap/extension-image`
- `@tiptap/extension-link`
- `@tiptap/extension-placeholder`
- `@tiptap/react`
- `@tiptap/starter-kit`
- `lowlight` - Used by Tiptap for code highlighting

**Form Handling (used in BlogAdmin):**
- `@hookform/resolvers`
- `react-hook-form`
- `zod` - Used for form validation

**Data Fetching (used with Supabase):**
- `@tanstack/react-query` - Remove if only used for Supabase queries

**Other Potentially Unused:**
- `@emailjs/browser` - Remove if contact form is not using EmailJS
- `slugify` - Remove if only used for blog post slug generation in admin
- `date-fns` - Remove if only used in admin for date formatting

### Code Cleanup Required

**App.tsx:**
- Remove `QueryClientProvider` and `QueryClient` imports if TanStack Query is removed
- Remove `BlogAdmin` route from routing configuration
- Keep `Blog` route for static blog page

**Blog.tsx:**
- Keep all static blog post data (researchPapers, blogPosts arrays)
- Remove any Supabase fetching logic if present
- Ensure all blog content is rendered from static data arrays

**Navigation.tsx:**
- Remove any links to `/blogadmin` if present
- Keep navigation to `/blog` for static blog page

**Contact.tsx:**
- Remove EmailJS integration if not needed
- Replace with static contact form or remove entirely

### Bundle Optimization Strategies

**vite.config.ts:**
- Review and update `manualChunks` configuration after dependency removal
- Remove chunks for deleted dependencies (e.g., data-vendor if TanStack Query is removed)
- Consider reducing chunk size warning limit after optimization

**CSS Optimization:**
- Review `src/index.css` for unused custom styles
- Remove any Tailwind directives that are no longer needed
- Consolidate duplicate CSS rules

**Asset Optimization:**
- Remove unused images in `src/assets/`
- Compress remaining images if possible
- Consider lazy loading for below-the-fold images

## Step-by-Step Execution Plan

### Phase 1: Dependency Cleanup
1. Remove identified dependencies from `package.json`
2. Run `npm install` to update node_modules
3. Verify no build errors from missing dependencies

### Phase 2: File Removal
1. Delete admin pages: `BlogAdmin.tsx`, `BlogPostDetail.tsx`
2. Delete Supabase integration: `supabase.ts`, `scripts/`, `supabase/`
3. Remove environment variables from `.env.example`

### Phase 3: Code Updates
1. Update `App.tsx` to remove admin routes and QueryClient
2. Update `Blog.tsx` to ensure static data rendering
3. Update `Navigation.tsx` to remove admin links
4. Update `Contact.tsx` to remove EmailJS if applicable

### Phase 4: Build Verification
1. Run `npm run build` to verify production build
2. Check build output for errors or warnings
3. Verify bundle size reduction
4. Run `npm run preview` to test production build locally

### Phase 5: Final Testing
1. Test all remaining routes work correctly
2. Verify /blog page displays static content properly
3. Check for console errors in browser
4. Verify responsive design still works

## Expected Outcomes

**Bundle Size Reduction:**
- Target: Reduce main bundle by 30-50%
- Remove Supabase SDK (~50KB)
- Remove Tiptap editor (~100KB)
- Remove form libraries (~30KB)

**Code Simplification:**
- Remove ~5-10 component files
- Remove ~10-15 dependencies
- Simplify routing configuration
- Eliminate backend complexity

**Maintained Functionality:**
- Static /blog page with all content
- All marketing/service pages
- Project showcase
- Contact form (static or removed)
- Responsive design
- Animations and interactions

## Verification Checklist

- [ ] All admin-related files removed
- [ ] Supabase integration completely removed
- [ ] Unused dependencies removed from package.json
- [ ] App.tsx routing updated
- [ ] Blog.tsx using static data only
- [ ] Navigation updated (no admin links)
- [ ] Build completes without errors
- [ ] Bundle size reduced significantly
- [ ] All remaining pages functional
- [ ] /blog page displays correctly
- [ ] No console errors in production build
- [ ] Responsive design intact

## Rollback Strategy

If issues arise during optimization:
1. Keep git commit before optimization
2. Test changes incrementally
3. Revert individual steps if needed
4. Maintain backup of removed files temporarily

## Notes

- The /blog page should remain fully functional with all static content
- Do not remove any UI components used in remaining pages
- Preserve all animations and visual effects
- Maintain SEO optimization (meta tags, structured data)
- Keep Vercel deployment configuration intact
