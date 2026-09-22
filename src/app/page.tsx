import Link from "next/link";

export default function Home() {
  return (
    <div className="prose fade-in">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold mb-1">Abhipreet Aman</h1>
        <p className="text-[#a1a1aa] mb-4">Software Engineer who builds enterprise-grade solutions.</p>
        <p className="text-[#a1a1aa] mb-4">
          I enjoy solving complex technical problems with modern engineering practices. 
          Currently studying AI-powered workflows to enhance productivity and software quality.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <a href="mailto:abhipreetaman@gmail.com" className="text-sm flex items-center gap-1 group">
            <span className="text-white group-hover:text-blue-500 transition-colors">↗</span> Email
          </a>
          <a href="https://www.linkedin.com/in/abhi-aman" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
            <span className="text-white group-hover:text-blue-500 transition-colors">↗</span> LinkedIn
          </a>
          <a href="https://x.com/AmanAbhipreet" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
            <span className="text-white group-hover:text-blue-500 transition-colors">↗</span> X
          </a>
          <a href="https://www.youtube.com/@abhipreetaman" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
            <span className="text-white group-hover:text-blue-500 transition-colors">↗</span> YouTube
          </a>
          <a href="https://www.threads.com/@callmeabhipreet" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
            <span className="text-white group-hover:text-blue-500 transition-colors">↗</span> Threads
          </a>
          <a href="https://www.instagram.com/callmeabhipreet/" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
            <span className="text-white group-hover:text-blue-500 transition-colors">↗</span> Instagram
          </a>
          <a href="https://www.facebook.com/abhipreetaman/" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
            <span className="text-white group-hover:text-blue-500 transition-colors">↗</span> Facebook
          </a>
          <a href="https://medium.com/@abhipreetaman" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 group">
            <span className="text-white group-hover:text-blue-500 transition-colors">↗</span> Medium
          </a>
        </div>
      </header>

      <section className="mb-10">
        <p>
          I&apos;m a Software Engineer at Boeing, driven by a love for problem-solving and the power of technology to create a better future. 
          With a background in Computer Science and Engineering, I find joy in turning complex challenges into elegant solutions.
        </p>
        <p>
          Beyond code, I&apos;m passionate about sports, where discipline and teamwork shape my approach to life and work. I believe in constant learning, innovation, and using technology to make life simpler, smarter, and more beautiful.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4 text-white">Selected Projects</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/projects" className="font-medium text-white hover:text-blue-500 transition-colors">OSCode AI</Link>
            <p className="text-[#a1a1aa] text-sm mt-1">Strategic initiatives and team management to enhance organizational efficiency.</p>
          </li>
          <li>
            <Link href="/projects" className="font-medium text-white hover:text-blue-500 transition-colors">Responsive Web Solutions</Link>
            <p className="text-[#a1a1aa] text-sm mt-1">Developed responsive and user-friendly websites using HTML5, CSS, and JavaScript.</p>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4 text-white">Latest Writing</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/writing" className="font-medium text-white hover:text-blue-500 transition-colors">Extraction of Water Bodies from Remote Sensing Data</Link>
            <p className="text-[#a1a1aa] text-sm mt-1">Machine Learning approach to processing remote sensing data.</p>
          </li>
        </ul>
      </section>
      
      <section>
        <p className="text-[#a1a1aa]">
          Now: Architecting and delivering enterprise-grade software solutions at <Link href="/work" className="text-white underline hover:text-blue-500 transition-colors">Boeing</Link>.
        </p>
      </section>
    </div>
  );
}
