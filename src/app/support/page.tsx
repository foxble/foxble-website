import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Instructions on how to use FXB102 Foxble IoT device.',
}

export default function Support() {
  const instructions = [
    { src: '/instructions/fxb102_instructions_1.png', alt: 'FXB102 Instructions 1' },
    { src: '/instructions/fxb102_instructions_2.png', alt: 'FXB102 Instructions 2' },
    { src: '/instructions/fxb102_instructions_3.png', alt: 'FXB102 Instructions 3' },
    { src: '/instructions/fxb102_instructions_4.png', alt: 'FXB102 Instructions 4' },
    { src: '/instructions/fxb102_instructions_5.png', alt: 'FXB102 Instructions 5' },
    { src: '/instructions/fxb102_instructions_6.png', alt: 'FXB102 Instructions 6' },
    { src: '/instructions/fxb102_instructions_7.png', alt: 'FXB102 Instructions 7' },
    { src: '/instructions/fxb102_instructions_8.png', alt: 'FXB102 Instructions 8' },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 mt-16">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Support</h2>
        <p className="text-lg mb-8">Instructions on how to use FXB102.</p>

        <div className="space-y-6">
          {instructions.map((instruction, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={instruction.src}
                alt={instruction.alt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
