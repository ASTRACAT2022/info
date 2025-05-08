"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  Github,
  Mail,
  Send,
  Zap,
  BanIcon,
  Globe,
  Lock,
  Wifi,
  Menu,
  X,
  ChevronRight,
  Rocket,
  Server,
  Fingerprint,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Импортируем Framer Motion с проверкой на клиентскую среду
import dynamic from "next/dynamic"

// Динамически импортируем Framer Motion компоненты
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

const MotionSpan = dynamic(() => import("framer-motion").then((mod) => mod.motion.span), { ssr: false })

const MotionH1 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), { ssr: false })

const MotionH2 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h2), { ssr: false })

const MotionP = dynamic(() => import("framer-motion").then((mod) => mod.motion.p), { ssr: false })

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollYProgress, setScrollYProgress] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Вычисляем прогресс прокрутки и обновляем opacity
      const scrollY = window.scrollY
      const newProgress = Math.min(scrollY / 500, 1)
      setScrollYProgress(newProgress)
      setOpacity(1 - newProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium">
            ASTRACAT
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm hover:text-gray-300">
              Главная
            </Link>
            <Link href="#features" className="text-sm hover:text-gray-300">
              Преимущества
            </Link>
            <Link href="#projects" className="text-sm hover:text-gray-300">
              Проекты
            </Link>
            <Link href="#contacts" className="text-sm hover:text-gray-300">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex gap-4">
            <Link href="https://t.me/astracatui" target="_blank" className="text-sm hover:text-gray-300">
              Telegram
            </Link>
            <Link href="https://github.com/ASTRACAT2022" target="_blank" className="text-sm hover:text-gray-300">
              GitHub
            </Link>
          </div>

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black pt-20"
          style={{
            opacity: 1,
            transform: "translateY(0)",
          }}
        >
          <div className="container mx-auto px-4 flex flex-col gap-6">
            {["Главная", "Преимущества", "Проекты", "Контакты"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg py-3 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen flex items-center">
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: opacity }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]" />
          </div>

          <div className="container mx-auto px-4">
            <div
              className="max-w-3xl"
              style={{
                opacity: 1,
                transform: "translateY(0)",
              }}
            >
              <span className="inline-block text-sm uppercase tracking-widest mb-4 text-gray-400">
                Безопасность • Скорость • Анонимность
              </span>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">Приватность нового поколения</h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Инновационные решения для защиты вашей цифровой жизни
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-6">
                  <Link href="#projects">Начать использование</Link>
                </Button>
                <Button variant="outline" asChild className="border-white hover:bg-white/10 rounded-none px-8 py-6">
                  <Link href="#features">Подробнее о технологиях</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-sm uppercase tracking-widest mb-4 text-gray-400">
                Наши преимущества
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему выбирают нас</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Мгновенный запуск",
                  desc: "Настройка за 2 минуты с автоматической конфигурацией",
                },
                {
                  icon: ShieldCheck,
                  title: "Военная защита",
                  desc: "Шифрование уровня банковских систем и правительственных организаций",
                },
                {
                  icon: Server,
                  title: "Глобальная сеть",
                  desc: "Сбалансированная и высокопроизводительная сеть с внедрением передовых технологий мониторинга и интеллектуального обнаружения проблем",
                },
                {
                  icon: Fingerprint,
                  title: "Анонимность",
                  desc: "Никаких логов активности и персональных данных",
                },
                {
                  icon: Zap,
                  title: "Скорость",
                  desc: "Оптимизированные протоколы для игр и стриминга",
                },
                {
                  icon: BanIcon,
                  title: "Без ограничений",
                  desc: "Обход любых блокировок и цензуры",
                },
              ].map((feature, index) => (
                <div key={index} className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
                  <feature.icon className="w-12 h-12 mb-6 text-emerald-400" />
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-sm uppercase tracking-widest mb-4 text-gray-400">Наши продукты</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Решения для каждой задачи</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe,
                  title: "ASTRACAT DNS",
                  link: "https://astracat-dns.vercel.app",
                  desc: "Быстрое и безопасное разрешение доменов",
                },
                {
                  icon: Lock,
                  title: "Xray VPN",
                  link: "https://vpngen.vercel.app",
                  desc: "Полная анонимность в сети",
                },
                {
                  icon: Wifi,
                  title: "Генератор WARP",
                  link: "https://warp-liart.vercel.app",
                  desc: "Ускоренный доступ к контенту",
                },
              ].map((project, index) => (
                <div key={index} className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
                  <project.icon className="w-12 h-12 mb-6 text-purple-400" />
                  <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.desc}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center text-sm hover:text-gray-300"
                  >
                    Перейти к сервису <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contacts" className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block text-sm uppercase tracking-widest mb-4 text-gray-400">
                Свяжитесь с нами
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Мы всегда на связи</h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "astracat2019@gmail.com",
                  link: "mailto:astracat2019@gmail.com",
                },
                {
                  icon: Send,
                  title: "Telegram",
                  value: "@astracatui",
                  link: "https://t.me/astracatui",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "ASTRACAT2022",
                  link: "https://github.com/ASTRACAT2022",
                },
              ].map((contact, index) => (
                <div key={index} className="border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                  <Link href={contact.link} target="_blank" className="flex items-center gap-4">
                    <contact.icon className="w-8 h-8 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">{contact.title}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">ASTRACAT</h3>
              <p className="text-gray-400 text-sm">© 2025 Все права защищены</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-gray-400">Навигация</h4>
                <nav className="space-y-2">
                  <Link href="#features" className="block text-sm hover:text-gray-300">
                    Преимущества
                  </Link>
                  <Link href="#projects" className="block text-sm hover:text-gray-300">
                    Проекты
                  </Link>
                  <Link href="#contacts" className="block text-sm hover:text-gray-300">
                    Контакты
                  </Link>
                </nav>
              </div>

              <div className="space-y-4">
                <h4 className="text-gray-400">Ресурсы</h4>
                <nav className="space-y-2">
                  <Link href="https://t.me/astracatui" target="_blank" className="block text-sm hover:text-gray-300">
                    Telegram
                  </Link>
                  <Link
                    href="https://github.com/ASTRACAT2022"
                    target="_blank"
                    className="block text-sm hover:text-gray-300"
                  >
                    GitHub
                  </Link>
                  <Link href="mailto:astracat2019@gmail.com" className="block text-sm hover:text-gray-300">
                    Поддержка
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
