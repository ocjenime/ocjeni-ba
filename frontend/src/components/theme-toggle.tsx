"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground/70 transition-colors hover:border-foreground/20 hover:bg-foreground/10 hover:text-foreground ${className}`}
      aria-label={theme === "dark" ? "Uključi svijetlu temu" : "Uključi tamnu temu"}
      title={theme === "dark" ? "Svijetla tema" : "Tamna tema"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
