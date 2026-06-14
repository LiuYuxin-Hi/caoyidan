"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy } from "lucide-react"

const TIERS = [
  {
    tier: "国家级",
    items: [
      {
        name: "正大杯第十四届全国大学生市场调查与分析大赛",
        role: "项目负责人",
        award: "一等奖",
        date: "2024.06",
      },
    ],
  },
  {
    tier: "省级",
    items: [
      {
        name: "第六届中国青年志愿服务项目大赛",
        role: "项目成员",
        award: "银奖",
        date: "2022.11",
      },
    ],
  },
  {
    tier: "校级",
    items: [
      {
        name: "第四届“外教社·词达人杯”全国大学生英语词汇能力大赛",
        role: "",
        award: "特等奖",
        date: "2024.06",
      },
      {
        name: "第十五届课外科技创新实验竞赛 · 模拟法庭",
        role: "",
        award: "银奖",
        date: "2024.05",
      },
      {
        name: "“普法正当时，法治暖人心”情景剧演绎",
        role: "",
        award: "一等奖",
        date: "2023.11",
      },
    ],
  },
]

export function HonorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="honors"
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
          className="mb-14 mt-6 text-4xl tracking-tight text-white md:text-6xl"
        >
          竞赛<span className="font-serif italic text-white/50">奖项</span>
        </motion.h2>

        <div className="space-y-10">
          {TIERS.map((group, gi) => (
            <div key={group.tier}>
              <div className="mb-5 flex items-center gap-3">
                <Trophy className="h-4 w-4 text-white" aria-hidden="true" />
                <span className="text-xs uppercase tracking-widest text-white/40">{group.tier}竞赛</span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 + gi * 0.1 + i * 0.08 }}
                    className="liquid-glass flex flex-col rounded-2xl p-6"
                  >
                    <span className="text-lg font-medium text-gold">{item.award}</span>
                    <h3 className="mt-2 flex-1 text-sm leading-relaxed text-white">{item.name}</h3>
                    <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                      <span>{item.role || "\u00a0"}</span>
                      <span>{item.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
