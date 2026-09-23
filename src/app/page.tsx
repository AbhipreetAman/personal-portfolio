import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaXTwitter, FaYoutube, FaThreads, FaInstagram, FaFacebook, FaMedium, FaReddit } from "react-icons/fa6";
import NextStep from "@/components/NextStep";

export default function Home() {
  return (
    <div className="prose fade-in">
      <header className="mb-12 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-start gap-8">
        <div>
          <h1 className="text-2xl font-semibold mb-1 text-white">Abhipreet Aman</h1>
          <p className="text-[#a1a1aa] mb-4">Software Engineer & Product Strategist</p>
          <p className="text-[#a1a1aa] mb-6 leading-relaxed max-w-lg">
            I enjoy solving complex technical problems with modern engineering practices. 
            Currently architecting enterprise-grade solutions at Boeing and studying AI-powered workflows.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="mailto:abhipreetaman@gmail.com" aria-label="Email" className="text-[#a1a1aa] hover:text-white transition-colors">
              <FaEnvelope size={20} />
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
        
        <div className="shrink-0 mt-2 sm:mt-0">
          <Image 
            src="/profile.jpg" 
            alt="Abhipreet Aman" 
            width={120} 
            height={120} 
            className="rounded-2xl object-cover border border-[#333] shadow-lg m-0"
            priority
          />
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-5 text-white">Selected Work</h2>
        <ul className="space-y-5 m-0">
          <li>
            <Link href="/projects" className="font-medium text-white hover:text-blue-500 transition-colors">
              Personal Finance Tracker
            </Link>
            <p className="text-[#a1a1aa] text-sm mt-1.5 leading-relaxed">Full-stack web application built with Spring Boot, Angular, and SQL for efficient financial management.</p>
          </li>
          <li>
            <a href="https://github.com/AbhipreetAman/covid_project" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-blue-500 transition-colors">
              Patient Monitoring System
            </a>
            <p className="text-[#a1a1aa] text-sm mt-1.5 leading-relaxed">Efficiently track and manage patient data built using C/C++ and Data Structures.</p>
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
