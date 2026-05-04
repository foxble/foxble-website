'use client'

import { useState, FormEvent, useRef, useCallback } from 'react'
import Script from 'next/script'
import { event } from '@/lib/gtag'

const TURNSTILE_SITE_KEY = '0x4AAAAAADJBnhlee7XqMzse'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // honeypot - must stay empty
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  const renderTurnstile = useCallback(() => {
    if (turnstileRef.current && (window as any).turnstile && widgetIdRef.current === null) {
      widgetIdRef.current = (window as any).turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(null),
        'error-callback': () => setTurnstileToken(null),
      })
    }
  }, [])

  const resetTurnstile = () => {
    if (widgetIdRef.current !== null) {
      (window as any).turnstile.reset(widgetIdRef.current)
    }
    setTurnstileToken(null)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!turnstileToken) return
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '', website: '' })
        resetTurnstile()

        event({
          action: 'form_submission',
          category: 'Contact',
          label: 'Contact Form',
        })

        if (typeof window !== 'undefined' && (window as any).fbq) {
          ;(window as any).fbq('track', 'Lead')
        }
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Failed to send message')
        resetTurnstile()
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('An unexpected error occurred. Please try again later.')
      resetTurnstile()
    }
  }

  const fieldClass = 'w-full bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-slate-600 px-0 py-2 text-gray-700 placeholder-gray-400'
  const labelClass = 'block text-sm text-gray-500 mb-1'

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={renderTurnstile}
      />
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from real users, bots will fill it */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm">We&apos;ll get back to you as soon as possible.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
            <p className="font-medium">Error sending message</p>
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            minLength={2}
            className={fieldClass}
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className={fieldClass}
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            minLength={10}
            rows={4}
            className={`${fieldClass} resize-none`}
            disabled={status === 'loading'}
          />
        </div>

        <div ref={turnstileRef} />

        <button
          type="submit"
          disabled={status === 'loading' || !turnstileToken}
          className="bg-slate-500 hover:bg-slate-600 disabled:bg-gray-400 text-white font-medium py-3 px-8 uppercase tracking-widest text-sm transition-colors duration-200"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  )
}
