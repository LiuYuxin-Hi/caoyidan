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
        className="h-full w-full object-cover object-center"
        style={{ opacity }}
        src={src}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      />
      {/* Dark wash + vignette to keep text legible */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_rgba(0,0,0,0.85)_100%)]" />
    </div>
  )
}
