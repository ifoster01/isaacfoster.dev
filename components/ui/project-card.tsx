import { ProjectCarousel } from './project-carousel'
import { ProjectLinks } from './project-links'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  images: Array<{
    url: string
    alt: string
  }>
  github?: string
  live?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  images,
  github,
  live
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <ProjectCarousel images={images} />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <ProjectLinks github={github} live={live} />
      </div>
    </div>
  )
}