import HBLandingPage from "@/public/projects/hb-homepage.png"
import HBHirebot from "@/public/projects/hb-hirebot.png"
import HBJobmap from "@/public/projects/hb-jobmap.png"
import HBMatchscreen from "@/public/projects/hb-matchscreen.png"
import PPLanding from "@/public/projects/pp-landing.png"
import PPPicks from "@/public/projects/pp-picks.png"
import PPParlay from "@/public/projects/pp-parlay.png"
import AixusLP from "@/public/projects/Aixus-lp.png"
import AixusDash from "@/public/projects/Aixus-dash.png"
import Readee from "@/public/projects/readee.png"

interface ProjectImage {
  url: any  // Using 'any' here because we accept both imported images and URLs
  alt: string
}

interface Project {
  title: string
  description: string
  tags: string[]
  images: ProjectImage[]
  github?: string  // Optional
  live?: string   // Optional
}

export const projects: Project[] = [
  {
    title: "Pickpockt",
    description: "Developed a predictive analytics platform for UFC and NFL outcomes, leveraging gradient boosting models and real-time data pipelines. Built an intuitive cross-platform interface using React Native and Next.js, seamlessly integrating Supabase and AWS Lambda for robust backend support.",
    tags: ["Next.js", "React Native", "Supabase", "AWS Lambda", "Python", "Gradient Boosting"],
    images: [
      {
        url: PPLanding,
        alt: "Writing interface with AI suggestions"
      },
      {
        url: PPPicks,
        alt: "Analytics dashboard"
      },
      {
        url: PPParlay,
        alt: "Analytics dashboard"
      }
    ],
    github: "https://github.com/ifoster01/pickpal.web",
    live: "https://pickpockt.com"
  },
  {
    title: "Hirebird",
    description: "Designed and developed a scalable full-stack web application using React and Next.js, streamlining the job application process for over 11,000 users. Enhanced usability with a real-time job search map and optimized data management through a dynamic admin dashboard.",
    tags: ["Next.js", "TypeScript", "Radix UI", "Neo4j", "Embeddings Models"],
    images: [
      {
        url: HBLandingPage,
        alt: "Dashboard overview showing analytics"
      },
      {
        url: HBHirebot,
        alt: "Product management interface"
      },
      {
        url: HBJobmap,
        alt: "Customer management interface"
      },
      {
        url: HBMatchscreen,
        alt: "Customer management interface"
      }
    ],
    live: "https://joinhirebird.com"
  },
  {
    title: "Aixus",
    description: "Designed and developed a scalable full-stack web application using React and Next.js, streamlining the job application process for over 11,000 users. Enhanced usability with a real-time job search map and optimized data management through a dynamic admin dashboard.",
    tags: ["Next.js", "TypeScript", "Radix UI", "Neo4j", "Embeddings Models"],
    images: [
      {
        url: AixusLP,
        alt: "Dashboard overview showing analytics"
      },
      {
        url: AixusDash,
        alt: "Product management interface"
      },
    ],
    live: "https://aixushealth.com"
  },
  {
    title: "Readee",
    description: "Developed a full-stack web application using React and Next.js, enabling users to read and understand complex documents with AI-powered summaries and annotations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    images: [
      {
        url: Readee,
        alt: "Dashboard overview showing analytics"
      }
    ],
    github: "https://github.com/tommycbird/Readee"
  }
]
