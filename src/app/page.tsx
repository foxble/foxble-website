import Hero from '@/components/Hero'
import { getHomePageHero } from '@/lib/contentful'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home() {
  try {
    const heroData = await getHomePageHero()

    if (heroData && heroData.fields) {
      const { title, subtitle1, subtitle2 } = heroData.fields
      return <Hero title={title} subtitle1={subtitle1} subtitle2={subtitle2} />
    }
  } catch (error) {
    console.error('Error loading home page hero from Contentful:', error)
  }

  // Fallback to default hero
  return <Hero />
}
