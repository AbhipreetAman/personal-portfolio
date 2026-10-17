import React from "react";

interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  hasDot?: boolean;
}

export function TimelineItem({ children, className = "", hasDot = true }: TimelineItemProps) {
  return (
    <div className={`timeline-item ${className}`}>
      {hasDot && <span className="timeline-dot" />}
      {children}
    </div>
  );
}
