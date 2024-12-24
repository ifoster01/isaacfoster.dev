import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/project-card'

export function Projects() {
  return (
    <section className="py-16 sm:py-20" id="projects">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}