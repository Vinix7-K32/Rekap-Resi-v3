"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  LuArrowRight,
  LuChartBar,
  LuCheck,
  LuPackageCheck,
  LuPlay,
  LuShieldCheck,
  LuSparkles,
  LuTrendingUp,
} from "react-icons/lu";
import LandingIcon from "./LandingIcon";

function StatBadge({ icon: Icon, label, value, color, bg }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{
        backgroundColor: bg,
        border: "1px solid oklch(var(--landing-white) / 0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: "oklch(var(--landing-white) / 0.12)" }}
      >
        <Icon size={17} style={{ color }} />
      </div>
      <div>
        <p
          className="text-white"
          style={{ fontSize: "1.15rem", fontWeight: 800, lineHeight: 1 }}
        >
          {value}
        </p>
        <p
          style={{
            fontSize: "0.7rem",
            color: "oklch(var(--landing-slate-300) / 0.7)",
            marginTop: "2px",
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function MockResiRow({ no, status, colorVar, mp }) {
  return (
    <div
      className="flex items-center justify-between py-2.5 border-b last:border-0"
      style={{ borderColor: "oklch(var(--landing-white) / 0.06)" }}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <LandingIcon size={12} style={{ color: "oklch(var(--landing-blue-400))", flexShrink: 0 }} />
        <span
          className="truncate"
          style={{
            fontSize: "0.68rem",
            color: "oklch(var(--landing-slate-300) / 0.8)",
            fontFamily: "monospace",
          }}
        >
          {no}
        </span>
      </div>
      <span
        style={{
          fontSize: "0.62rem",
          color: "oklch(var(--landing-slate-400) / 0.5)",
          flexShrink: 0,
          marginLeft: "8px",
        }}
      >
        {mp}
      </span>
      <span
        className="px-2 py-0.5 rounded-full shrink-0 ml-2"
        style={{
          backgroundColor: `oklch(var(${colorVar}) / 0.13)`,
          color: `oklch(var(${colorVar}))`,
          fontSize: "0.6rem",
          fontWeight: 600,
        }}
      >
        {status}
      </span>
    </div>
  );
}

export default function LandingHero() {
  const perks = [
    "Gratis selamanya untuk paket dasar",
    "Setup kurang dari 5 menit",
    "Tidak perlu kartu kredit",
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, oklch(var(--landing-ink-950)) 0%, oklch(var(--landing-ink-800)) 55%, oklch(var(--landing-ink-700)) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="oklch(var(--landing-white))" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, oklch(var(--landing-blue-500)), transparent)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, oklch(var(--landing-violet-500)), transparent)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, oklch(var(--landing-cyan-500)), transparent)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-28 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: "oklch(var(--landing-blue-500) / 0.15)",
                border: "1px solid oklch(var(--landing-blue-500) / 0.3)",
              }}
            >
              <LuSparkles size={13} style={{ color: "oklch(var(--landing-blue-400))" }} />
              <span style={{ fontSize: "0.78rem", color: "oklch(var(--landing-blue-300))", fontWeight: 600 }}>
                Platform Logistik Return #1 untuk UMKM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
              }}
            >
              Kelola Resi Return{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, oklch(var(--landing-blue-400)) 0%, oklch(var(--landing-indigo-400)) 50%, oklch(var(--landing-violet-400)) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Lebih Cepat
              </span>
              <br />& Lebih Akurat
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-5"
              style={{
                color: "oklch(var(--landing-slate-400) / 0.9)",
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                lineHeight: 1.75,
                maxWidth: "520px",
              }}
            >
              Rekap Resi adalah sistem terpusat untuk mencatat, melacak, dan
              memverifikasi nomor resi pengembalian barang dari semua marketplace
              dalam satu dashboard.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-6 space-y-2.5"
            >
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <LuCheck size={16} style={{ color: "oklch(var(--landing-green-400))", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "oklch(var(--landing-slate-300) / 0.8)" }}>
                    {p}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/register"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-white transition-all hover:scale-105 hover:opacity-95"
                style={{
                  background: "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
                  boxShadow: "0 8px 24px oklch(var(--landing-blue-500) / 0.45)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                }}
              >
                Mulai Gratis Sekarang <LuArrowRight size={17} />
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl transition-all hover:bg-white/10"
                style={{
                  border: "1.5px solid oklch(var(--landing-white) / 0.18)",
                  color: "oklch(var(--landing-slate-200) / 0.9)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  backgroundColor: "oklch(var(--landing-white) / 0.06)",
                }}
              >
                <LuPlay size={15} style={{ color: "oklch(var(--landing-slate-200) / 0.9)" }} />Lihat Demo
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-6 flex-wrap"
            >
              {[
                { val: "50K+", label: "Resi diproses" },
                { val: "500+", label: "Pengguna aktif" },
                { val: "99.9%", label: "Uptime SLA" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p
                    className="text-white"
                    style={{ fontSize: "1.35rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {val}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "oklch(var(--landing-slate-400) / 0.6)",
                      marginTop: "3px",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
              <div className="h-8 w-px" style={{ backgroundColor: "oklch(var(--landing-white) / 0.12)" }} />
              <div className="flex -space-x-2">
                {[
                  "--landing-blue-500",
                  "--landing-violet-500",
                  "--landing-pink-500",
                  "--landing-amber-500",
                ].map((c, i) => (
                  <div
                    key={c}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white"
                    style={{
                      background: `linear-gradient(135deg, oklch(var(${c})), oklch(var(${c}) / 0.73))`,
                      borderColor: "oklch(var(--landing-ink-800))",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                    }}
                  >
                    {[
                      "B",
                      "S",
                      "D",
                      "A",
                    ][i]}
                  </div>
                ))}
                <div
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                  style={{
                    backgroundColor: "oklch(var(--landing-white) / 0.1)",
                    borderColor: "oklch(var(--landing-ink-800))",
                    color: "oklch(var(--landing-slate-300) / 0.7)",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                  }}
                >
                  +496
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div
              className="rounded-3xl p-5 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, oklch(var(--landing-white) / 0.07) 0%, oklch(var(--landing-white) / 0.03) 100%)",
                border: "1px solid oklch(var(--landing-white) / 0.1)",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 32px 80px oklch(var(--landing-black) / 0.5), 0 0 0 1px oklch(var(--landing-white) / 0.05)",
              }}
            >
              <div
                className="flex items-center justify-between mb-4 pb-4"
                style={{ borderBottom: "1px solid oklch(var(--landing-white) / 0.08)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
                    }}
                  >
                    <LandingIcon size={14} className="text-white" />
                  </div>
                  <span className="text-white" style={{ fontSize: "0.88rem", fontWeight: 700 }}>
                    Dashboard Rekap Resi
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {[
                    "--landing-red-500",
                    "--landing-amber-500",
                    "--landing-green-500",
                  ].map((c) => (
                    <div
                      key={c}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: `oklch(var(${c}))` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {[
                  {
                    Icon: LandingIcon,
                    val: "51",
                    label: "Total Resi",
                    color: "oklch(var(--landing-blue-500))",
                    bg: "oklch(var(--landing-blue-500) / 0.15)",
                  },
                  {
                    Icon: LuPackageCheck,
                    val: "9",
                    label: "Hari Ini",
                    color: "oklch(var(--landing-green-500))",
                    bg: "oklch(var(--landing-green-500) / 0.15)",
                  },
                  {
                    Icon: LuTrendingUp,
                    val: "94%",
                    label: "Match Rate",
                    color: "oklch(var(--landing-amber-500))",
                    bg: "oklch(var(--landing-amber-500) / 0.15)",
                  },
                ].map(({ Icon, val, label, color, bg }) => (
                  <div
                    key={label}
                    className="rounded-xl p-3 text-center"
                    style={{ backgroundColor: bg, border: "1px solid oklch(var(--landing-white) / 0.07)" }}
                  >
                    <Icon size={14} style={{ color, margin: "0 auto 4px" }} />
                    <p
                      className="text-white"
                      style={{ fontSize: "1rem", fontWeight: 800, lineHeight: 1 }}
                    >
                      {val}
                    </p>
                    <p
                      style={{
                        fontSize: "0.6rem",
                        color: "oklch(var(--landing-slate-400) / 0.7)",
                        marginTop: "2px",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mb-4 p-3 rounded-xl"
                style={{
                  backgroundColor: "oklch(var(--landing-white) / 0.04)",
                  border: "1px solid oklch(var(--landing-white) / 0.06)",
                }}
              >
                <div className="flex items-end justify-between gap-1.5 h-16">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 72, 88, 50, 78].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background:
                          h >= 80
                            ? "linear-gradient(180deg, oklch(var(--landing-blue-400)), oklch(var(--landing-blue-500)))"
                            : "oklch(var(--landing-blue-500) / 0.3)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span style={{ fontSize: "0.6rem", color: "oklch(var(--landing-slate-400) / 0.5)" }}>
                    14 hari terakhir
                  </span>
                  <div className="flex items-center gap-1">
                    <LuChartBar size={10} style={{ color: "oklch(var(--landing-green-500))" }} />
                    <span style={{ fontSize: "0.6rem", color: "oklch(var(--landing-green-400))", fontWeight: 600 }}>
                      +12% vs minggu lalu
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "oklch(var(--landing-slate-400) / 0.6)",
                    marginBottom: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  RESI TERBARU
                </p>
                <MockResiRow no="JNE000000000001" status="Diterima" colorVar="--landing-green-500" mp="Shopee" />
                <MockResiRow no="JP000000000003" status="Dalam Proses" colorVar="--landing-amber-500" mp="Tokopedia" />
                <MockResiRow no="SPXID0000004" status="Menunggu" colorVar="--landing-blue-500" mp="Lazada" />
                <MockResiRow no="ANT000000005" status="Selesai" colorVar="--landing-violet-500" mp="TikTok Shop" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-14 top-1/4"
            >
              <StatBadge
                icon={LuShieldCheck}
                label="Verifikasi Cocok"
                value="94%"
                color="oklch(var(--landing-green-400))"
                bg="oklch(var(--landing-ink-900) / 0.88)"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-12 bottom-1/4"
            >
              <StatBadge
                icon={LuTrendingUp}
                label="Resi hari ini"
                value="+9"
                color="oklch(var(--landing-blue-400))"
                bg="oklch(var(--landing-ink-900) / 0.88)"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, oklch(var(--landing-white)))" }}
      />
    </section>
  );
}
