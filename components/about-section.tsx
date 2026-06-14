"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { SectionVideoBg } from "@/components/section-video-bg"

const ABOUT_BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"

const FACTS = [
  { label: "籍贯", value: "甘肃天水" },
  { label: "出生年月", value: "2003.06" },
  { label: "政治面貌", value: "共青团员" },
  { label: "雅思", value: "6.5" },
]

const METRICS = [
  { value: "2", label: "学术论文" },
  { value: "2", label: "科研项目" },
  { value: "5", label: "竞赛奖项" },
  { value: "3", label: "实习经历" },
  { value: "3", label: "学生工作" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-black px-6 pb-20 pt-28 md:pb-28 md:pt-40"
    >
      <SectionVideoBg src={ABOUT_BG_VIDEO} opacity={0.2} />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-gold"
        >
          
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          关于<span className="italic text-gold">我</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Photo + basic facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="liquid-glass flex flex-col gap-7 rounded-3xl p-8 lg:col-span-1"
          >
            <div className="flex items-center gap-5">
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-gold/30">
                <Image
                  src="/images/profile.png"
                  alt="曹译丹个人照片"
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-2xl tracking-tight text-white">曹译丹</p>
                <p className="mt-1 text-sm text-gold">民商法 · 法学硕士</p>
              </div>
            </div>
            <div className="h-px w-full bg-white/10" />
            <dl className="grid grid-cols-2 gap-y-6">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs text-white/40">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Quantified metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="liquid-glass flex flex-col justify-center rounded-3xl p-8 lg:col-span-2"
          >
            <p className="mb-8 text-xs uppercase tracking-widest text-white/40">履历概览</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {METRICS.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-serif text-5xl leading-none text-gold md:text-6xl">{m.value}</span>
                  <span className="mt-3 text-xs text-white/55">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
