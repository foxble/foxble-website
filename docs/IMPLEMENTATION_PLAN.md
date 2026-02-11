# Foxble Production Website - AWS Hosting Implementation Plan

## Overview

Transform the existing React website (CRA) into a production-ready, SEO-optimized static site hosted on AWS with authentication, headless CMS, and analytics.

**Selected Architecture:**
- **Hosting**: Vercel (static hosting with global CDN)
- **CMS**: Contentful (managed headless CMS)
- **Analytics**: Google Analytics 4
- **Authentication**: None needed (public marketing site)
- **SSL**: Automatic via Vercel
- **Domain**: GoDaddy DNS → Vercel

**Estimated Monthly Cost**: $0 (Vercel free tier)
**Estimated Timeline**: 3-4 days

---

## Architecture Diagram

```
User (foxble.com)
    ↓ HTTPS (automatic)
Vercel Edge Network (global CDN)
    ├─→ /* → Next.js Static Site (SSG)
    └─→ /api/contact → Vercel Serverless Function → Email service

Contentful CMS → Webhook → Vercel → Auto Build & Deploy

Google Analytics 4 (client-side tracking)
GoDaddy DNS (CNAME → Vercel)

Separate:
User → tracking.foxble.com → AWS ALB → EC2 (18.246.13.6)
```

---

## Technology Stack

### Frontend Migration: Create React App → Next.js 14

**Current**: React 17 + CRA + React Router v5
**Target**: Next.js 14 + App Router + TypeScript

**Why Next.js:**
- Static Site Generation (SSG) for exceptional SEO
- Built-in optimizations (images, fonts, code splitting)
- Metadata API for dynamic meta tags per page
- File-based routing (simpler than React Router)
- React Server Components for better performance

**Keep from existing:**
- React components structure
- Layout pattern (Header, Footer)
- Contact form component (with security improvements)

**Replace:**
- Create React App → Next.js 14
- Semantic UI React → Tailwind CSS
- React Router → Next.js App Router
- EmailJS → Backend Lambda + SES (more secure, no exposed credentials)
- Hardcoded content → Contentful CMS

**Add:**
- "Sign In" link in navigation → portal.foxble.com (separate tracking portal site)

### Backend Stack

**API**: Vercel Serverless Functions
- Single API route for contact form (`app/api/contact/route.ts`)
- Language: TypeScript (same as frontend)
- Email via Resend, SendGrid, or Nodemailer

**No Authentication**: Public marketing site, no user accounts needed

**No Database**: Contact form emails directly (no storage)

---

## Critical Files to Create/Modify

### 1. Next.js Configuration

**File**: `next.config.js`

```javascript
module.exports = {
  // No output: 'export' needed - Vercel handles this automatically
  images: {
    // Vercel's Image Optimization works automatically
    domains: ['images.ctfassets.net'], // Contentful CDN
  },
  // Security headers (Vercel applies these automatically)
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }]
  },
}
```

### 2. Root Layout with SEO & Analytics

**File**: `app/layout.tsx`

Implement:
- Global metadata (title, description, Open Graph, Twitter Cards)
- Google Analytics 4 integration with Next.js Script
- Global styles (Tailwind CSS)
- Structured data (Organization schema)
- Navigation with "Sign In" link to tracking.foxble.com

Reference: Next.js Metadata API for dynamic per-page meta tags

**Navigation Structure:**
```tsx
// components/Header.tsx
<nav>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
  <Link href="/faqs">FAQs</Link>
  <Link href="/support">Support</Link>
  <Link href="/policies">Policies</Link>
  <a href="https://tracking.foxble.com" className="sign-in-button">
    Sign In
  </a>
</nav>
```

### 3. Contentful Integration

**File**: `lib/contentful.ts`

```typescript
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getPage(slug: string) {
  const response = await client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
  })
  return response.items[0]
}

export async function getAllPages() {
  const response = await client.getEntries({
    content_type: 'page',
    order: ['fields.publishDate'],
  })
  return response.items
}
```

**Contentful Content Types:**
1. Page (title, slug, metaDescription, content, publishDate)
2. BlogPost (title, slug, excerpt, body, author, category)
3. Author (name, bio, photo)
4. SiteSettings (siteName, contactEmail, socialLinks)

### 4. Contact Form API Route (Vercel Serverless Function)

**File**: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend' // or use nodemailer, sendgrid, etc.

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }
    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    // Send email via Resend
    await resend.emails.send({
      from: 'noreply@foxble.com',
      to: 'contact@foxble.com',
      subject: `Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

**Email Service Options:**
1. **Resend** (Recommended) - Modern, Next.js-friendly, generous free tier
2. **SendGrid** - Popular, reliable, 100 emails/day free
3. **Nodemailer** - Use your own SMTP server
4. **Postmark** - Reliable, good deliverability

**Security improvements over EmailJS:**
- No exposed credentials in frontend
- Server-side validation
- Rate limiting via Vercel (automatic)
- Email sanitization
- Environment variables for API keys

### 5. Contact Form Component

**File**: `components/ContactForm.tsx`

Replace EmailJS implementation in `/home/simon/Documents/Files/Claude/foxble/website/src/components/pages/Contact.js` with:
- React hook form for validation
- Fetch to backend API endpoint
- Loading states
- Success/error messages
- Google Analytics event tracking on submit

### 6. Deployment Configuration

**File**: `vercel.json` (optional - Vercel auto-detects Next.js)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "CONTENTFUL_SPACE_ID": "@contentful-space-id",
    "CONTENTFUL_ACCESS_TOKEN": "@contentful-access-token",
    "NEXT_PUBLIC_GA_MEASUREMENT_ID": "@ga-measurement-id",
    "RESEND_API_KEY": "@resend-api-key"
  }
}
```

**Deployment is automatic:**
- Push to GitHub → Vercel auto-deploys
- Contentful webhook → Triggers rebuild
- Every PR gets preview deployment
- Zero configuration needed

**Environment Variables (set in Vercel Dashboard):**
- `CONTENTFUL_SPACE_ID` - Contentful space ID
- `CONTENTFUL_ACCESS_TOKEN` - Contentful API token
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID
- `RESEND_API_KEY` - Email service API key

### 7. SEO Implementation

**Files:**
- `app/sitemap.ts` - Auto-generated XML sitemap
- `app/robots.ts` - robots.txt configuration
- `app/layout.tsx` - Global metadata
- `app/[page]/page.tsx` - Per-page metadata

**Key features:**
- Dynamic meta tags (title, description, OG tags)
- Structured data (JSON-LD for Organization)
- Canonical URLs
- Twitter Card tags
- Google Search Console verification
- Optimized images (alt text, WebP format)

### 8. Google Analytics 4

**File**: `lib/gtag.ts`

```typescript
export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

**Integration points:**
- Layout: Load gtag.js script
- Analytics component: Track route changes
- Contact form: Track submissions
- Buttons: Track CTA clicks

---

## Tracking Portal Portal (Separate Project)

The "Sign In" link will point to **portal.foxble.com**, which will be a separate deployment of an authenticated tracking portal application.

**Options for Tracking Portal:**

1. **Deploy nrfcloud codebase** (`/home/simon/Documents/Files/Claude/nrfcloud`)
   - Already has full authentication system
   - MySQL database with user management
   - Device tracking and permissions
   - Would need to be deployed separately (EC2, ECS, or similar)
   - Requires separate ACM certificate for portal.foxble.com

2. **New tracking portal application**
   - Build from scratch with specific requirements
   - Could reuse nrfcloud auth patterns
   - Deployed separately from marketing site

**Deployment considerations:**
- Requires separate infrastructure (not covered in this plan)
- Needs its own SSL certificate
- Database hosting (RDS/DynamoDB)
- Backend API hosting (EC2, ECS, Lambda, etc.)

**For this plan:** We'll add the "Sign In" link that points to portal.foxble.com. The actual tracking portal deployment would be a separate project.

---

## Content Migration Strategy

### Current Content Locations

From `/home/simon/Documents/Files/Claude/foxble/website/src/components/pages/`:

1. **Home.js** - Header with "Global Wireless IoT" title
2. **About.js** - 2 paragraphs about company
3. **Faqs.js** - 230+ lines of FAQ content (device ID, battery, sensors)
4. **Support.js** - 8 instruction images
5. **Policies.js** - Privacy policy and terms
6. **Contact.js** - Contact form (keeping, but migrating to secure backend)

### Migration Steps

1. **Setup Contentful**:
   - Create content types (Page, BlogPost, Author, etc.)
   - Configure rich text editor
   - Setup webhooks to GitHub

2. **Migrate Content**:
   - Manually copy text from JSX to Contentful
   - Upload images to Contentful media library
   - Create page entries with proper slugs
   - Add meta descriptions for SEO

3. **Update Code**:
   - Replace hardcoded JSX with Contentful queries
   - Use `getPage(slug)` to fetch content at build time
   - Render rich text with React components

4. **Verify**:
   - All pages render correctly
   - Images display properly
   - Links work
   - Meta tags correct

---

## Domain & SSL Configuration

### GoDaddy DNS Setup

**No SSL certificate setup needed - Vercel handles this automatically!**

1. **Deploy to Vercel first** (get Vercel deployment URL)
   ```bash
   vercel --prod
   # Returns: https://foxble-abc123.vercel.app
   ```

2. **Add custom domain in Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add: `foxble.com` and `www.foxble.com`
   - Vercel will provide DNS records

3. **Add DNS Records to GoDaddy**:

   **Marketing Site (from Vercel):**
   - Type: CNAME
   - Name: @ (or use A record if CNAME not supported for root)
   - Value: `cname.vercel-dns.com` (from Vercel dashboard)
   - TTL: 600

   - Type: CNAME
   - Name: www
   - Value: `cname.vercel-dns.com`
   - TTL: 600

   **Tracking Portal Portal (AWS - separate):**
   - Type: A Record
   - Name: datahub
   - Value: [ALB IP or use CNAME to ALB DNS name]
   - TTL: 600

4. **Verify**:
   ```bash
   dig foxble.com
   curl -I https://foxble.com
   # SSL certificate automatically provisioned by Vercel!
   ```

**Notes:**
- Vercel automatically provisions SSL certificates (Let's Encrypt)
- HTTPS enabled immediately
- Auto-renewal every 90 days
- No manual certificate management needed

---

## Implementation Phases (Vercel + AWS Hybrid)

### Day 1: Project Setup & Contentful (4 hours)

**Morning (2 hours): Next.js Project**
- [ ] Create Next.js 14 project: `npx create-next-app@latest foxble-website`
- [ ] Setup Tailwind CSS (included in setup)
- [ ] Install dependencies: `contentful`, `@next/third-parties`
- [ ] Create basic file structure (components, lib, app directories)
- [ ] Implement Contentful SDK (`lib/contentful.ts`)
- [ ] Test local development: `npm run dev`

**Afternoon (2 hours): Contentful Setup**
- [ ] Create Contentful account (free tier)
- [ ] Design content model (Page, BlogPost, Author, SiteSettings)
- [ ] Migrate content from existing JSX files to Contentful
- [ ] Upload images to Contentful media library
- [ ] Test content fetching locally

### Day 2: Pages & Deployment (4 hours)

**Morning (2 hours): Build Pages**
- [ ] Migrate Header, Footer, Layout components
- [ ] Convert all pages to App Router format
- [ ] Implement metadata API for SEO
- [ ] Add Google Analytics 4
- [ ] Create dynamic routes for CMS content
- [ ] Add "Sign In" link to tracking.foxble.com

**Afternoon (2 hours): Deploy to Vercel**
- [ ] Push code to GitHub
- [ ] Connect GitHub repo to Vercel
- [ ] Configure environment variables in Vercel dashboard
- [ ] Deploy: `vercel --prod`
- [ ] Verify deployment: check Vercel URL
- [ ] Test all pages load correctly

### Day 3: Contact Form & DNS (4 hours)

**Morning (2 hours): Contact Form**
- [ ] Setup email service (Resend account - free tier)
- [ ] Create API route: `app/api/contact/route.ts`
- [ ] Build ContactForm component
- [ ] Add form validation
- [ ] Test form locally
- [ ] Deploy and test in production
- [ ] Add GA4 event tracking for submissions

**Afternoon (2 hours): Custom Domain & DNS**
- [ ] Add custom domain in Vercel: foxble.com, www.foxble.com
- [ ] Get DNS records from Vercel
- [ ] Update GoDaddy DNS records
- [ ] Wait for DNS propagation (15-60 minutes)
- [ ] Verify HTTPS working (Vercel auto-provisions SSL)
- [ ] Test site on custom domain

### Day 4: Tracking Portal SSL & Final Testing (4-6 hours)

**Morning (3 hours): Tracking Portal SSL Setup**
- [ ] Create AWS Application Load Balancer
- [ ] Request ACM certificate for tracking.foxble.com
- [ ] Configure target group pointing to EC2 (18.246.13.6)
- [ ] Update GoDaddy DNS: tracking.foxble.com → ALB
- [ ] Wait for SSL certificate validation
- [ ] Verify HTTPS access to tracking portal
- [ ] Test "Sign In" link from marketing site

**Afternoon (2-3 hours): Final Testing & Launch**
- [ ] Content review (spelling, links, images)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive testing (iOS, Android)
- [ ] Test contact form end-to-end
- [ ] Verify GA4 tracking working
- [ ] Run Lighthouse audit (target 95+)
- [ ] Setup Contentful webhook to trigger Vercel rebuilds
- [ ] Go live! 🚀

### Optional: Day 5 (Post-Launch)
- [ ] Monitor Vercel analytics
- [ ] Check GA4 real-time data
- [ ] Monitor contact form submissions
- [ ] Setup Vercel alerts for errors
- [ ] Documentation for content updates

**Total Timeline: 3-4 days (16-20 hours of work)**

---

## Key Commands

### Development
```bash
# Create new Next.js project
npx create-next-app@latest foxble-website --typescript --tailwind --app

# Install dependencies
npm install contentful @next/third-parties resend

# Run development server
npm run dev
# Opens at http://localhost:3000

# Build locally (optional - Vercel does this)
npm run build

# Preview production build locally
npm run start
```

### Deployment
```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# That's it! Vercel handles:
# - Building Next.js
# - Deploying static assets
# - Deploying serverless functions
# - SSL certificates
# - CDN distribution
# - Cache invalidation
```

### Contentful Webhook Setup
```bash
# In Contentful:
# Settings → Webhooks → Add Webhook
# Name: "Trigger Vercel Deploy"
# URL: https://api.vercel.com/v1/integrations/deploy/[PROJECT_ID]/[TOKEN]
# Get URL from Vercel: Project Settings → Git → Deploy Hooks
# Trigger on: Publish & Unpublish events
```

### Environment Variables (Vercel Dashboard)
```bash
# Project Settings → Environment Variables:
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

---

## Security Considerations

1. **API Security**:
   - CORS properly configured
   - Rate limiting via API Gateway
   - Input validation (Pydantic)
   - SQL injection prevention (parameterized queries)

3. **Infrastructure**:
   - SES email identity verification
   - CloudFront with SSL/TLS only
   - IAM least privilege for Lambda

4. **Frontend**:
   - Content Security Policy headers
   - XSS prevention (React escaping)
   - HTTPS enforcement

---

## Testing & Verification

### Manual Testing
1. **Static Site**: Verify all pages load correctly
2. **CMS**: Update content in Contentful, verify auto-deploy
3. **Contact Form**: Submit form, verify email received
4. **Analytics**: Check GA4 dashboard for events
5. **HTTPS**: Verify SSL certificate, no mixed content
6. **Mobile**: Test responsive design on mobile devices

### Automated Testing
1. **Unit Tests**: Component tests with Jest + React Testing Library
2. **Integration Tests**: API endpoint tests
3. **E2E Tests**: Playwright for user flows
4. **SEO Tests**: Meta tags, sitemap, structured data
5. **Performance**: Lighthouse CI (target 95+)

### Monitoring
1. **CloudWatch**: Lambda errors, API Gateway metrics
2. **Google Analytics**: User behavior, page views
3. **CloudFront**: Cache hit rate, error rates
4. **SES**: Email delivery metrics, bounce rates

---

