"use client";

import { motion } from "motion/react";
import { LuClock, LuTrendingUp, LuUsers } from "react-icons/lu";
import LandingIcon from "./LandingIcon";

const STATS = [
  {
    icon: LandingIcon,
    value: "50.000+",
    label: "Resi diproses",
    color: "oklch(var(--landing-blue-600))",
    bg: "oklch(var(--landing-blue-100))",
    border: "oklch(var(--landing-blue-200))",
  },
  {
    icon: LuUsers,
    value: "500+",
    label: "Pengguna aktif",
    color: "oklch(var(--landing-green-500))",
    bg: "oklch(var(--landing-green-50))",
    border: "oklch(var(--landing-green-200))",
  },
  {
    icon: LuTrendingUp,
    value: "94%",
    label: "Rata-rata match rate",
    color: "oklch(var(--landing-violet-500))",
    bg: "oklch(var(--landing-violet-50))",
    border: "oklch(var(--landing-violet-200))",
  },
  {
    icon: LuClock,
    value: "99.9%",
    label: "Uptime SLA",
    color: "oklch(var(--landing-amber-600))",
    bg: "oklch(var(--landing-amber-100))",
    border: "oklch(var(--landing-amber-200))",
  },
];

export default function LandingStats() {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: "oklch(var(--landing-white))", borderBottom: "1px solid oklch(var(--landing-slate-200))" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl"
                style={{ backgroundColor: stat.bg, border: `1px solid ${stat.border}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(var(--landing-white))", boxShadow: `0 2px 8px ${stat.border}` }}
                >
                  <Icon size={18} style={{ color: stat.color }} />
                </div>

                <div>
                  <p style={{ fontSize: "1.35rem", fontWeight: 900, color: stat.color, lineHeight: 1 }}>
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.73rem",
                      color: "oklch(var(--landing-slate-500))",
                      marginTop: "3px",
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
