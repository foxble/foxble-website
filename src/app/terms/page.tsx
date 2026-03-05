import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Foxble LLC Terms of Service - Legal agreement governing use of the Foxble platform.',
}

export default function TermsOfService() {
  const filePath = path.join(process.cwd(), 'legal', 'terms-of-service.md')
  const content = fs.readFileSync(filePath, 'utf8')

  return (
    <section className="min-h-screen max-w-4xl mx-auto px-4 py-16 mt-16">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="text-3xl font-bold mb-8">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-4">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
            p: ({ children }) => <p className="mb-4 text-lg leading-relaxed">{children}</p>,
            ul: ({ children }) => <ul className="list-disc ml-6 mb-4 [&_li_p]:mb-0 [&_li_p]:inline">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal ml-6 mb-4 [&_li_p]:mb-0 [&_li_p]:inline">{children}</ol>,
            li: ({ children }) => <li className="text-lg leading-relaxed mb-1">{children}</li>,
            hr: () => <hr className="my-8 border-gray-300" />,
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  )
}
