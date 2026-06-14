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
      <div className="absolute inset-0 bg-[linear-gradient(110deg,_rgba(0,0,0,0.88)_0%,_rgba(0,0,0,0.62)_42%,_rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_18%,_rgba(0,0,0,0.88)_100%)]" />
    </div>
  )
}
