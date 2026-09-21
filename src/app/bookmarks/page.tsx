export default function Bookmarks() {
  return (
    <div className="prose fade-in">
      <h1 className="text-2xl font-semibold mb-6">Bookmarks</h1>
      <p className="text-[#a1a1aa] mb-8">
        Curated external resources: tools, papers, and engineering articles.
      </p>
      
      <ul className="space-y-4">
        <li>
          <a href="https://leerob.com" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-blue-500 transition-colors">Lee Robinson</a>
          <p className="text-[#a1a1aa] text-sm mt-1">Design inspiration and technical writing.</p>
        </li>
      </ul>
    </div>
  );
}
