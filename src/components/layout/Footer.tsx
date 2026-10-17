export default function Footer() {
  return (
    <footer className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
      <p className="m-0">© {new Date().getFullYear()} Abhipreet Aman.</p>
      <div className="flex gap-4">
        <a href="mailto:abhipreetaman@gmail.com" className="hover:text-foreground transition-colors">
          Get in touch
        </a>
      </div>
    </footer>
  );
}
