"use client"

import type { FormEvent } from "react"
import { useEffect, useRef, useState } from "react"
import { Mail, Phone, GraduationCap, ArrowDown, Send, X } from "lucide-react"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ResearchSection } from "@/components/research-section"
import { HonorsSection } from "@/components/honors-section"
import { ExperienceSection } from "@/components/experience-section"
import { FooterSection } from "@/components/footer-section"

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"

const NAV_LINKS = [
  { label: "鍏充簬", href: "#about" },
  { label: "鏁欒偛", href: "#education" },
  { label: "绉戠爺", href: "#research" },
  { label: "鑽ｈ獕", href: "#honors" },
  { label: "瀹炰範", href: "#experience" },
]

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadeRafRef = useRef<number | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const message = String(formData.get("message") || "")
    const subject = encodeURIComponent(`缃戠珯鑱旂郴 - ${name || "璁垮"}`)
    const body = encodeURIComponent(`绉板懠锛?{name}\n閭锛?{email}\n\n鎰忚锛歕n${message}`)
    window.location.href = `mailto:18794666688@163.com?subject=${subject}&body=${body}`
  }

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
    <main className="bg-black text-white">
      {/* SECTION 1 鈥?HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
          style={{ opacity: 0 }}
          src={HERO_VIDEO}
          muted
          autoPlay
          playsInline
          preload="auto"
          crossOrigin="anonymous"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,_rgba(0,0,0,0.86)_0%,_rgba(0,0,0,0.46)_48%,_rgba(0,0,0,0.82)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_transparent_0%,_rgba(0,0,0,0.72)_76%)]" />

        {/* Navbar */}
        <nav className="relative z-20 px-5 py-5 md:px-6 md:py-6">
          <div className="liquid-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 md:px-7">
            <div className="flex items-center">
              <span className="text-lg font-semibold tracking-tight text-white">鏇硅瘧涓?</span>
              <span className="ml-2 hidden text-xs text-gold sm:inline">Caoyidan</span>
              <div className="ml-8 hidden items-center gap-7 md:flex">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-gold"
            >
              鑱旂郴鎴?
            </button>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gold"></p>

          <h1 className="font-serif text-5xl leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
            浣犲ソ锛屾垜鏄浌璇戜腹
          </h1>

          <p className="mt-8 max-w-2xl px-4 font-serif text-xl italic leading-relaxed text-white/70 md:text-2xl">
            娉曞緥涓嶈兘浣夸汉浜哄钩绛夛紝浣嗗湪娉曞緥闈㈠墠浜轰汉鏄钩绛夌殑銆?          </p>

          {/* Contact pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:18794666688"
              className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-white" aria-hidden="true" />
              187 9466 6688
            </a>
            <a
              href="mailto:18794666688@163.com"
              className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/5"
            >
              <Mail className="h-4 w-4 text-white" aria-hidden="true" />
              18794666688@163.com
            </a>
            <span className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white">
              <GraduationCap className="h-4 w-4 text-white" aria-hidden="true" />
              灞变笢澶у
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-10">
          <a
            href="#about"
            aria-label="鍚戜笅婊氬姩"
            className="liquid-glass rounded-full p-4 text-white/70 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-gold"
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

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <form
            onSubmit={handleContactSubmit}
            className="liquid-glass w-full max-w-lg rounded-3xl p-6 shadow-2xl md:p-8"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold">Contact</p>
                <h2 className="mt-2 text-2xl tracking-tight text-white">联系我</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="rounded-full border border-white/10 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="关闭"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-4">
              <label className="grid gap-2 text-sm text-white/70">
                称呼
                <input
                  name="name"
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold/60"
                  placeholder="请输入您的称呼"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/70">
                邮箱
                <input
                  name="email"
                  type="email"
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold/60"
                  placeholder="请输入您的邮箱"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/70">
                意见
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="resize-none rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold/60"
                  placeholder="请填写您的意见"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.01]"
            >
              <Send className="h-4 w-4" />
              发送
            </button>
          </form>
        </div>
      )}
    </main>
  )
}
