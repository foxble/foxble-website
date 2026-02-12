import Hero from '@/components/Hero'
import { getHomePageHero } from '@/lib/contentful'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home() {
  try {
    const heroData = await getHomePageHero()

    if (heroData && heroData.fields) {
      const { title, subtitle1, subtitle2, backgroundImage, bannerImage, showBanner } = heroData.fields

      // Get image URLs from Contentful (add https: if needed)
      const backgroundImageUrl = backgroundImage?.fields?.file?.url
        ? (backgroundImage.fields.file.url.startsWith('//')
          ? `https:${backgroundImage.fields.file.url}`
          : backgroundImage.fields.file.url)
        : undefined

      const bannerImageUrl = bannerImage?.fields?.file?.url
        ? (bannerImage.fields.file.url.startsWith('//')
          ? `https:${bannerImage.fields.file.url}`
          : bannerImage.fields.file.url)
        : undefined

      return (
        <Hero
          title={title}
          subtitle1={subtitle1}
          subtitle2={subtitle2}
          backgroundImage={backgroundImageUrl}
          bannerImage={bannerImageUrl}
          showBanner={showBanner !== false} // Default to true if not specified
        />
      )
    }
  } catch (error) {
    console.error('Error loading home page hero from Contentful:', error)
  }

  // Fallback to default hero
  return <Hero />
}
