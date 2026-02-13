import type { Metadata } from 'next'
import { getFeatureSections } from '@/lib/contentful'
import Image from 'next/image'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Tracking Solution',
  description: 'Professional GPS tracking solutions with real-time monitoring, daily reports, and comprehensive device management.',
}

export default async function Tracking() {
  try {
    const sections = await getFeatureSections()

    if (!sections || sections.length === 0) {
      throw new Error('No feature sections found')
    }

    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 py-16 mt-16">
          <h1 className="text-4xl font-bold text-center mb-16">Tracking Solution</h1>

          {/* Feature Sections */}
          <div className="space-y-24">
            {sections.map((section: any, index: number) => {
              const { title, description, image, imagePosition } = section.fields
              const imageUrl = image?.fields?.file?.url
                ? (image.fields.file.url.startsWith('//')
                  ? `https:${image.fields.file.url}`
                  : image.fields.file.url)
                : null

              const isImageLeft = imagePosition === 'left'

              return (
                <div
                  key={section.sys.id}
                  className={`flex flex-col ${
                    isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                  } items-center gap-8 md:gap-12`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Image */}
                  {imageUrl && (
                    <div className="flex-1 w-full">
                      <div className="relative w-full">
                        <Image
                          src={imageUrl}
                          alt={image.fields.description || title}
                          width={image.fields.file.details.image.width}
                          height={image.fields.file.details.image.height}
                          className="w-full h-auto"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading tracking page:', error)

    // Fallback content
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 mt-16">
          <h1 className="text-4xl font-bold text-center mb-8">Tracking Solution</h1>
          <p className="text-center text-gray-600">
            Content managed through Contentful. Create "Feature Section" entries to display here.
          </p>
        </div>
      </div>
    )
  }
}
