import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import NextStep from "@/components/NextStep";
import { publications } from "@/data/writing";

export default function Writing() {

  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Writing & Research</h1>
      <p className="text-[#a1a1aa] mb-12">
        Academic publications, technical deep dives, and thoughts on AI and systems design.
      </p>
      
      <div className="space-y-10">
        {publications.map((pub, i) => (
          <div key={i} className="group flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="max-w-xl">
              <h2 className="text-lg font-medium text-white m-0 mb-1.5">
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors inline-flex items-baseline gap-2 no-underline">
                    {pub.title}
                    <FaArrowUpRightFromSquare size={12} className="text-[#a1a1aa] group-hover:text-blue-400 transition-colors shrink-0 translate-y-[1px]" />
                  </a>
                ) : (
                  pub.title
                )}
              </h2>
              <p className="text-[#a1a1aa] text-sm font-medium mb-3 m-0">
                Published in: <span className="text-gray-300">{pub.publisher}</span>
              </p>
              <p className="text-[#a1a1aa] text-sm leading-relaxed m-0">
                {pub.description}
              </p>
            </div>
            <span className="text-sm text-[#a1a1aa] shrink-0 font-mono opacity-60 mt-1 md:mt-0">
              {pub.date}
            </span>
          </div>
        ))}
      </div>

      <NextStep href="/notes" label="Notes" />
    </div>
  );
}
