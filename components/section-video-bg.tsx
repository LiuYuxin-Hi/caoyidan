"use client"

export function SectionVideoBg({
  src,
  opacity = 0.22,
}: {
  src: string
  opacity?: number
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        className="h-full w-full scale-105 object-cover object-center"
        style={{ opacity }}
        src={src}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      />
    </div>
  )
}
