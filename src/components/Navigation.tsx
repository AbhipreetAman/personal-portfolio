"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { name: "home", path: "/" },
    { name: "work", path: "/work" },
    { name: "projects", path: "/projects" },
    { name: "services", path: "/services" },
    { name: "writing", path: "/writing" },
    { name: "notes", path: "/notes" },
    { name: "about", path: "/about" },
  ];

  return (
    <nav aria-label="Main Navigation" className="mb-12 -ml-3">
      <ul className="flex flex-wrap items-center gap-1 text-sm m-0 p-0 list-none">
        {links.map((link) => {
          const isActive = pathname === link.path;
          return (
            <li key={link.path}>
              <Link
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`block px-3 py-1.5 rounded-md transition-all duration-200 no-underline ${
                  isActive 
                    ? "bg-[#222] text-white font-medium shadow-sm" 
                    : "text-[#a1a1aa] hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <li className="ml-1 sm:ml-2">
          <a
            href="https://drive.google.com/file/d/1TaTx4kpxG-lrpqhgdnuZ4OyBWw7bJ9Gj/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 no-underline text-white bg-[#1a1a1a] hover:bg-[#222] border border-[#333] shadow-sm font-medium"
          >
            resume <FaArrowUpRightFromSquare size={10} className="opacity-70" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
