import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface NextStepProps {
  href: string;
  label: string;
}

export default function NextStep({ href, label }: NextStepProps) {
  return (
    <div className="mt-16 pt-8 flex justify-end">
      <Link href={href} className="group flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors no-underline">
        <span className="text-sm font-medium">Next: {label}</span>
        <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
