import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PageHeader, Badge, NextStep } from "@/components/ui";
import { Timeline, TimelineItem } from "@/components/timeline";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="prose fade-in">
      <PageHeader 
        title="Projects" 
        description="Proof of building. Selected software, experiments, and open-source utilities." 
      />

      <Timeline>
        {projects.map((project, i) => (
          <TimelineItem key={i} className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-lg font-medium text-foreground m-0 flex items-center gap-3">
                  {project.liveLink ? (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity no-underline">
                      {project.name}
                    </a>
                  ) : project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity no-underline">
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                  <div className="flex items-center gap-2">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="View Live Site">
                        <FaArrowUpRightFromSquare size={13} className="text-muted hover:text-foreground transition-colors" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" title="View Source">
                        <FaGithub size={15} className="text-muted hover:text-foreground transition-colors" />
                      </a>
                    )}
                  </div>
                </h2>
              </div>
              <p className="text-secondary text-sm leading-relaxed m-0 mb-3">
                {project.description}
              </p>
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                </div>
              )}
            </div>
            <span className="text-sm text-muted shrink-0 font-mono mt-1 md:mt-0">
              {project.date}
            </span>
          </TimelineItem>
        ))}
      </Timeline>

      <NextStep href="/services" label="Business Services" />
    </div>
  );
}
