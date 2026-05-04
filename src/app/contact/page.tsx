import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Foxble LLC for support, inquiries, or questions about our IoT devices.',
}

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-6 mt-16">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-lg text-gray-600">
          Have a question or need support? Send us a message and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <ContactForm />

      <div className="mt-4 text-center text-gray-600">
        <p>Or email us directly at: <a href="mailto:info@foxble.com" className="text-blue-600 hover:underline font-medium">info@foxble.com</a></p>
      </div>
    </section>
  )
}
