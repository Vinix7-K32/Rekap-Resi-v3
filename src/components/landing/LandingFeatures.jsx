"use client";

import { motion } from "motion/react";
import {
  LuArrowLeftRight,
  LuChartBar,
  LuBell,
  LuFileDown,
  LuFileSpreadsheet,
  LuPackagePlus,
  LuScan,
  LuStore,
} from "react-icons/lu";

const FEATURES = [
  {
    icon: LuPackagePlus,
    title: "Tambah Resi Manual",
    desc: "Input nomor resi satu per satu lewat form yang simpel. Dukung scan barcode langsung dari kamera perangkat Anda.",
    color: "oklch(var(--color-blue-500))",
    bg: "oklch(var(--color-blue-100))",
    border: "oklch(var(--color-blue-200))",
    tag: "Paling Sering Dipakai",
    tagColor: "oklch(var(--color-blue-600))",
    tagBg: "oklch(var(--color-blue-100))",
  },
  {
    icon: LuFileSpreadsheet,
    title: "Import CSV Massal",
    desc: "Upload ratusan resi sekaligus lewat drag & drop file CSV. Cocok untuk seller volume tinggi saat akhir bulan.",
    color: "oklch(var(--color-green-500))",
    bg: "oklch(var(--color-green-50))",
    border: "oklch(var(--color-green-200))",
    tag: null,
    tagColor: "",
    tagBg: "",
  },
  {
    icon: LuArrowLeftRight,
    title: "Verifikasi Otomatis",
    desc: "Bandingkan data resi internal dengan data marketplace dalam hitungan detik. Langsung tahu mana yang Cocok, Tidak Cocok, atau Tidak Ditemukan.",
    color: "oklch(var(--color-violet-500))",
    bg: "oklch(var(--color-violet-50))",
    border: "oklch(var(--color-violet-200))",
    tag: "Fitur Unggulan",
    tagColor: "oklch(var(--color-violet-500))",
    tagBg: "oklch(var(--color-violet-100))",
  },
  {
    icon: LuChartBar,
    title: "Analitik Real-time",
    desc: "Dashboard grafik interaktif yang menampilkan tren resi harian, mingguan, dan bulanan dengan area chart dan bar chart.",
    color: "oklch(var(--color-amber-600))",
    bg: "oklch(var(--color-amber-100))",
    border: "oklch(var(--color-amber-200))",
    tag: null,
    tagColor: "",
    tagBg: "",
  },
  {
    icon: LuStore,
    title: "Multi-Marketplace",
    desc: "Mendukung Shopee, Tokopedia, Lazada, Bukalapak, dan TikTok Shop. Kelola semua platform dari satu tempat tanpa berpindah tab.",
    color: "oklch(var(--color-orange-600))",
    bg: "oklch(var(--color-orange-50))",
    border: "oklch(var(--color-orange-200))",
    tag: "5 Platform",
    tagColor: "oklch(var(--color-orange-600))",
    tagBg: "oklch(var(--color-orange-100))",
  },
  {
    icon: LuFileDown,
    title: "Export Laporan",
    desc: "Ekspor data resi lengkap ke CSV kapan saja. Siap langsung untuk keperluan laporan operasional atau rekonsiliasi keuangan.",
    color: "oklch(var(--color-cyan-600))",
    bg: "oklch(var(--color-cyan-50))",
    border: "oklch(var(--color-cyan-200))",
    tag: null,
    tagColor: "",
    tagBg: "",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

export default function LandingFeatures() {
  return (
    <section
      id="features"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--color-slate-100))" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "oklch(var(--color-blue-100))",
              color: "oklch(var(--color-blue-700))",
              fontSize: "0.78rem",
              fontWeight: 700,
            }}
          >
            <LuScan size={13} style={{ color: "oklch(var(--color-blue-700))" }} /> Fitur Lengkap
          </span>
          <h2
            className="text-slate-900"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.18 }}
          >
            Semua yang Anda butuhkan,{" "}
            <span
              style={{
                background: "linear-gradient(90deg, oklch(var(--color-blue-600)), oklch(var(--color-violet-500)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ada di sini
            </span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.72, maxWidth: "560px", color: "oklch(var(--color-slate-500))" }}
          >
            Dari pencatatan manual hingga verifikasi otomatis, Rekap Resi hadir dengan fitur
            lengkap yang dirancang khusus untuk kebutuhan seller Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <motion.article
              key={feat.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px oklch(var(--color-black) / 0.1)" }}
              className="relative rounded-2xl p-6 transition-all cursor-default"
              style={{
                backgroundColor: "oklch(var(--color-white))",
                border: "1px solid oklch(var(--color-slate-200))",
                boxShadow:
                  "0 1px 3px oklch(var(--color-black) / 0.04), 0 4px 16px oklch(var(--color-black) / 0.04)",
              }}
            >
              {feat.tag && (
                <span
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: feat.tagBg, color: feat.tagColor, fontSize: "0.65rem", fontWeight: 700 }}
                >
                  {feat.tag}
                </span>
              )}

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: feat.bg, border: `1px solid ${feat.border}` }}
              >
                <feat.icon size={22} style={{ color: feat.color }} />
              </div>

              <h3
                style={{
                  fontSize: "0.97rem",
                  fontWeight: 700,
                  color: "oklch(var(--color-slate-900))",
                  marginBottom: "8px",
                }}
              >
                {feat.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "oklch(var(--color-slate-500))", lineHeight: 1.68 }}>
                {feat.desc}
              </p>

              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: feat.color }}
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-2xl"
            style={{
              backgroundColor: "oklch(var(--color-white))",
              border: "1px solid oklch(var(--color-slate-200))",
              boxShadow: "0 2px 8px oklch(var(--color-black) / 0.06)",
            }}
          >
            <LuBell size={15} style={{ color: "oklch(var(--color-amber-500))" }} />
            <p style={{ fontSize: "0.83rem", color: "oklch(var(--color-slate-700))" }}>
              Notifikasi perubahan status resi dikirim{" "}
              <strong style={{ color: "oklch(var(--color-slate-900))" }}>real-time</strong> ke dashboard Anda.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
