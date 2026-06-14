"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const SCHOOLS = [
  {
    period: "2025.09 — 至今",
    school: "山东大学",
    degree: "民商法专业 · 法学硕士",
    detail: "“双一流”、“985工程”、“211工程”",
  },
  {
    period: "2021.09 — 2025.06",
    school: "西南交通大学",
    degree: "法学专业 · 法学学士",
    detail: "“双一流”学科建设高校、211 建设高校。",
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="education"
      ref={ref}
      className="scroll-mt-24 overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
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
教育<span className="font-serif italic text-white/50">背景</span>
        </motion.h2>

        <div className="relative border-l border-white/10 pl-8 md:pl-12">
          {SCHOOLS.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[2.6rem] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-gold/15 md:-left-[3.65rem]" />
              <p className="text-sm text-gold">{item.period}</p>
              <h3 className="mt-2 text-2xl tracking-tight text-white md:text-3xl">{item.school}</h3>
              <p className="mt-1 text-base text-white/70">{item.degree}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">{item.detail}</p>
              {item.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
