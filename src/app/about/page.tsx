import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PageHeader, NextStep } from "@/components/ui";
import { certifications } from "@/data/about";

export default function About() {
  return (
    <div className="prose fade-in">
      <PageHeader title="About" />
      
      <section className="mb-14 text-secondary leading-relaxed">
        <p className="mb-5">
          I&apos;m a software engineer, builder, and lifelong learner.
        </p>
        <p className="mb-5">
          I like solving hard problems, understanding how things work from first principles, and turning ideas into things that actually work. I&apos;m drawn to technology, AI, systems, business, and anything that sits at the intersection of engineering and real-world impact.
        </p>
        <p className="mb-5">
          I read a lot, watch a lot of movies, play sports, and constantly explore things outside my profession. I believe the best ideas often come from connecting seemingly unrelated fields.
        </p>
        <div className="bg-surface border border-border p-5 rounded-lg mb-6 mt-8 shadow-xs">
          <p className="mb-3 mt-0 text-foreground font-medium">
            I follow a simple philosophy: question assumptions, learn the fundamentals, build relentlessly, and keep exploring.
          </p>
          <p className="m-0 text-secondary text-sm">
            I&apos;m not trying to fit into one box. I&apos;m trying to become exceptionally good at figuring things out.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-6 text-foreground">Education</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-foreground font-medium m-0">Bangalore Institute of Technology</h3>
              <span className="text-muted text-sm shrink-0">Dec 2020 - Jun 2024</span>
            </div>
            <p className="text-secondary text-sm m-0">Bachelor of Engineering - BE, Computer Science and Engineering</p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Top Skills</h2>
        <ul className="text-secondary text-sm space-y-2.5 m-0 list-none p-0">
          <li><strong className="text-foreground font-medium">Software Engineering:</strong> Architecture, System Design, Scalability</li>
          <li><strong className="text-foreground font-medium">Product & Strategy:</strong> Product Management, Roadmap Planning, Execution</li>
          <li><strong className="text-foreground font-medium">AI & Workflows:</strong> AI Integration, Prompt Engineering, Automation</li>
          <li><strong className="text-foreground font-medium">Problem Solving:</strong> First-Principles Thinking, Rapid Prototyping</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-8 text-foreground">Licenses & Certifications</h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1.5 gap-1 md:gap-4">
                <h3 className="text-foreground font-medium m-0 leading-tight">
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity inline-flex items-baseline gap-2 no-underline">
                      {cert.title}
                      <FaArrowUpRightFromSquare size={10} className="text-muted group-hover:text-foreground transition-colors shrink-0 translate-y-[1px]" />
                    </a>
                  ) : (
                    cert.title
                  )}
                </h3>
                <span className="text-muted text-sm shrink-0">{cert.date}</span>
              </div>
              <p className="text-secondary text-sm mb-1 m-0">{cert.issuer}</p>
              {cert.credentialId && (
                <p className="text-muted text-xs font-mono m-0 mt-1.5">Credential ID {cert.credentialId}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <NextStep href="/" label="Home" />
    </div>
  );
}
