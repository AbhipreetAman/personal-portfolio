"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className="mb-12 flex space-x-6 text-sm overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
      {links.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`transition-colors ${
              isActive ? "text-white font-medium" : "text-[#a1a1aa] hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
