import NextStep from "@/components/NextStep";
import { workExperience } from "@/data/work";

export default function Work() {
  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Work</h1>
      <p className="text-[#a1a1aa] mb-8">
        A career narrative focusing on impact, measurable outcomes, and lessons learned.
      </p>
      
      <div className="timeline">
        {workExperience.map((job, i) => (
          <div key={i} className="timeline-item">
            {/* Timeline Dot */}
            <span className="timeline-dot" />
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-5">
              <h2 className="text-lg font-medium text-white m-0">{job.company}</h2>
              <span className="text-sm text-[#a1a1aa] mt-1 sm:mt-0 font-mono opacity-80">{job.date}</span>
            </div>
            
            <div className="space-y-8">
              {job.roles.map((role, j) => (
                <div key={j}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                    <p className="text-white text-sm font-medium m-0 flex items-center gap-3">
                      <span className="timeline-dash"></span>
                      {role.title}
                    </p>
                    {role.date !== job.date && (
                      <span className="text-xs text-[#777] mt-1 sm:mt-0 font-mono opacity-80">{role.date}</span>
                    )}
                  </div>
                  <ul className="text-[#a1a1aa] text-sm space-y-3 list-none pl-7 mt-3 relative">
                    {role.description.map((desc, k) => (
                      <li key={k} className="timeline-bullet">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <NextStep href="/projects" label="Selected Projects" />
    </div>
  );
}
