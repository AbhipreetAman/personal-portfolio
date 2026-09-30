import NextStep from "@/components/NextStep";
import { principles } from "@/data/notes";

export default function Notes() {

  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Notes</h1>
      <p className="text-[#a1a1aa] mb-12">
        A few principles I try to follow.
      </p>
      
      <div className="timeline">
        {principles.map((p) => (
          <div key={p.num} className="timeline-item">
            <span className="timeline-dot" />
            
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono text-[#555] group-hover:text-white transition-colors shrink-0">
                {p.num}
              </span>
              <h2 className="text-base font-medium text-white m-0">{p.title}</h2>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed m-0">{p.desc}</p>
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
