"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        <span className="sr-only">Меню</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Закрыть</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-8 flex-1">
            <Link
              href="/"
              className="text-2xl hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link
              href="#projects"
              className="text-2xl hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Проекты
            </Link>
            <Link
              href="#contacts"
              className="text-2xl hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <Link
              href="https://t.me/astracatui"
              target="_blank"
              className="text-2xl hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Telegram
            </Link>
            <Link
              href="https://github.com/ASTRACAT2022"
              target="_blank"
              className="text-2xl hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
