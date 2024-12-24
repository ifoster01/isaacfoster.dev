import { skills } from '@/data/skills'
import { SkillCard } from '@/components/ui/skill-card'

export function About() {
  return (
    <section className="py-16 sm:py-20 bg-card" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <p className="text-muted-foreground mb-6 text-xl">
              Hi, I&apos;m Isaac Foster, a software engineer passionate about building innovative and impactful solutions. With a background in computer science from Rensselaer Polytechnic Institute and expertise in full-stack development, machine learning, and cloud computing, I thrive on turning complex challenges into seamless, user-focused applications. My work spans from scalable web platforms to predictive analytics tools, leveraging technologies like React, Next.js, and AWS.
            </p>
            <p className="text-muted-foreground text-xl">
              Beyond coding, I&apos;m a leader and innovator, whether captaining my Alpine Ski Team or developing creative projects like Readee, a browser extension integrating GPT-4 and AR/3D visualizations. I&apos;m driven by a love for learning, problem-solving, and creating software that makes a difference. Let&apos;s collaborate and bring ideas to life!
            </p>
          </div>
          <div className="space-y-4">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}