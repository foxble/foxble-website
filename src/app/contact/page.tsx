import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Foxble LLC for support, inquiries, or questions about our IoT devices.',
}

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">
          Have a question or need support? Send us a message and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <ContactForm />

      <div className="mt-12 text-center text-gray-600">
        <p className="mb-2">Or email us directly at:</p>
        <a href="mailto:support@foxble.com" className="text-blue-600 hover:underline font-medium">
          support@foxble.com
        </a>
      </div>
    </section>
  )
}
