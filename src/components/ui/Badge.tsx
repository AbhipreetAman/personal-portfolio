interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span className={`text-xs px-2.5 py-1 rounded-md bg-surface text-secondary border border-border inline-block ${className}`}>
      {label}
    </span>
  );
}
