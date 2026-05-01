"use client";

import { motion } from "motion/react";
import { LuQuote, LuSparkles, LuStar } from "react-icons/lu";

const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    role: "Seller Shopee",
    company: "Toko Elektronik Budi",
    avatar: "BS",
    avatarGrad: "linear-gradient(135deg, oklch(var(--color-blue-500)), oklch(var(--color-blue-700)))",
    marketplace: "Shopee",
    mpColor: "oklch(var(--color-orange-600))",
    mpBg: "oklch(var(--color-orange-50))",
    rating: 5,
    text: "Sebelum pakai Rekap Resi, saya harus cek satu per satu resi return di spreadsheet. Sekarang tinggal upload CSV, langsung ketahuan mana yang cocok dan mana yang bermasalah. Hemat 2-3 jam kerja per hari!",
    highlight: "Hemat 2-3 jam kerja per hari",
  },
  {
    name: "Siti Rahayu",
    role: "Seller Tokopedia & Shopee",
    company: "SR Fashion Store",
    avatar: "SR",
    avatarGrad: "linear-gradient(135deg, oklch(var(--color-pink-500)), oklch(var(--color-pink-700)))",
    marketplace: "Tokopedia",
    mpColor: "oklch(var(--color-green-500))",
    mpBg: "oklch(var(--color-green-50))",
    rating: 5,
    text: "Fitur verifikasi otomatisnya luar biasa. Dulu saya sering pusing karena data resi tidak sinkron antara Tokopedia dan catatan internal. Sekarang bisa langsung tahu dengan sekali klik. Sangat rekomendasikan!",
    highlight: "Verifikasi dengan sekali klik",
  },
  {
    name: "Ahmad Fauzi",
    role: "Manager Operasional",
    company: "PT Distribusi Nusantara",
    avatar: "AF",
    avatarGrad: "linear-gradient(135deg, oklch(var(--color-violet-400)), oklch(var(--color-violet-700)))",
    marketplace: "Multi-Platform",
    mpColor: "oklch(var(--color-violet-500))",
    mpBg: "oklch(var(--color-violet-50))",
    rating: 5,
    text: "Kami mengelola return dari 4 marketplace sekaligus dengan volume ratusan resi per hari. Rekap Resi jadi tulang punggung operasional kami. Dashboard analitiknya juga membantu saya buat laporan ke manajemen.",
    highlight: "4 marketplace, 1 dashboard",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <LuStar
          key={i}
          size={14}
          style={{
            color: i < count ? "oklch(var(--color-amber-500))" : "oklch(var(--color-slate-200))",
            fill: i < count ? "oklch(var(--color-amber-500))" : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function LandingTestimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--color-white))" }}
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
              backgroundColor: "oklch(var(--color-amber-100))",
              color: "oklch(var(--color-amber-600))",
              fontSize: "0.78rem",
              fontWeight: 700,
            }}
          >
            <LuStar size={13} style={{ color: "oklch(var(--color-amber-600))" }} /> Testimoni Pengguna
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.18,
              color: "oklch(var(--color-slate-900))",
            }}
          >
            Dipercaya{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(var(--color-amber-600)), oklch(var(--color-orange-600)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              500+ seller aktif
            </span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ fontSize: "1rem", lineHeight: 1.72, maxWidth: "500px", color: "oklch(var(--color-slate-500))" }}
          >
            Dari seller perorangan hingga tim operasional perusahaan distribusi,
            Rekap Resi hadir untuk semua skala bisnis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.48, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-6 flex flex-col gap-4 transition-all"
              style={{
                backgroundColor: "oklch(var(--color-white))",
                border: "1px solid oklch(var(--color-slate-200))",
                boxShadow:
                  "0 1px 3px oklch(var(--color-black) / 0.04), 0 6px 20px oklch(var(--color-black) / 0.06)",
              }}
            >
              <div className="absolute top-5 right-5 opacity-[0.07]">
                <LuQuote size={48} style={{ color: "oklch(var(--color-slate-900))" }} />
              </div>

              <div className="flex items-start justify-between gap-3">
                <StarRating count={t.rating} />
                <span
                  className="px-2.5 py-1 rounded-full shrink-0"
                  style={{ backgroundColor: t.mpBg, color: t.mpColor, fontSize: "0.65rem", fontWeight: 700, whiteSpace: "nowrap" }}
                >
                  {t.marketplace}
                </span>
              </div>

              <p style={{ fontSize: "0.87rem", color: "oklch(var(--color-slate-700))", lineHeight: 1.72, flex: 1 }}>
                &quot;{t.text}&quot;
              </p>

              <div
                className="px-3 py-2 rounded-xl"
                style={{ backgroundColor: "oklch(var(--color-slate-50))", border: "1px solid oklch(var(--color-slate-200))" }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "oklch(var(--color-slate-900))",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <LuSparkles size={12} style={{ color: "oklch(var(--color-amber-500))" }} /> {t.highlight}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "oklch(var(--color-slate-100))" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ background: t.avatarGrad, fontSize: "0.75rem", fontWeight: 700 }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "oklch(var(--color-slate-900))" }}>{t.name}</p>
                  <p style={{ fontSize: "0.72rem", color: "oklch(var(--color-slate-400))" }}>
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 py-5 px-8 rounded-2xl"
          style={{ backgroundColor: "oklch(var(--color-amber-100))", border: "1px solid oklch(var(--color-amber-200))" }}
        >
          <div className="text-center">
            <p style={{ fontSize: "2.4rem", fontWeight: 900, color: "oklch(var(--color-amber-600))", lineHeight: 1 }}>
              4.9
            </p>
            <StarRating count={5} />
            <p style={{ fontSize: "0.7rem", color: "oklch(var(--color-amber-900))", marginTop: "4px" }}>Rating rata-rata</p>
          </div>
          <div className="hidden sm:block w-px h-14" style={{ backgroundColor: "oklch(var(--color-amber-200))" }} />
          <div className="space-y-1.5">
            {[
              { stars: 5, pct: 92 },
              { stars: 4, pct: 6 },
              { stars: 3, pct: 2 },
            ].map(({ stars, pct }) => (
              <div key={stars} className="flex items-center gap-2.5">
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "oklch(var(--color-amber-900))",
                    width: "40px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {stars} <LuStar size={10} style={{ color: "oklch(var(--color-amber-600))" }} />
                </span>
                <div className="w-32 h-2 rounded-full" style={{ backgroundColor: "oklch(var(--color-amber-50))" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: "oklch(var(--color-amber-500))" }}
                  />
                </div>
                <span style={{ fontSize: "0.7rem", color: "oklch(var(--color-amber-900))" }}>{pct}%</span>
              </div>
            ))}
          </div>
          <div className="hidden sm:block w-px h-14" style={{ backgroundColor: "oklch(var(--color-amber-200))" }} />
          <div className="text-center">
            <p style={{ fontSize: "1.6rem", fontWeight: 900, color: "oklch(var(--color-amber-600))", lineHeight: 1 }}>500+</p>
            <p style={{ fontSize: "0.72rem", color: "oklch(var(--color-amber-900))", marginTop: "4px" }}>Pengguna aktif</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
