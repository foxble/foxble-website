import type { Metadata } from 'next'
import { getPage } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Image from 'next/image'

// Force dynamic rendering - fetch fresh content from Contentful on every request
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPage('tracking')
    return {
      title: page.fields.title,
      description: page.fields.metaDescription,
    }
  } catch (error) {
    return {
      title: 'Tracking',
      description: 'Discover the features of our GPS tracking application.',
    }
  }
}

// Rich text rendering options with support for images and proper spacing
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4 text-lg leading-relaxed">{children}</p>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title, description } = node.data.target.fields
      const imageUrl = file.url.startsWith('//') ? `https:${file.url}` : file.url

      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={description || title || 'Tracking app screenshot'}
            width={file.details.image.width}
            height={file.details.image.height}
            className="rounded-lg shadow-lg mx-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
          {description && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">{description}</p>
          )}
        </div>
      )
    },
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h4 className="text-xl font-semibold mt-6 mb-3">{children}</h4>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
}

export default async function Tracking() {
  try {
    const page = await getPage('tracking')

    // Check if page exists and has fields
    if (!page || !page.fields) {
      console.error('Tracking page not found in Contentful or missing fields:', page)
      throw new Error('Page not found')
    }

    const { title, content } = page.fields

    return (
      <section className="min-h-screen max-w-5xl mx-auto px-4 py-16 mt-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <div>
            {documentToReactComponents(content, renderOptions)}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error loading Tracking page from Contentful:', error)
    // Fallback content if Contentful is not configured
    return (
      <section className="min-h-screen max-w-5xl mx-auto px-4 py-16 mt-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Tracking Features</h2>
          <p className="text-lg leading-relaxed mb-4">
            Our GPS tracking application provides real-time location monitoring and comprehensive device management.
          </p>
          <p className="text-lg leading-relaxed">
            Manage your content through Contentful by creating a new Page entry with slug "tracking".
          </p>
        </div>
      </section>
    )
  }
}
