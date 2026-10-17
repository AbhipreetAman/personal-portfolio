import { FaEnvelope, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PageHeader, Badge, NextStep } from "@/components/ui";
import { Timeline, TimelineItem } from "@/components/timeline";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="prose fade-in">
      <PageHeader 
        title="Services" 
        description="How I can help your business. Partnering with companies to build scalable, high-performance technical solutions." 
      />
      
      <Timeline>
        {services.map((service, i) => (
          <TimelineItem key={i}>
            <h2 className="text-lg font-medium text-foreground mb-2 m-0">{service.title}</h2>
            <p className="text-secondary text-sm leading-relaxed mb-4 m-0 max-w-2xl">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge key={tech} label={tech} />
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
      
      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-secondary mb-4">
          Interested in working together or looking for mentorship? You can reach me via email or book a session directly on my consulting profiles.
        </p>
        <div className="not-prose flex flex-wrap gap-4">
          <a href="mailto:abhipreetaman@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-foreground text-sm font-medium rounded-md hover:bg-surface-hover border border-border hover:border-border-strong transition-all no-underline group shadow-xs">
            <FaEnvelope size={14} className="text-secondary group-hover:text-foreground transition-colors" />
            Email Me
          </a>
          <a href="https://topmate.io/abhipreet_aman" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-foreground text-sm font-medium rounded-md hover:bg-surface-hover border border-border hover:border-border-strong transition-all no-underline group shadow-xs">
            <FaArrowUpRightFromSquare size={12} className="text-secondary group-hover:text-foreground transition-colors" />
            Book on Topmate
          </a>
          <a href="https://www.urbuddy.in/mentors/aman" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-foreground text-sm font-medium rounded-md hover:bg-surface-hover border border-border hover:border-border-strong transition-all no-underline group shadow-xs">
            <FaArrowUpRightFromSquare size={12} className="text-secondary group-hover:text-foreground transition-colors" />
            urBuddy Profile
          </a>
        </div>
      </div>

      <NextStep href="/writing" label="Writing & Research" />
    </div>
  );
}
