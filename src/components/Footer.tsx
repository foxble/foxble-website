import { getSiteSettings } from '@/lib/contentful'

export default async function Footer() {
  const currentYear = new Date().getFullYear()

  let companyName = 'Foxble.com'

  try {
    const settings = await getSiteSettings()
    if (settings && settings.fields) {
      companyName = settings.fields.companyName || companyName
    }
  } catch (error) {
    console.error('Error loading site settings:', error)
  }

  return (
    <footer className="bg-[#37387a] text-white py-5">
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-white/70">&copy; {currentYear} {companyName}</span>
        <span className="text-white/30">|</span>
        <a href="mailto:info@foxble.com" className="text-blue-300 hover:text-blue-200 transition-colors">
          info@foxble.com
        </a>
      </div>
    </footer>
  )
}
