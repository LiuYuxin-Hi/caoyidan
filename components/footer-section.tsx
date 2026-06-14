"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone } from "lucide-react"

const TRAITS = [
  {
    title: "勤学善思 · 自律笃行",
    body:
      "具备扎实的学习规划与执行能力，转专业后两学年修完三学年课程且成绩优异；持续提升自我，掌握新媒体技能，利用周末学习德语，正备考基金从业资格与注册会计师考试。",
  },
  {
    title: "履职尽责 · 务实严谨",
    body:
      "多段律所、法院实习与学生组织任职经历，具备案件梳理、证据整理等法律实务能力；保密意识强、抗压性佳，可适配律所高强度工作节奏；热心公益，志愿时长累计 420 余小时。",
  },
]

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="overflow-hidden bg-black px-6 pb-16 pt-24 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-gold"
        >
          自我评价
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TRAITS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
              className="liquid-glass rounded-3xl p-8"
            >
              <h3 className="text-xl tracking-tight text-white md:text-2xl">{t.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">{t.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <h2 className="font-serif text-4xl tracking-tight text-white md:text-6xl">
            期待与您<span className="italic text-gold">同行</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:18794666688"
              className="liquid-glass flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              187 9466 6688
            </a>
            <a
              href="mailto:18794666688@163.com"
              className="liquid-glass flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white transition-colors hover:bg-white/5"
            >
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
              18794666688@163.com
            </a>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-xs text-white/30 md:flex-row">
          <span>曹译丹 · 为人权而奋斗</span>
        </div>
      </div>
    </footer>
  )
}
