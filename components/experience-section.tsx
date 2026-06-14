"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionVideoBg } from "@/components/section-video-bg"

const HONORS_BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"

const EXPERIENCES = [
  {
    period: "2024.10 — 2024.12",
    org: "北京盈科（成都）律师事务所",
    role: "律师助理实习生",
    detail:
      "负责案件证据梳理与分类整理；独立协助起草民事起诉状等法律文书；参与项目初步法律尽职调查；运营维护法律科普公众号，撰写普法推文。",
  },
  {
    period: "2024.01 — 2024.02",
    org: "天府新区人民法院（四川自贸区法院）",
    role: "法官助理实习生",
    detail:
      "参与调解涉外旅游合同纠纷案件 1 起；参与文书写作 3 次；负责文书核对、案件归档与内勤工作，旁听庭审，熟悉民事案件一审基本流程。",
  },
  {
    period: "2022.12 — 2023.01",
    org: "甘肃天秦律师事务所",
    role: "律师助理实习生",
    detail:
      "草拟法律意见书；编写律所公众号；接待当事人并提供初步法律咨询，了解律师办案基本流程。",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      <SectionVideoBg src={HONORS_BG_VIDEO} opacity={0.15} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-gold"
        >
          
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 mt-6 text-4xl tracking-tight text-white md:text-6xl"
        >
          实习<span className="font-serif italic text-white/50">经历</span>
        </motion.h2>

        {/* Internship timeline */}
        <div className="relative border-l-2 border-white/20 pl-10 md:pl-14">
          {EXPERIENCES.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="relative mb-12"
            >
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-gold/15" />
              <p className="text-sm text-gold">{item.period}</p>
              <h3 className="mt-2 text-xl tracking-tight text-white md:text-2xl">{item.org}</h3>
              <p className="mt-1 text-sm text-white/70">{item.role}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
