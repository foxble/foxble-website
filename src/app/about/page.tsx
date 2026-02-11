import type { Metadata } from 'next'
import { getPage } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Force dynamic rendering - fetch fresh content from Contentful on every request
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPage('about')
    return {
      title: page.fields.title,
      description: page.fields.metaDescription,
    }
  } catch (error) {
    return {
      title: 'About',
      description: 'Learn about Foxble and our GPS tracking solutions.',
    }
  }
}

export default async function About() {
  try {
    const page = await getPage('about')

    // Check if page exists and has fields
    if (!page || !page.fields) {
      console.error('About page not found in Contentful or missing fields:', page)
      throw new Error('Page not found')
    }

    const { title, content } = page.fields

    return (
      <section className="max-w-4xl mx-auto px-4 py-16 mt-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <div className="text-lg leading-relaxed">
            {documentToReactComponents(content)}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error loading About page from Contentful:', error)
    // Fallback content if Contentful is not configured
    return (
      <section className="max-w-4xl mx-auto px-4 py-16 mt-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-lg leading-relaxed mb-4">
            Foxble is a dedicated GPS tracking service provider committed to keeping what matters most to you safe and connected.
          </p>
          <p className="text-lg leading-relaxed">
            Founded with a mission to make professional-grade GPS tracking accessible and affordable, we combine cutting-edge technology with user-friendly interfaces.
          </p>
        </div>
      </section>
    )
  }
}
