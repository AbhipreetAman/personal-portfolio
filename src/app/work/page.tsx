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
          <p className="text-white text-sm mb-3">Software Engineer</p>
          <ul className="text-[#a1a1aa] text-sm space-y-2 list-disc pl-4">
            <li>Architected and delivered enterprise-grade software solutions at scale.</li>
            <li>Engineered secure, resilient, and high-performance systems.</li>
            <li>Applied AI-powered workflows to enhance productivity.</li>
          </ul>
        </div>
        
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="text-lg font-medium text-white m-0">OSCode</h2>
            <span className="text-sm text-[#a1a1aa]">Jan 2024 - Jul 2024</span>
          </div>
          <p className="text-white text-sm mb-3">Advisor</p>
          <ul className="text-[#a1a1aa] text-sm space-y-2 list-disc pl-4">
            <li>Played a pivotal role in shaping strategic initiatives.</li>
            <li>Spearheaded team management and leadership efforts.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
