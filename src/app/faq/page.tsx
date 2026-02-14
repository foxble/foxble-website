import type { Metadata } from 'next'
import { getPage } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import type { Block, Inline } from '@contentful/rich-text-types'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPage('faq')
    return {
      title: page.fields.title,
      description: page.fields.metaDescription,
    }
  } catch (error) {
    return {
      title: 'FAQ',
      description: 'Frequently asked questions about Foxble tracking solutions.',
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
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc ml-6 mb-4 [&_li_p]:mb-0 [&_li_p]:inline">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal ml-6 mb-4 [&_li_p]:mb-0 [&_li_p]:inline">{children}</ol>
    ),
  },
}

export default async function FAQ() {
  try {
    const page = await getPage('faq')

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
    console.error('Error loading FAQ page from Contentful:', error)
    // Fallback content
    return (
      <section className="min-h-screen max-w-4xl mx-auto px-4 py-16 mt-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-8">FAQ</h2>
          <p className="text-lg leading-relaxed">
            Content managed through Contentful. Create a Page entry with slug "faq".
          </p>
        </div>
      </section>
    )
  }
}
