import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import NextStep from "@/components/NextStep";
import { certifications } from "@/data/about";

export default function About() {

  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-8">About</h1>
      
      <section className="mb-14 text-[#a1a1aa] leading-relaxed">
        <p className="mb-5">
          I&apos;m a software engineer, builder, and lifelong learner.
        </p>
        <p className="mb-5">
          I like solving hard problems, understanding how things work from first principles, and turning ideas into things that actually work. I&apos;m drawn to technology, AI, systems, business, and anything that sits at the intersection of engineering and real-world impact.
        </p>
        <p className="mb-5">
          I read a lot, watch a lot of movies, play sports, and constantly explore things outside my profession. I believe the best ideas often come from connecting seemingly unrelated fields.
        </p>
        <div className="bg-[#111] border border-[#333] p-5 rounded-lg mb-6 mt-8">
          <p className="mb-3 mt-0 text-white font-medium">
            I follow a simple philosophy: question assumptions, learn the fundamentals, build relentlessly, and keep exploring.
          </p>
          <p className="m-0 text-[#a1a1aa] text-sm">
            I&apos;m not trying to fit into one box. I&apos;m trying to become exceptionally good at figuring things out.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-6 text-white">Education</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-white font-medium m-0">Bangalore Institute of Technology</h3>
              <span className="text-[#a1a1aa] text-sm shrink-0">Dec 2020 - Jun 2024</span>
            </div>
            <p className="text-[#a1a1aa] text-sm m-0">Bachelor of Engineering - BE, Computer Science and Engineering</p>
          </div>
        </div>
      </section>

      <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Top Skills</h2>
          <ul className="text-[#a1a1aa] text-sm space-y-2.5 m-0 list-none p-0">
            <li><strong className="text-white font-medium">Software Engineering:</strong> Architecture, System Design, Scalability</li>
            <li><strong className="text-white font-medium">Product & Strategy:</strong> Product Management, Roadmap Planning, Execution</li>
            <li><strong className="text-white font-medium">AI & Workflows:</strong> AI Integration, Prompt Engineering, Automation</li>
            <li><strong className="text-white font-medium">Problem Solving:</strong> First-Principles Thinking, Rapid Prototyping</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Languages</h2>
          <ul className="text-[#a1a1aa] text-sm space-y-2.5 m-0 list-none p-0">
            <li>English <span className="opacity-60 text-xs ml-1">(Full Professional)</span></li>
            <li>Hindi <span className="opacity-60 text-xs ml-1">(Native)</span></li>
            <li>Maithili <span className="opacity-60 text-xs ml-1">(Native)</span></li>
            <li>French <span className="opacity-60 text-xs ml-1">(Elementary)</span></li>
            <li>Sanskrit <span className="opacity-60 text-xs ml-1">(Elementary)</span></li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-8 text-white">Licenses & Certifications</h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1.5 gap-1 md:gap-4">
                <h3 className="text-white font-medium m-0 leading-tight">
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors inline-flex items-baseline gap-2 no-underline">
                      {cert.title}
                      <FaArrowUpRightFromSquare size={10} className="text-[#a1a1aa] group-hover:text-blue-400 transition-colors shrink-0 translate-y-[1px]" />
                    </a>
                  ) : (
                    cert.title
                  )}
                </h3>
                <span className="text-[#a1a1aa] text-sm shrink-0">{cert.date}</span>
              </div>
              <p className="text-[#a1a1aa] text-sm mb-1 m-0">{cert.issuer}</p>
              {cert.credentialId && (
                <p className="text-[#a1a1aa] text-xs font-mono opacity-60 m-0 mt-1.5">Credential ID {cert.credentialId}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <NextStep href="/" label="Home" />
    </div>
  );
}
