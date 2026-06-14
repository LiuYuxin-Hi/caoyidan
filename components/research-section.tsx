"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, FlaskConical } from "lucide-react"
import { SectionVideoBg } from "@/components/section-video-bg"

const RESEARCH_BG_VIDEO =
  "/videos/research.mp4"

const PAPERS = [
  {
    title: "《我国冷冻胚胎的法律属性界定及处置权规范构建》",
    role: "第二作者",
    venue: "《争议解决》 2024, 10(5), 32-40",
    summary:
      "论证冷冻胚胎为具有伦理与人格属性的“特殊的物”，借鉴美国利益均衡模式，建议以平等自愿、利益均衡、公序良俗为指导制定更高位阶法律。",
  },
  {
    title: "《算法价格歧视的法律规制研究》",
    role: "独作 · 河北省法学会电子商务法研究会征文优秀奖",
    venue: "征文 · 优秀奖",
    summary:
      "剖析算法价格歧视违背宪法原则、侵害消费者权益、破坏市场竞争的危害，从市场准入、反垄断立法、双轨责任机制提出法治化治理路径。",
  },
]

const PROJECTS = [
  {
    title: "《山东省青少年体育促进条例》制度设计研究",
    role: "项目成员 · 负责人 姜世波教授",
    level: "省级人大专项重点课题",
    period: "2026.05 — 至今",
    summary:
      "梳理相关法律法规、部门规章及政策通知，完成资料分类整合与校验；协办研讨会，负责筹备、材料准备与现场协调。",
  },
  {
    title: "《涉人类辅助生殖技术民事法律纠纷研究》",
    role: "项目负责人 · 指导教师 黄亮副教授",
    level: "省部级大创计划项目（优秀项目）",
    period: "2023.05 — 2024.05",
    summary:
      "统筹沟通协调与成果整合，负责案例综述与冷冻胚胎部分论文撰写；系统掌握文献阅读与论文写作方法，运用 Zotero、SPSS 等工具。",
  },
]

export function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="research"
      ref={ref}
      className="soft-section relative scroll-mt-24 overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      <SectionVideoBg src={RESEARCH_BG_VIDEO} opacity={0.16} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />

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
          className="mb-14 mt-6 text-4xl tracking-tight text-white md:text-6xl"
        >
          科研<span className="font-serif italic text-white/50">成果</span>
        </motion.h2>

        {/* Papers */}
        <div className="mb-6 flex items-center gap-3">
          <FileText className="h-4 w-4 text-white" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest text-white/40">学术论文</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PAPERS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="liquid-glass rounded-3xl p-7 md:p-8"
            >
              <h3 className="text-lg leading-snug tracking-tight text-white md:text-xl">{p.title}</h3>
              <p className="mt-3 text-xs text-gold">{p.role}</p>
              <p className="mt-1 text-xs text-white/40">{p.venue}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">{p.summary}</p>
            </motion.article>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-6 mt-14 flex items-center gap-3">
          <FlaskConical className="h-4 w-4 text-white" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest text-white/40">科研项目</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="liquid-glass rounded-3xl p-7 md:p-8"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-gold-soft">
                  {p.level}
                </span>
                <span className="shrink-0 text-xs text-white/40">{p.period}</span>
              </div>
              <h3 className="text-lg leading-snug tracking-tight text-white md:text-xl">{p.title}</h3>
              <p className="mt-2 text-xs text-white/50">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">{p.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
