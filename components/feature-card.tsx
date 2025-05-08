import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="gradient-border glow card-hover">
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-900/30 text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 gradient-text">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}
