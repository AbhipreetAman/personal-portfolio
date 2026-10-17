import React from "react";

interface TimelineBulletProps {
  children: React.ReactNode;
  className?: string;
}

export function TimelineBullet({ children, className = "" }: TimelineBulletProps) {
  return <li className={`timeline-bullet ${className}`}>{children}</li>;
}
