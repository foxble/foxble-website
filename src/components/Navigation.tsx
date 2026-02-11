'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/tracking', label: 'Tracking' },
    { href: '/policies', label: 'Policies' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold py-4 px-5 text-black hover:text-gray-700 transition-colors"
            style={{ fontFamily: 'Michroma, sans-serif' }}
          >
            FOXBLE
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-7 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <span
                className={`block absolute h-0.5 w-full bg-gray-800 transition-all duration-200 ${
                  isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`block absolute top-2 h-0.5 w-full bg-gray-800 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-full bg-gray-800 transition-all duration-200 ${
                  isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
              />
            </div>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-7 py-5 text-black hover:bg-gray-100 transition-colors border-r border-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://tracking.foxble.com"
                className="block px-7 py-5 text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <ul
          className={`md:hidden bg-white overflow-hidden transition-all duration-200 ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-5 py-5 text-black hover:bg-gray-100 transition-colors border-r border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://tracking.foxble.com"
              className="block px-5 py-5 text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
