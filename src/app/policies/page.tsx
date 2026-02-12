import type { Metadata } from 'next'
import { getPage } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPage('policies')
    return {
      title: page.fields.title,
      description: page.fields.metaDescription,
    }
  } catch (error) {
    return {
      title: 'Policies',
      description: 'Foxble LLC privacy policy, terms and conditions, and legal disclaimers.',
    }
  }
}

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4 text-lg leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h4 className="text-xl font-semibold mt-6 mb-3">{children}</h4>
    ),
  },
}

export default async function Policies() {
  try {
    const page = await getPage('policies')

    if (!page || !page.fields) {
      throw new Error('Page not found')
    }

    const { title, content } = page.fields

    return (
      <section className="min-h-screen max-w-4xl mx-auto px-4 py-16 mt-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          <div>
            {documentToReactComponents(content, renderOptions)}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error loading Policies page from Contentful:', error)
    // Fallback content
    return (
      <section className="min-h-screen max-w-4xl mx-auto px-4 py-16 mt-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-8">Policies</h2>
          <p className="text-lg leading-relaxed">
            Content managed through Contentful. Create a Page entry with slug "policies".
          </p>
        </div>
      </section>
    )
  }
}
