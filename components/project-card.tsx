import Link from "next/link"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  content: string
  buttonText: string
  buttonLink: string
  icon: ReactNode
}

export function ProjectCard({ title, description, content, buttonText, buttonLink, icon }: ProjectCardProps) {
  return (
    <div className="gradient-border glow card-hover">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-blue-400">{icon}</div>
          <div>
            <h3 className="text-xl font-bold gradient-text">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <div className="flex-grow mb-6">
          <p className="text-gray-300">{content}</p>
        </div>
        <Button
          asChild
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
        >
          <Link href={buttonLink} target="_blank">
            {buttonText}
          </Link>
        </Button>
      </div>
    </div>
  )
}
