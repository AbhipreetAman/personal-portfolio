export default function About() {
  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">About</h1>
      
      <section className="mb-10">
        <p className="text-[#a1a1aa]">
          I&apos;m a Software Engineer at Boeing, driven by a love for problem-solving and the power of technology to create a better future. 
          With a background in Computer Science and Engineering, I find joy in turning complex challenges into elegant solutions.
        </p>
        <p className="text-[#a1a1aa]">
          Beyond code, I&apos;m passionate about sports, where discipline and teamwork shape my approach to life and work. I believe in constant learning, innovation, and using technology to make life simpler, smarter, and more beautiful.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4 text-white">Education</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-white font-medium">Bangalore Institute of Technology</h3>
              <span className="text-[#a1a1aa] text-sm">Dec 2020 - Jun 2024</span>
            </div>
            <p className="text-[#a1a1aa] text-sm">Bachelor of Engineering - BE, Computer Science and Engineering</p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-white font-medium">Visvesvaraya Technological University</h3>
            </div>
            <p className="text-[#a1a1aa] text-sm">Bachelor of Engineering - BE, Computer Science and Engineering</p>
          </div>
        </div>
      </section>

      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Top Skills</h2>
          <ul className="text-[#a1a1aa] text-sm space-y-2">
            <li>Software Development</li>
            <li>Product Management</li>
            <li>Angular</li>
            <li>C++ and C Fundamentals</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Certifications</h2>
          <ul className="text-[#a1a1aa] text-sm space-y-2">
            <li>SQL and Relational Databases</li>
            <li>Excel 2021 Essential Training</li>
            <li>Design Thinking for Innovation</li>
            <li>Project Management Foundations</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4 text-white">Languages</h2>
        <p className="text-[#a1a1aa] text-sm">
          English (Full Professional), Hindi (Native), Maithili (Native), French (Elementary), Sanskrit (Elementary).
        </p>
      </section>
    </div>
  );
}
