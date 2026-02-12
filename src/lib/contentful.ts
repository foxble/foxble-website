import { createClient } from 'contentful'

// Create Contentful client
const client = createClient({
  space: (process.env.CONTENTFUL_SPACE_ID || '').trim(),
  accessToken: (process.env.CONTENTFUL_ACCESS_TOKEN || '').trim(),
})

/**
 * Fetch a single page by slug
 */
export async function getPage(slug: string): Promise<any> {
  try {
    const response = await client.getEntries({
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
export async function getAllPages(): Promise<any[]> {
  try {
    const response = await client.getEntries({
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
export async function getAllBlogPosts(): Promise<any[]> {
  try {
    const response = await client.getEntries({
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
export async function getBlogPost(slug: string): Promise<any> {
  try {
    const response = await client.getEntries({
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
export async function getSiteSettings(): Promise<any> {
  try {
    const response = await client.getEntries({
      content_type: 'siteSettings',
      limit: 1,
    })

    return response.items[0] || null
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

/**
 * Fetch home page hero content
 */
export async function getHomePageHero(): Promise<any> {
  try {
    const response = await client.getEntries({
      content_type: 'homePageHero',
      limit: 1,
    })

    return response.items[0] || null
  } catch (error) {
    console.error('Error fetching home page hero:', error)
    return null
  }
}
