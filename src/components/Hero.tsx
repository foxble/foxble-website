import Image from 'next/image'

interface HeroProps {
  title?: string
  subtitle1?: string
  subtitle2?: string
  showBanner?: boolean
}

export default function Hero({
  title = 'Global Wireless IoT',
  subtitle1 = 'Connecting devices in real time',
  subtitle2 = 'Satellite Cellular BLE',
  showBanner = true,
}: HeroProps) {
  return (
    <header className="relative h-[calc(100vh-80px)] flex flex-col justify-center text-center text-white overflow-hidden bg-[#37387a]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/space.jpg"
          alt="Space background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 flex-1 flex flex-col justify-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <h2 className="text-2xl font-light mb-4">{subtitle1}</h2>
          <h2 className="text-2xl font-light mb-4">{subtitle2}</h2>
        </div>

        {showBanner && (
          <div className="mt-auto pt-8 pb-4">
            <Image
              src="/banner728x90ehx.jpg"
              alt="Foxble Banner"
              width={728}
              height={90}
              className="mx-auto"
            />
          </div>
        )}
      </div>
    </header>
  )
}
