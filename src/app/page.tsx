import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaXTwitter, FaYoutube, FaThreads, FaInstagram, FaFacebook, FaMedium, FaReddit, FaArrowUpRightFromSquare } from "react-icons/fa6";
import NextStep from "@/components/NextStep";

export default function Home() {
  return (
    <div className="prose fade-in">
      <header className="mb-12">
        <div className="flex flex-row justify-between items-start gap-6 mb-6">
          <div>
            <h1 className="text-2xl font-semibold mb-1 text-white">Abhipreet Aman</h1>
            <p className="text-[#a1a1aa] m-0">Software Engineer & Product Strategist</p>
          </div>
          <div className="shrink-0">
            <Image 
              src="/profile.jpg" 
              alt="Abhipreet Aman" 
              width={120} 
              height={160} 
              className="rounded-2xl object-cover shadow-xl m-0 w-[90px] h-[120px] sm:w-[120px] sm:h-[160px] ring-1 ring-white/10 hover:ring-white/20 hover:scale-105 hover:shadow-white/5 transition-all duration-500"
              priority
            />
          </div>
        </div>
        
        <div>
          <p className="text-[#a1a1aa] mb-6 leading-relaxed max-w-lg">
            I enjoy solving complex technical problems with modern engineering practices. 
            Currently architecting enterprise-grade solutions at Boeing and studying AI-powered workflows.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="https://drive.google.com/file/d/1TaTx4kpxG-lrpqhgdnuZ4OyBWw7bJ9Gj/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium hover:text-gray-300 transition-colors flex items-center gap-1.5 no-underline">
              Resume <FaArrowUpRightFromSquare size={10} className="text-[#a1a1aa]" />
            </a>
            <span className="text-[#333] text-sm">|</span>
            <a href="mailto:abhipreetaman@gmail.com" aria-label="Email" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaEnvelope size={18} />
            </a>
            <a href="https://www.linkedin.com/in/abhi-aman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://x.com/AmanAbhipreet" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaXTwitter size={20} />
            </a>
            <a href="https://www.youtube.com/@abhipreetaman" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.threads.com/@callmeabhipreet" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaThreads size={20} />
            </a>
            <a href="https://www.instagram.com/callmeabhipreet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/abhipreetaman/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://medium.com/@abhipreetaman" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaMedium size={20} />
            </a>
            <a href="https://www.reddit.com/user/Zestyclose_Way_4022/" target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaReddit size={20} />
            </a>
          </div>
        </div>
      </header>

      <section className="mb-12 bg-[#1a1a1a] p-6 rounded-2xl">
        <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-2 m-0">Currently</h2>
        <p className="text-[#a1a1aa] text-sm m-0">
          Software Engineer at <strong className="text-white font-medium">Boeing</strong>. Architecting enterprise-grade solutions and studying AI-powered workflows.
        </p>
      </section>

      <section className="mb-12">
        <blockquote className="border-l-2 border-[#555] pl-4 italic text-[#a1a1aa] m-0">
          &quot;I follow a simple philosophy: question assumptions, learn the fundamentals, build relentlessly, and keep exploring. I&apos;m not trying to fit into one box. I&apos;m trying to become exceptionally good at figuring things out.&quot;
        </blockquote>
      </section>

      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-4 text-white">Core Focus</h2>
        <p className="text-[#a1a1aa] leading-relaxed">
          System Architecture, Product Management, AI Integration, and First-Principles Problem Solving.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-5 text-white">Selected Work</h2>
        <ul className="space-y-5 m-0">
          <li>
            <Link href="/projects" className="font-medium text-white hover:text-blue-500 transition-colors">
              Finance Tracker Website
            </Link>
            <p className="text-[#a1a1aa] text-sm mt-1.5 leading-relaxed">A minimal, user-centric expense tracker demonstrating production-grade engineering: clean architecture, REST APIs, security, database discipline, and automated testing.</p>
          </li>
          <li>
            <Link href="/projects" className="font-medium text-white hover:text-blue-500 transition-colors">
              Water Body Segmentation Project
            </Link>
            <p className="text-[#a1a1aa] text-sm mt-1.5 leading-relaxed">Leveraging advanced AI and the UNet model for precise and efficient water body segmentation from satellite imagery to enhance environmental monitoring.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-5 text-white">Research & Publications</h2>
        <ul className="space-y-5 m-0">
          <li>
            <Link href="/writing" className="font-medium text-white hover:text-blue-500 transition-colors">
              Extraction of Water Bodies from Remote Sensing Data using Machine Learning
            </Link>
            <p className="text-[#a1a1aa] text-sm mt-1.5 leading-relaxed">Published in IJCRT. Leveraging advanced AI and UNet models for precise water body segmentation.</p>
          </li>
        </ul>
      </section>

      <NextStep href="/work" label="Work Experience" />
    </div>
  );
}
