import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhipreet Aman",
  description: "Software Engineer @ Boeing | Technologist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-[#333] selection:text-white`}>
        <div className="max-w-2xl mx-auto px-6 py-16">
          <nav className="mb-12 flex space-x-6 text-sm text-[#a1a1aa] overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-white transition-colors">home</Link>
            <Link href="/about" className="hover:text-white transition-colors">about</Link>
            <Link href="/writing" className="hover:text-white transition-colors">writing</Link>
            <Link href="/notes" className="hover:text-white transition-colors">notes</Link>
            <Link href="/work" className="hover:text-white transition-colors">work</Link>
            <Link href="/projects" className="hover:text-white transition-colors">projects</Link>
          </nav>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
