import { PageHeader, NextStep } from "@/components/ui";
import { Timeline, TimelineItem, TimelineBullet, TimelineDash } from "@/components/timeline";
import { workExperience } from "@/data/work";

export default function Work() {
  return (
    <div className="prose fade-in">
      <PageHeader 
        title="Work" 
        description="A career narrative focusing on impact, measurable outcomes, and lessons learned." 
        descriptionClassName="mb-8"
      />
      
      <Timeline>
        {workExperience.map((job, i) => (
          <TimelineItem key={i}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-5">
              <h2 className="text-lg font-medium text-foreground m-0">{job.company}</h2>
              <span className="text-sm text-muted mt-1 sm:mt-0 font-mono">{job.date}</span>
            </div>
            
            <div className="space-y-8">
              {job.roles.map((role, j) => (
                <div key={j}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                    <p className="text-foreground text-sm font-medium m-0 flex items-center gap-3">
                      <TimelineDash />
                      {role.title}
                    </p>
                    {role.date !== job.date && (
                      <span className="text-xs text-muted mt-1 sm:mt-0 font-mono">{role.date}</span>
                    )}
                  </div>
                  <ul className="text-secondary text-sm space-y-3 list-none pl-7 mt-3 relative">
                    {role.description.map((desc, k) => (
                      <TimelineBullet key={k}>
                        {desc}
                      </TimelineBullet>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
      
      <NextStep href="/projects" label="Selected Projects" />
    </div>
  );
}
