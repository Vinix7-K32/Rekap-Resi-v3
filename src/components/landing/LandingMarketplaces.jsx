"use client";

import { motion } from "motion/react";
import { LuCheck, LuStore } from "react-icons/lu";

const MARKETPLACES = [
  {
    name: "Shopee",
    color: "oklch(var(--color-orange-600))",
    bg: "oklch(var(--color-orange-50))",
    border: "oklch(var(--color-orange-200))",
  },
  {
    name: "Tokopedia",
    color: "oklch(var(--color-green-500))",
    bg: "oklch(var(--color-green-50))",
    border: "oklch(var(--color-green-200))",
  },
  {
    name: "Lazada",
    color: "oklch(var(--color-blue-600))",
    bg: "oklch(var(--color-blue-100))",
    border: "oklch(var(--color-blue-200))",
  },
  {
    name: "Bukalapak",
    color: "oklch(var(--color-red-600))",
    bg: "oklch(var(--color-red-50))",
    border: "oklch(var(--color-red-200))",
  },
  {
    name: "TikTok Shop",
    color: "oklch(var(--color-violet-500))",
    bg: "oklch(var(--color-violet-50))",
    border: "oklch(var(--color-violet-200))",
  },
];

const COURIERS = ["JNE", "J&T Express", "SiCepat", "Anteraja", "Pos Indonesia"];

export default function LandingMarketplaces() {
  return (
    <section
      id="marketplaces"
      className="py-16 md:py-20"
      style={{
        backgroundColor: "oklch(var(--color-slate-50))",
        borderTop: "1px solid oklch(var(--color-slate-200))",
        borderBottom: "1px solid oklch(var(--color-slate-200))",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3"
            style={{
              backgroundColor: "oklch(var(--color-orange-50))",
              color: "oklch(var(--color-orange-600))",
              fontSize: "0.78rem",
              fontWeight: 700,
            }}
          >
            <LuStore size={13} style={{ color: "oklch(var(--color-orange-600))" }} /> Integrasi Marketplace
          </span>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "oklch(var(--color-slate-900))",
            }}
          >
            Dukung semua marketplace{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(var(--color-orange-600)), oklch(var(--color-red-600)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              terpopuler Indonesia
            </span>
          </h2>
          <p className="mt-2" style={{ fontSize: "0.9rem", color: "oklch(var(--color-slate-500))" }}>
            Kelola resi return dari semua platform dalam satu sistem terpusat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {MARKETPLACES.map((mp, i) => (
            <motion.div
              key={mp.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px oklch(var(--color-black) / 0.1)" }}
              className="flex items-center gap-3 px-5 py-3.5 rounded-2xl cursor-default transition-all"
              style={{
                backgroundColor: "oklch(var(--color-white))",
                border: `1.5px solid ${mp.border}`,
                boxShadow: "0 2px 8px oklch(var(--color-black) / 0.05)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: mp.bg, border: `1px solid ${mp.border}` }}
              >
                <LuStore size={20} style={{ color: mp.color }} />
              </div>
              <div>
                <p style={{ fontSize: "0.92rem", fontWeight: 700, color: mp.color }}>{mp.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <LuCheck size={11} style={{ color: "oklch(var(--color-green-500))" }} />
                  <span style={{ fontSize: "0.65rem", color: "oklch(var(--color-slate-400))", fontWeight: 500 }}>
                    Terintegrasi
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-10"
        >
          <p
            className="text-center mb-4"
            style={{ fontSize: "0.8rem", fontWeight: 700, color: "oklch(var(--color-slate-400))", letterSpacing: "0.06em" }}
          >
            JUGA MENDUKUNG KURIR
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {COURIERS.map((courier) => (
              <span
                key={courier}
                className="px-4 py-2 rounded-xl"
                style={{
                  backgroundColor: "oklch(var(--color-slate-100))",
                  border: "1px solid oklch(var(--color-slate-200))",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "oklch(var(--color-slate-700))",
                }}
              >
                {courier}
              </span>
            ))}
            <span
              className="px-4 py-2 rounded-xl"
              style={{
                backgroundColor: "oklch(var(--color-slate-50))",
                border: "1px dashed oklch(var(--color-slate-300))",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "oklch(var(--color-slate-400))",
              }}
            >
              + Segera hadir
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
