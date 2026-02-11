import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Foxble LLC and our environmental sensing IoT devices manufactured in the USA.',
}

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 mt-16">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-lg leading-relaxed mb-4">
          FOXBLE LLC engineers and assembles environmental sensing bluetooth low energy devices for informational purposes in the USA.
        </p>
        <p className="text-lg leading-relaxed">
          Upcoming satellite and cellular gateway versions will expand our global connectivity and capabilities.
        </p>
      </div>
    </section>
  )
}
