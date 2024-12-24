import { Github, Globe } from 'lucide-react'

interface ProjectLinksProps {
  github?: string
  live?: string
}

export function ProjectLinks({ github, live }: ProjectLinksProps) {
  return (
    <div className="flex gap-4">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
          <span>View Code</span>
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Globe className="h-4 w-4" />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  )
}