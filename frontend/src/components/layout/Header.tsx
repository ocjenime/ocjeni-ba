"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Search, User } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/kategorije?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/kategorije");
    }
  };

  const navLinks = [
    { href: "/tvrtke", label: "Firme" },
    { href: "/kategorije", label: "Kategorije" },
    { href: "/gradovi", label: "Gradovi" },
    { href: "/za-tvrtke", label: "Za firme" },
    { href: "/cjenik", label: "Cjenik" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-black/5 bg-background/80 backdrop-blur-xl dark:border-white/5 dark:bg-background/70"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/ocijenilogo.jpg"
              alt="ocijeni.ba logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-black/5 bg-black/[0.02] px-2 py-1 backdrop-blur-md md:flex dark:border-white/5 dark:bg-white/[0.02]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle className="hidden md:flex" />
            <button
              onClick={handleSearch}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground/60 transition-colors hover:border-foreground/20 hover:text-foreground"
              aria-label="Pretraži"
            >
              <Search className="h-5 w-5" />
            </button>
            {!isAuthenticated ? (
              <>
                <Link
                  href="/prijava"
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  Prijava
                </Link>
                <Link
                  href="/registracija"
                  className="btn-primary"
                >
                  Registracija
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm font-medium text-foreground/80">{user?.name}</span>
                <Link
                  href={user?.type === "business" ? "/tvrtke/dashboard" : "/"}
                  className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => { logout(); window.location.href = "/"; }}
                  className="text-sm font-medium text-foreground/50 hover:text-foreground"
                >
                  Odjavi se
                </button>
              </>
            )}
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-black/5 bg-background py-4 md:hidden dark:border-white/5">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-foreground/5" />
              {!isAuthenticated ? (
                <>
                  <Link
                    href="/prijava"
                    className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Prijava
                  </Link>
                  <Link
                    href="/registracija"
                    className="mx-4 mt-2 rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 px-4 py-3 text-center text-sm font-semibold text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Registracija
                  </Link>
                </>
              ) : (
                <>
                  <span className="px-4 py-3 text-sm font-medium text-foreground/80">{user?.name}</span>
                  <Link
                    href={user?.type === "business" ? "/tvrtke/dashboard" : "/"}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { logout(); window.location.href = "/"; }}
                    className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    Odjavi se
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
