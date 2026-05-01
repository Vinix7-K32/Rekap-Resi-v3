"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowRight, LuCheck, LuLock, LuLogIn } from "react-icons/lu";
import LandingIcon from "./LandingIcon";

const CTA_PERKS = [
  "Gratis selamanya untuk paket dasar",
  "Import CSV tanpa batas",
  "Dukungan via email 24/7",
  "Tidak perlu kartu kredit",
];

export default function LandingCTA() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(var(--landing-ink-950)) 0%, oklch(var(--landing-ink-800)) 55%, oklch(var(--landing-ink-700)) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="oklch(var(--landing-white))"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.1]"
          style={{
            background: "radial-gradient(circle, oklch(var(--landing-blue-500)), transparent)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, oklch(var(--landing-violet-400)), transparent)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div
            className="w-16 h-16 rounded-3xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
              boxShadow: "0 12px 36px oklch(var(--landing-blue-500) / 0.45)",
            }}
          >
            <LandingIcon size={30} className="text-white" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="text-white"
          style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.14 }}
        >
          Mulai kelola resi return Anda{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, oklch(var(--landing-blue-400)), oklch(var(--landing-indigo-400)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            hari ini — gratis
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.48, delay: 0.14 }}
          className="mt-5 mx-auto"
          style={{
            color: "oklch(var(--landing-slate-400) / 0.9)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "520px",
          }}
        >
          Bergabunglah dengan 500+ seller yang sudah membuktikan efisiensi rekap resi
          dengan Rekap Resi. Daftar dalam 1 menit, tanpa kartu kredit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 mt-7"
        >
          {CTA_PERKS.map((p) => (
            <div key={p} className="flex items-center gap-2">
              <LuCheck size={15} style={{ color: "oklch(var(--landing-green-400))", flexShrink: 0 }} />
              <span style={{ fontSize: "0.85rem", color: "oklch(var(--landing-slate-300) / 0.8)" }}>{p}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/register"
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white transition-all hover:scale-105 hover:opacity-95 w-full sm:w-auto justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
              boxShadow: "0 10px 30px oklch(var(--landing-blue-500) / 0.5)",
              fontSize: "0.97rem",
              fontWeight: 700,
            }}
          >
            Daftar Gratis Sekarang <LuArrowRight size={18} />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl transition-all hover:bg-white/12 w-full sm:w-auto justify-center"
            style={{
              border: "1.5px solid oklch(var(--landing-white) / 0.18)",
              backgroundColor: "oklch(var(--landing-white) / 0.06)",
              color: "oklch(var(--landing-slate-200) / 0.9)",
              fontSize: "0.97rem",
              fontWeight: 600,
            }}
          >
            <LuLogIn size={16} style={{ color: "oklch(var(--landing-slate-200) / 0.9)" }} /> Sudah punya akun? Masuk
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-6"
          style={{
            fontSize: "0.75rem",
            color: "oklch(var(--landing-slate-400) / 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <LuLock size={12} style={{ color: "oklch(var(--landing-slate-400) / 0.6)" }} />
          Data Anda aman dan terenkripsi · Tidak ada spam · Bisa batalkan kapan saja
        </motion.p>
      </div>
    </section>
  );
}
