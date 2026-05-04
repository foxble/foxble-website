import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Foxble LLC for support, inquiries, or questions about our IoT devices.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="max-w-2xl mx-auto px-8 pt-24 pb-12">
        <h2 className="text-4xl font-light tracking-[0.3em] text-center text-slate-400 uppercase mb-10">
          Get in Touch
        </h2>
        <ContactForm />
      </section>
    </div>
  )
}
