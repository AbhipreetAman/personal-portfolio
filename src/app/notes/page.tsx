import NextStep from "@/components/NextStep";
import { principles } from "@/data/notes";

export default function Notes() {

  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Notes</h1>
      <p className="text-[#a1a1aa] mb-12">
        A few principles I try to follow.
      </p>
      
      <div className="space-y-8">
        {principles.map((p) => (
          <div key={p.num} className="group flex gap-4 md:gap-6">
            <span className="text-sm font-mono text-[#a1a1aa] opacity-50 group-hover:opacity-100 transition-opacity mt-1 shrink-0">
              {p.num}
            </span>
            <div>
              <h2 className="text-base font-medium text-white mb-1.5 transition-colors">{p.title}</h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed m-0">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 pt-8 border-t border-[#333]">
        <p className="text-[#a1a1aa] text-sm italic m-0">
          Still learning. Still changing these notes.
        </p>
      </div>

      <NextStep href="/about" label="About Me" />
    </div>
  );
}
