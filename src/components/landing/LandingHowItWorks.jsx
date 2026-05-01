"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  LuArrowLeftRight,
  LuChartBar,
  LuChevronRight,
  LuFileSpreadsheet,
  LuPackagePlus,
} from "react-icons/lu";

const STEPS = [
  {
    num: 1,
    icon: LuPackagePlus,
    title: "Tambah Data Resi",
    desc: "Input nomor resi return dari marketplace lewat form manual, scan barcode, atau upload file CSV massal. Semua tersimpan otomatis di sistem.",
    color: "oklch(var(--landing-blue-600))",
    colorSoft: "oklch(var(--landing-blue-600) / 0.8)",
    bg: "oklch(var(--landing-blue-100))",
    border: "oklch(var(--landing-blue-200))",
    shadow: "oklch(var(--landing-blue-600) / 0.25)",
    note: "Manual / CSV / Scan",
  },
  {
    num: 2,
    icon: LuFileSpreadsheet,
    title: "Input Data Marketplace",
    desc: "Masukkan data resi dari sisi marketplace (Shopee, Tokopedia, dsb.) ke form perbandingan — bisa manual atau upload CSV ekspor marketplace.",
    color: "oklch(var(--landing-violet-500))",
    colorSoft: "oklch(var(--landing-violet-500) / 0.8)",
    bg: "oklch(var(--landing-violet-50))",
    border: "oklch(var(--landing-violet-200))",
    shadow: "oklch(var(--landing-violet-500) / 0.25)",
    note: "Form / Drag & Drop",
  },
  {
    num: 3,
    icon: LuArrowLeftRight,
    title: "Bandingkan & Verifikasi",
    desc: "Tekan tombol \"Bandingkan & Verifikasi\". Sistem akan mencocokkan data internal vs marketplace secara otomatis dan menandai statusnya.",
    color: "oklch(var(--landing-amber-600))",
    colorSoft: "oklch(var(--landing-amber-600) / 0.8)",
    bg: "oklch(var(--landing-amber-100))",
    border: "oklch(var(--landing-amber-200))",
    shadow: "oklch(var(--landing-amber-600) / 0.25)",
    note: "< 3 detik proses",
  },
  {
    num: 4,
    icon: LuChartBar,
    title: "Analisis & Export",
    desc: "Lihat summary match-rate, filter hasil per status, dan export laporan ke CSV. Data analitik tersedia langsung di dashboard utama.",
    color: "oklch(var(--landing-green-500))",
    colorSoft: "oklch(var(--landing-green-500) / 0.8)",
    bg: "oklch(var(--landing-green-50))",
    border: "oklch(var(--landing-green-200))",
    shadow: "oklch(var(--landing-green-500) / 0.25)",
    note: "Export CSV",
  },
];

export default function LandingHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--landing-white))" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "oklch(var(--landing-violet-50))",
              color: "oklch(var(--landing-violet-500))",
              fontSize: "0.78rem",
              fontWeight: 700,
            }}
          >
            <LuArrowLeftRight size={13} style={{ color: "oklch(var(--landing-violet-500))" }} /> Cara Kerja
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.18,
              color: "oklch(var(--landing-slate-900))",
            }}
          >
            Mulai dalam{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(var(--landing-violet-500)), oklch(var(--landing-blue-600)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              4 langkah mudah
            </span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.72, maxWidth: "520px", color: "oklch(var(--landing-slate-500))" }}
          >
            Tidak perlu pelatihan khusus. Rekap Resi dirancang intuitif — seller baru bisa
            langsung paham dalam hitungan menit.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          <div
            className="absolute top-13 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(var(--landing-blue-200)), oklch(var(--landing-violet-200)), oklch(var(--landing-amber-200)), oklch(var(--landing-green-200)))",
            }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center px-4 z-10"
            >
              <div
                className="w-17 h-17 rounded-2xl flex flex-col items-center justify-center mb-5 relative"
                style={{
                  background: `linear-gradient(135deg, ${step.bg}, oklch(var(--landing-white)))`,
                  border: `2px solid ${step.border}`,
                  boxShadow: `0 8px 24px ${step.shadow}`,
                }}
              >
                <step.icon size={24} style={{ color: step.color }} />
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.colorSoft})`,
                    fontSize: "0.6rem",
                    fontWeight: 800,
                  }}
                >
                  {step.num}
                </span>
              </div>

              <span
                className="px-2.5 py-1 rounded-full mb-3"
                style={{
                  backgroundColor: step.bg,
                  color: step.color,
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  border: `1px solid ${step.border}`,
                }}
              >
                {step.note}
              </span>

              <h3
                style={{
                  fontSize: "0.97rem",
                  fontWeight: 800,
                  color: "oklch(var(--landing-slate-900))",
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "oklch(var(--landing-slate-500))", lineHeight: 1.65 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 relative"
            >
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, ${step.bg}, oklch(var(--landing-white)))`,
                    border: `2px solid ${step.border}`,
                    boxShadow: `0 6px 18px ${step.shadow}`,
                    flexShrink: 0,
                  }}
                >
                  <step.icon size={20} style={{ color: step.color }} />
                  <span
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white"
                    style={{ background: step.color, fontSize: "0.6rem", fontWeight: 800 }}
                  >
                    {step.num}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 my-2" style={{ backgroundColor: step.border, minHeight: "28px" }} />
                )}
              </div>

              <div className="flex-1 pb-8">
                <span
                  className="inline-block px-2.5 py-1 rounded-full mb-2"
                  style={{
                    backgroundColor: step.bg,
                    color: step.color,
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    border: `1px solid ${step.border}`,
                  }}
                >
                  {step.note}
                </span>
                <h3
                  style={{
                    fontSize: "0.97rem",
                    fontWeight: 800,
                    color: "oklch(var(--landing-slate-900))",
                    marginBottom: "6px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.84rem", color: "oklch(var(--landing-slate-500))", lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl"
            style={{
              backgroundColor: "oklch(var(--landing-slate-50))",
              border: "1px solid oklch(var(--landing-slate-200))",
              boxShadow: "0 2px 8px oklch(var(--landing-black) / 0.04)",
            }}
          >
            <p style={{ fontSize: "0.92rem", color: "oklch(var(--landing-slate-700))" }}>
              Siap mencoba? Setup selesai dalam{" "}
              <strong style={{ color: "oklch(var(--landing-slate-900))" }}>kurang dari 5 menit.</strong>
            </p>
            <Link
              href="/register"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white transition-all hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--landing-blue-500)), oklch(var(--landing-blue-700)))",
                boxShadow: "0 4px 14px oklch(var(--landing-blue-500) / 0.35)",
                fontSize: "0.88rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              Coba Sekarang <LuChevronRight size={15} className="text-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
