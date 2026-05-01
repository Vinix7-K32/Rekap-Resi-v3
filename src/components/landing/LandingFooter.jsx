"use client";

import Link from "next/link";
import { LuHeart, LuMail, LuMapPin } from "react-icons/lu";
import LandingIcon from "./LandingIcon";

const FOOTER_COLUMNS = [
  {
    heading: "Produk",
    links: [
      { label: "Fitur", href: "#features" },
      { label: "Cara Kerja", href: "#how-it-works" },
      { label: "Integrasi Marketplace", href: "#marketplaces" },
      { label: "Design System", href: "/design-system" },
    ],
  },
  {
    heading: "Akun",
    links: [
      { label: "Daftar Gratis", href: "/register" },
      { label: "Masuk", href: "/login" },
      { label: "Dashboard", href: "/" },
      { label: "Tambah Resi", href: "/tambah" },
    ],
  },
  {
    heading: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Karir", href: "#" },
      { label: "Hubungi Kami", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Keamanan Data", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const FOOTER_MARKETPLACES = ["Shopee", "Tokopedia", "Lazada", "Bukalapak", "TikTok Shop"];

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  const handleAnchor = (href) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, oklch(var(--landing-ink-900)) 0%, oklch(var(--landing-ink-950)) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-2">
            <Link href="/landing" className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
                  boxShadow: "0 4px 12px oklch(var(--landing-blue-500) / 0.35)",
                }}
              >
                <LandingIcon size={20} className="text-white" />
              </div>
              <span
                className="text-white"
                style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.01em" }}
              >
                Rekap Resi
              </span>
            </Link>

            <p
              style={{
                fontSize: "0.84rem",
                color: "oklch(var(--landing-slate-400) / 0.75)",
                lineHeight: 1.72,
                marginBottom: "18px",
              }}
            >
              Sistem manajemen resi pengembalian barang yang terpusat, cepat, dan akurat untuk semua seller Indonesia.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <LuMail size={13} style={{ color: "oklch(var(--landing-blue-400))", flexShrink: 0 }} />
                <span style={{ fontSize: "0.8rem", color: "oklch(var(--landing-slate-400) / 0.7)" }}>
                  hello@rekapresi.id
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <LuMapPin size={13} style={{ color: "oklch(var(--landing-blue-400))", flexShrink: 0 }} />
                <span style={{ fontSize: "0.8rem", color: "oklch(var(--landing-slate-400) / 0.7)" }}>
                  Jakarta, Indonesia
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {FOOTER_MARKETPLACES.map((mp) => (
                <span
                  key={mp}
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    color: "oklch(var(--landing-slate-400) / 0.6)",
                    backgroundColor: "oklch(var(--landing-white) / 0.05)",
                    border: "1px solid oklch(var(--landing-white) / 0.07)",
                    padding: "2px 8px",
                    borderRadius: "999px",
                  }}
                >
                  {mp}
                </span>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="col-span-1">
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "oklch(var(--landing-slate-400) / 0.5)",
                  letterSpacing: "0.08em",
                  marginBottom: "14px",
                }}
              >
                {col.heading.toUpperCase()}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => handleAnchor(link.href)}
                        className="transition-colors hover:text-white"
                        style={{ fontSize: "0.83rem", color: "oklch(var(--landing-slate-400) / 0.7)", textAlign: "left" }}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                        style={{ fontSize: "0.83rem", color: "oklch(var(--landing-slate-400) / 0.7)" }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid oklch(var(--landing-white) / 0.06)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p style={{ fontSize: "0.78rem", color: "oklch(var(--landing-slate-400) / 0.45)" }}>
          © {currentYear} Rekap Resi. Hak cipta dilindungi undang-undang.
        </p>

        <p className="flex items-center gap-1.5" style={{ fontSize: "0.78rem", color: "oklch(var(--landing-slate-400) / 0.45)" }}>
          Dibuat dengan <LuHeart size={12} style={{ color: "oklch(var(--landing-red-500))" }} /> untuk seller Indonesia
        </p>

        <div className="flex items-center gap-4">
          {["Privasi", "Ketentuan", "Cookie"].map((item) => (
            <button
              key={item}
              className="transition-colors hover:text-white"
              style={{ fontSize: "0.76rem", color: "oklch(var(--landing-slate-400) / 0.45)" }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
