"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, GraduationCap, ArrowDown } from "lucide-react"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ResearchSection } from "@/components/research-section"
import { HonorsSection } from "@/components/honors-section"
import { ExperienceSection } from "@/components/experience-section"
import { FooterSection } from "@/components/footer-section"

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"

const NAV_LINKS = [
  { label: "关于", href: "#about" },
  { label: "教育", href: "#education" },
  { label: "科研", href: "#research" },
  { label: "荣誉", href: "#honors" },
  { label: "实习", href: "#experience" },
]

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadeRafRef = useRef<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const cancelFade = () => {
      if (fadeRafRef.current !== null) {
        cancelAnimationFrame(fadeRafRef.current)
        fadeRafRef.current = null
      }
    }

    const fadeTo = (target: number, duration: number) => {
      cancelFade()
      const start = performance.now()
      const from = Number.parseFloat(video.style.opacity || "0")
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        video.style.opacity = String(from + (target - from) * t)
        if (t < 1) {
          fadeRafRef.current = requestAnimationFrame(step)
        } else {
          fadeRafRef.current = null
        }
      }
      fadeRafRef.current = requestAnimationFrame(step)
    }

    const handleCanPlay = () => {
      video.play().catch(() => {})
      fadeTo(1, 500)
    }

    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime
      if (!Number.isNaN(remaining) && remaining <= 0.55) {
        fadeTo(0, 500)
      }
    }

    const handleEnded = () => {
      video.style.opacity = "0"
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadeTo(1, 500)
      }, 100)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)

    return () => {
      cancelFade()
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <main className="bg-black">
      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity: 0 }}
          src={HERO_VIDEO}
          muted
          autoPlay
          playsInline
          preload="auto"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/40" />

        {/* Navbar */}
        <nav className="relative z-20 px-6 py-6">
          <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
            <div className="flex items-center">
              <span className="text-lg font-semibold tracking-tight text-white">曹译丹</span>
              <span className="ml-2 hidden text-xs text-gold sm:inline">Caoyidan</span>
              <div className="ml-8 hidden items-center gap-7 md:flex">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#experience"
              className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              联系我
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gold">民商法 · 法学硕士</p>

          <h1 className="font-serif text-5xl leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
            你好，我是曹译丹
          </h1>

          <p className="mt-8 max-w-2xl px-4 font-serif text-xl italic leading-relaxed text-white/70 md:text-2xl">
            法律不能使人人平等，但在法律面前人人是平等的。
          </p>

          {/* Contact pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:18794666688"
              className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              187 9466 6688
            </a>
            <a
              href="mailto:18794666688@163.com"
              className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/5"
            >
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
              18794666688@163.com
            </a>
            <span className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white">
              <GraduationCap className="h-4 w-4 text-gold" aria-hidden="true" />
              山东大学
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-10">
          <a
            href="#about"
            aria-label="向下滚动"
            className="liquid-glass rounded-full p-4 text-white/70 transition-all hover:bg-white/5 hover:text-white"
          >
            <ArrowDown className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <AboutSection />
      <EducationSection />
      <ResearchSection />
      <HonorsSection />
      <ExperienceSection />
      <FooterSection />
    </main>
  )
}
