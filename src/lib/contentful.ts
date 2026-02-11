import { createClient, Entry } from 'contentful'

// Type definitions for Contentful entries
export interface PageFields {
  title: string
  slug: string
  metaDescription: string
  content: any // Rich text content
  publishDate: string
}

export interface BlogPostFields {
  title: string
  slug: string
  excerpt: string
  body: any // Rich text content
  author: any // Author reference
  category: string
  publishDate: string
}

export interface AuthorFields {
  name: string
  bio: string
  photo: any
}

export interface SiteSettingsFields {
  siteName: string
  contactEmail: string
  socialLinks: any
}

// Create Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

/**
 * Fetch a single page by slug
 */
export async function getPage(slug: string): Promise<Entry<PageFields> | null> {
  try {
    const response = await client.getEntries<PageFields>({
      content_type: 'page',
      'fields.slug': slug,
      limit: 1,
    })

    return response.items[0] || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

/**
 * Fetch all pages
 */
export async function getAllPages(): Promise<Entry<PageFields>[]> {
  try {
    const response = await client.getEntries<PageFields>({
      content_type: 'page',
      order: ['fields.publishDate'],
    })

    return response.items
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

/**
 * Fetch all blog posts
 */
export async function getAllBlogPosts(): Promise<Entry<BlogPostFields>[]> {
  try {
    const response = await client.getEntries<BlogPostFields>({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],
    })

    return response.items
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<Entry<BlogPostFields> | null> {
  try {
    const response = await client.getEntries<BlogPostFields>({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })

    return response.items[0] || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

/**
 * Fetch site settings
 */
export async function getSiteSettings(): Promise<Entry<SiteSettingsFields> | null> {
  try {
    const response = await client.getEntries<SiteSettingsFields>({
      content_type: 'siteSettings',
      limit: 1,
    })

    return response.items[0] || null
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}
