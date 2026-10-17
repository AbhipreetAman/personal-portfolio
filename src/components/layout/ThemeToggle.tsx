"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="w-8 h-8 rounded-md border border-border bg-surface/50 opacity-0"
        aria-hidden="true" 
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className="flex items-center justify-center w-8 h-8 rounded-md border border-border bg-surface text-secondary hover:text-foreground hover:bg-surface-hover hover:border-border-strong transition-all duration-200 cursor-pointer shadow-xs group"
    >
      {isDark ? (
        <FaSun size={13} className="transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <FaMoon size={13} className="transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
