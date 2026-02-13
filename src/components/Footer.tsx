import { getSiteSettings } from '@/lib/contentful'

export default async function Footer() {
  const currentYear = new Date().getFullYear()

  let companyName = 'Foxble LLC'
  let location = 'San Francisco, California'

  try {
    const settings = await getSiteSettings()
    if (settings && settings.fields) {
      companyName = settings.fields.companyName || companyName
      location = settings.fields.location || location
    }
  } catch (error) {
    console.error('Error loading site settings:', error)
    // Use fallback values above
  }

  return (
    <footer className="bg-[#37387a] text-white py-8 text-center">
      <div className="text-sm text-white/60">
        <p>&copy; {currentYear} {companyName}</p>
        <p>{location}</p>
      </div>
    </footer>
  )
}
