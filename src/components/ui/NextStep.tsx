import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface NextStepProps {
  href: string;
  label: string;
  className?: string;
}

export default function NextStep({ href, label, className = "" }: NextStepProps) {
  return (
    <div className={`mt-16 pt-8 flex justify-end ${className}`}>
      <Link href={href} className="group flex items-center gap-2 text-secondary hover:text-foreground transition-colors no-underline">
        <span className="text-sm font-medium">{label}</span>
        <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
