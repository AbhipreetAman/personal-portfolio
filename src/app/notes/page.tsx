import { PageHeader, NextStep } from "@/components/ui";
import { Timeline, TimelineItem } from "@/components/timeline";
import { principles } from "@/data/notes";

export default function Notes() {
  return (
    <div className="prose fade-in">
      <PageHeader 
        title="Notes" 
        description="A few principles I try to follow." 
      />
      
      <Timeline>
        {principles.map((p) => (
          <TimelineItem key={p.num} className="group">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono text-muted group-hover:text-foreground transition-colors shrink-0">
                {p.num}
              </span>
              <h2 className="text-base font-medium text-foreground m-0">{p.title}</h2>
            </div>
            <p className="text-secondary text-sm leading-relaxed m-0">{p.desc}</p>
          </TimelineItem>
        ))}
      </Timeline>
      
      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-secondary text-sm italic m-0">
          Still learning. Still changing these notes.
        </p>
      </div>

      <NextStep href="/about" label="About Me" />
    </div>
  );
}
