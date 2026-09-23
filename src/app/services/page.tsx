import { FaEnvelope, FaArrowUpRightFromSquare } from "react-icons/fa6";
import NextStep from "@/components/NextStep";
import { services } from "@/data/services";

export default function Services() {

  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Services</h1>
      <p className="text-[#a1a1aa] mb-12">
        How I can help your business. Partnering with companies to build scalable, high-performance technical solutions.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-6 bg-[#1a1a1a] rounded-2xl flex flex-col h-full">
            <h2 className="text-lg font-medium text-white mb-2 m-0">{service.title}</h2>
            <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4 grow m-0">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.technologies.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 rounded bg-[#222] text-[#a1a1aa] border border-[#333]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 pt-8 border-t border-[#333]">
        <p className="text-[#a1a1aa] mb-4">
          Interested in working together or looking for mentorship? You can reach me via email or book a session directly on my consulting profiles.
        </p>
        <div className="not-prose flex flex-wrap gap-4">
          <a href="mailto:abhipreetaman@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-md hover:bg-[#222] transition-all no-underline group">
            <FaEnvelope size={14} className="text-[#a1a1aa] group-hover:text-white transition-colors" />
            Email Me
          </a>
          <a href="https://topmate.io/abhipreet_aman" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-md hover:bg-[#222] transition-all no-underline group">
            <FaArrowUpRightFromSquare size={12} className="text-[#a1a1aa] group-hover:text-white transition-colors" />
            Book on Topmate
          </a>
          <a href="https://www.urbuddy.in/mentors/aman" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-md hover:bg-[#222] transition-all no-underline group">
            <FaArrowUpRightFromSquare size={12} className="text-[#a1a1aa] group-hover:text-white transition-colors" />
            urBuddy Profile
          </a>
        </div>
      </div>

      <NextStep href="/writing" label="Writing & Research" />
    </div>
  );
}
