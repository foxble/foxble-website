export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#37387a] text-white py-8 text-center">
      <div className="text-sm text-white/60">
        <p>&copy; {currentYear} Foxble LLC</p>
        <p>San Francisco, California</p>
      </div>
    </footer>
  )
}
