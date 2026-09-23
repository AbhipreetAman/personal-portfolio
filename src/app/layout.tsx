import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Navigation from "@/components/Navigation";

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
      <body className={`${GeistSans.className} antialiased selection:bg-[#333] selection:text-white`}>
        <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="mt-20 pt-8 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#a1a1aa]">
            <p className="m-0">© {new Date().getFullYear()} Abhipreet Aman.</p>
            <div className="flex gap-4">
              <a href="mailto:abhipreetaman@gmail.com" className="hover:text-white transition-colors">Get in touch</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
