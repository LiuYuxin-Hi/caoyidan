"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STUDENT_WORKS = [
  {
    period: "2025.09 — 至今",
    org: "山东大学纪检监察学院研究生会",
    role: "学术交流部干事",
  },
  {
    period: "2022.09 — 2023.09",
    org: "西南交通大学外语协会九里分会新媒体中心",
    role: "部长",
  },
  {
    period: "2022.09 — 2023.09",
    org: "西南交大公共管理学院青年志愿者协会",
    role: "志愿活动部副部长",
  },
]

export function StudentWorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="student-work"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-black px-6 py-24 md:py-32"
    >
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
          学生<span className="font-serif italic text-white/50">工作</span>
        </motion.h2>

        <div className="relative border-l-[3px] border-white/35 pl-12 md:pl-14">
          {STUDENT_WORKS.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="relative mb-12"
            >
              <span className="absolute left-[-31px] top-1.5 h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-gold/20" />
              <p className="text-sm text-gold">{item.period}</p>
              <h3 className="mt-2 text-xl tracking-tight text-white md:text-2xl">{item.org}</h3>
              <p className="mt-1 text-sm text-white/70">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
