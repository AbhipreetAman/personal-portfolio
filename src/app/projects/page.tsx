import { FaGithub } from "react-icons/fa6";
import NextStep from "@/components/NextStep";
import { projects } from "@/data/projects";

export default function Projects() {

  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <p className="text-[#a1a1aa] mb-12">
        Proof of building. Selected software, experiments, and open-source utilities.
      </p>

      <div className="space-y-10">
        {projects.map((project, i) => (
          <div key={i} className="group flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-lg font-medium text-white m-0">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2 no-underline">
                      {project.name}
                      <FaGithub size={16} className="text-[#a1a1aa] group-hover:text-blue-400 transition-colors" />
                    </a>
                  ) : (
                    project.name
                  )}
                </h2>
              </div>
              <p className="text-[#a1a1aa] text-sm leading-relaxed m-0 mb-3">
                {project.description}
              </p>
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-[#222] text-[#a1a1aa] border border-[#333]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <span className="text-sm text-[#a1a1aa] shrink-0 font-mono opacity-60 mt-1 md:mt-0">
              {project.date}
            </span>
          </div>
        ))}
      </div>

      <NextStep href="/services" label="Business Services" />
    </div>
  );
}
