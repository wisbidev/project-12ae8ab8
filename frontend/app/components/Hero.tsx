'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-surface">
      {/* Radial blue glow behind headline */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
            AI Team.{' '}
            <span className="text-primary">Không cần thuê dev.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
            Nền tảng AI tự động build phần mềm qua Telegram.
            Mô tả ý tưởng, AI lo phần còn lại.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/aiteam_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-primary text-text font-semibold rounded-lg
                         transition-all duration-300 hover:scale-105 hover:brightness-110
                         shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
            >
              Bắt đầu ngay
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScroll(e, 'how-it-works')}
              className="group w-full sm:w-auto px-8 py-4 bg-surface text-text font-semibold rounded-lg border border-muted/30
                         transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Xem cách hoạt động
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
