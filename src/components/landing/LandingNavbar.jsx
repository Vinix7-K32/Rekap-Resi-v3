"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { LuArrowRight, LuChevronRight, LuMenu, LuX } from "react-icons/lu";
import LandingIcon from "./LandingIcon";

const NAV_LINKS = [
  { label: "Fitur", href: "#features" },
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "Marketplace", href: "#marketplaces" },
  { label: "Testimoni", href: "#testimonials" },
];

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(var(--landing-ink-900) / 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid oklch(var(--landing-white) / 0.07)"
          : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/landing" className="flex items-center gap-3 shrink-0">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
              boxShadow: "0 4px 12px oklch(var(--landing-blue-500) / 0.35)",
            }}
          >
            <LandingIcon size={18} className="text-white" />
          </div>
          <span
            className="text-white"
            style={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}
          >
            Rekap Resi
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => handleAnchor(href)}
                className="px-4 py-2 rounded-lg transition-colors hover:bg-white/10"
                style={{
                  color: "oklch(var(--landing-slate-300) / 0.85)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 rounded-xl transition-all hover:bg-white/10"
            style={{
                color: "oklch(var(--landing-slate-300) / 0.85)",
              fontSize: "0.88rem",
              fontWeight: 500,
            }}
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
              boxShadow: "0 4px 14px oklch(var(--landing-blue-500) / 0.4)",
              fontSize: "0.88rem",
              fontWeight: 600,
            }}
          >
            Mulai Gratis <LuArrowRight size={14} />
          </Link>
        </div>

        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-white/10"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          style={{ color: "oklch(var(--landing-slate-300) / 0.85)" }}
        >
          {menuOpen ? <LuX size={20} /> : <LuMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "oklch(var(--landing-ink-900))",
              borderTop: "1px solid oklch(var(--landing-white) / 0.07)",
            }}
          >
            <div className="px-5 py-4 space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleAnchor(href)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors hover:bg-white/08"
                  style={{
                    color: "oklch(var(--landing-slate-300) / 0.85)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  {label}
                  <LuChevronRight size={15} style={{ color: "oklch(var(--landing-slate-700))" }} />
                </button>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl transition-all hover:bg-white/10"
                  style={{
                    color: "oklch(var(--landing-slate-300) / 0.85)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    border: "1px solid oklch(var(--landing-white) / 0.1)",
                  }}
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl text-white transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  Mulai Gratis — Gratis Selamanya
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
