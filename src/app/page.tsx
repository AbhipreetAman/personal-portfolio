import Link from "next/link";
import Image from "next/image";
import { SocialLinks, NextStep } from "@/components/ui";

export default function Home() {
  return (
    <div className="prose fade-in">
      <header className="mb-12">
        <div className="flex flex-row justify-between items-start gap-6 mb-6">
          <div>
            <h1 className="text-2xl font-semibold mb-1 text-foreground">Abhipreet Aman</h1>
            <p className="text-secondary m-0">Software Engineer & Product Strategist</p>
          </div>
          <div className="shrink-0">
            <Image 
              src="/profile.jpg" 
              alt="Abhipreet Aman" 
              width={120} 
              height={160} 
              className="rounded-2xl object-cover shadow-md m-0 w-[90px] h-[120px] sm:w-[120px] sm:h-[160px] ring-1 ring-border hover:ring-border-strong hover:scale-105 transition-all duration-500"
              priority
            />
          </div>
        </div>
        
        <div>
          <p className="text-secondary mb-6 leading-relaxed max-w-lg">
            I enjoy solving complex technical problems with modern engineering practices. 
            Currently architecting enterprise-grade solutions at Boeing and studying AI-powered workflows.
          </p>
          <SocialLinks />
        </div>
      </header>

      <section className="mb-12 bg-surface border border-border p-6 rounded-2xl shadow-xs">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2 m-0">Currently</h2>
        <p className="text-secondary text-sm m-0">
          Software Engineer at <strong className="text-foreground font-medium">Boeing</strong>. Architecting enterprise-grade solutions and studying AI-powered workflows.
        </p>
      </section>

      <section className="mb-12">
        <blockquote className="border-l-2 border-border-strong pl-4 italic text-secondary m-0">
          &quot;I follow a simple philosophy: question assumptions, learn the fundamentals, build relentlessly, and keep exploring. I&apos;m not trying to fit into one box. I&apos;m trying to become exceptionally good at figuring things out.&quot;
        </blockquote>
      </section>

      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Core Focus</h2>
        <p className="text-secondary leading-relaxed">
          System Architecture, Product Management, AI Integration, and First-Principles Problem Solving.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-5 text-foreground">Selected Work</h2>
        <ul className="space-y-5 m-0 list-none p-0">
          <li>
            <Link href="/projects" className="font-medium text-foreground hover:opacity-80 transition-opacity">
              Finance Tracker Website
            </Link>
            <p className="text-secondary text-sm mt-1.5 leading-relaxed m-0">A minimal, user-centric expense tracker demonstrating production-grade engineering: clean architecture, REST APIs, security, database discipline, and automated testing.</p>
          </li>
          <li>
            <Link href="/projects" className="font-medium text-foreground hover:opacity-80 transition-opacity">
              Water Body Segmentation Project
            </Link>
            <p className="text-secondary text-sm mt-1.5 leading-relaxed m-0">Leveraging advanced AI and the UNet model for precise and efficient water body segmentation from satellite imagery to enhance environmental monitoring.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-5 text-foreground">Research & Publications</h2>
        <ul className="space-y-5 m-0 list-none p-0">
          <li>
            <Link href="/writing" className="font-medium text-foreground hover:opacity-80 transition-opacity">
              Extraction of Water Bodies from Remote Sensing Data using Machine Learning
            </Link>
            <p className="text-secondary text-sm mt-1.5 leading-relaxed m-0">Published in IJCRT. Leveraging advanced AI and UNet models for precise water body segmentation.</p>
          </li>
        </ul>
      </section>

      <NextStep href="/work" label="Work Experience" />
    </div>
  );
}
