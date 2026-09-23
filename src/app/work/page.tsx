import NextStep from "@/components/NextStep";
import { workExperience } from "@/data/work";

export default function Work() {
  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Work</h1>
      <p className="text-[#a1a1aa] mb-8">
        A career narrative focusing on impact, measurable outcomes, and lessons learned.
      </p>
      
      <div className="space-y-8">
        {workExperience.map((job, i) => (
          <div key={i}>
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-lg font-medium text-white m-0">{job.company}</h2>
              <span className="text-sm text-[#a1a1aa]">{job.date}</span>
            </div>
            
            <div className="space-y-6">
              {job.roles.map((role, j) => (
                <div key={j}>
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="text-white text-sm font-medium m-0">{role.title}</p>
                    {role.date !== job.date && (
                      <span className="text-xs text-[#a1a1aa]">{role.date}</span>
                    )}
                  </div>
                  <ul className="text-[#a1a1aa] text-sm space-y-2 list-disc pl-4 mt-2">
                    {role.description.map((desc, k) => (
                      <li key={k}>{desc}</li>
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
