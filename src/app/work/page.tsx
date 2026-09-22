export default function Work() {
  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Work</h1>
      <p className="text-[#a1a1aa] mb-8">
        A career narrative focusing on impact, measurable outcomes, and lessons learned.
      </p>
      
      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="text-lg font-medium text-white m-0">Boeing</h2>
            <span className="text-sm text-[#a1a1aa]">Aug 2024 - Present</span>
          </div>
          <p className="text-white text-sm mb-3">Software Engineer (Bengaluru)</p>
          <ul className="text-[#a1a1aa] text-sm space-y-2 list-disc pl-4">
            <li>Architected and delivered enterprise-grade software solutions at scale.</li>
            <li>Engineered secure, resilient, and high-performance systems with a strong emphasis on scalability, maintainability, and reliability.</li>
            <li>Applied AI-powered development workflows to enhance productivity, accelerate troubleshooting, and improve software quality.</li>
            <li>Established best practices in software design, code quality, testing, and system architecture.</li>
          </ul>
        </div>
        
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="text-lg font-medium text-white m-0">OSCode</h2>
            <span className="text-sm text-[#a1a1aa]">Jan 2024 - Jul 2024</span>
          </div>
          <p className="text-white text-sm mb-3">Advisor (Bengaluru)</p>
          <ul className="text-[#a1a1aa] text-sm space-y-2 list-disc pl-4">
            <li>Played a pivotal role in shaping strategic initiatives and driving the growth of OSCode.</li>
            <li>Spearheaded team management and leadership efforts to enhance organizational efficiency.</li>
            <li>Fostered collaborative problem-solving and critical thinking to address complex challenges effectively.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="text-lg font-medium text-white m-0">Web Development Team</h2>
            <span className="text-sm text-[#a1a1aa]">Feb 2023 - Jan 2024</span>
          </div>
          <p className="text-white text-sm mb-3">Team Member (Bengaluru)</p>
          <ul className="text-[#a1a1aa] text-sm space-y-2 list-disc pl-4">
            <li>Contributed to the development of responsive and user-friendly websites using HTML5, CSS, and JavaScript.</li>
            <li>Gained hands-on experience with Linux and version control systems, ensuring seamless project delivery.</li>
            <li>Collaborated within a dynamic team environment to design and implement innovative web solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
