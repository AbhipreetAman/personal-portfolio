import React from "react";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className = "" }: TimelineProps) {
  return <div className={`timeline ${className}`}>{children}</div>;
}
