import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PageHeader, NextStep } from "@/components/ui";
import { Timeline, TimelineItem } from "@/components/timeline";
import { publications } from "@/data/writing";

export default function Writing() {
  return (
    <div className="prose fade-in">
      <PageHeader 
        title="Writing & Research" 
        description="Academic publications, technical deep dives, and thoughts on AI and systems design." 
      />
      
      <Timeline>
        {publications.map((pub, i) => (
          <TimelineItem key={i} className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="max-w-xl">
              <h2 className="text-lg font-medium text-foreground m-0 mb-1.5">
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity inline-flex items-baseline gap-2 no-underline">
                    {pub.title}
                    <FaArrowUpRightFromSquare size={12} className="text-muted group-hover:text-foreground transition-colors shrink-0 translate-y-[1px]" />
                  </a>
                ) : (
                  pub.title
                )}
              </h2>
              <p className="text-secondary text-sm font-medium mb-3 m-0">
                Published in: <span className="text-foreground">{pub.publisher}</span>
              </p>
              <p className="text-secondary text-sm leading-relaxed m-0">
                {pub.description}
              </p>
            </div>
            <span className="text-sm text-muted shrink-0 font-mono mt-1 md:mt-0">
              {pub.date}
            </span>
          </TimelineItem>
        ))}
      </Timeline>

      <NextStep href="/notes" label="Notes" />
    </div>
  );
}
