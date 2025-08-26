"use client";

import { Sparkles, ShieldCheck, MessageSquare, School, PhoneCall, Users } from "lucide-react";

// ---------- Layout Components ----------
export const Section = ({ children, className = "" }) => (
  <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>{children}</section>
);

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-sm border border-slate-200 bg-white ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ title, subtitle, icon, className = "" }) => (
  <div className={`p-5 border-b border-slate-100 flex items-center gap-3 ${className}`}>
    {icon && <div className="p-2 rounded-xl bg-slate-50">{icon}</div>}
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    </div>
  </div>
);

// ---------- Form Components ----------
export const Button = ({ children, onClick, variant = "primary", className = "", type = "button" }) => {
  const base = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-transform active:scale-[0.98]";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    ghost: "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50",
    subtle: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
  };
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const LabeledInput = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <label className="block">
    <div className="text-sm font-medium mb-1">{label}</div>
    <input
      type={type}
      className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </label>
);

export const LabeledSelect = ({ label, value, onChange, options = [] }) => (
  <label className="block">
    <div className="text-sm font-medium mb-1">{label}</div>
    <select
      className="w-full rounded-xl border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </label>
);

export const LabeledNumber = ({ label, value, onChange, min, max, step = 1 }) => (
  <label className="block">
    <div className="text-sm font-medium mb-1">{label}</div>
    <input
      type="number"
      className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      value={value ?? ""}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
    />
    <div className="text-xs text-slate-500 mt-1">
      {min}–{max}
    </div>
  </label>
);

// ---------- UI Components ----------
export const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium bg-white/70 backdrop-blur border-slate-200">
    {children}
  </span>
);

// ---------- Data & Helpers ----------
export const TRUST_BADGES = [
  { label: "1M+ counseling sessions", icon: <Users className="w-5 h-5" /> },
  { label: "Data-secure & private", icon: <ShieldCheck className="w-5 h-5" /> },
  { label: "Real advisor handoff", icon: <PhoneCall className="w-5 h-5" /> },
];

export const HOW_IT_WORKS = [
  { title: "Tell us about you", desc: "Your academics, test scores, budget & preferences.", icon: <MessageSquare className="w-5 h-5" /> },
  { title: "AI analyzes instantly", desc: "We weigh fit across ranking, admit likelihood & costs.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Get a curated shortlist", desc: "See 6–10 best-fit options with reasons & next steps.", icon: <School className="w-5 h-5" /> },
];

export const MOCK_UNIVERSITIES = [
  { id: "asu", name: "Arizona State University", country: "USA", cost: "₹24–32L/yr", deadline: "Jan 15, 2026", tags: ["STEM", "Co-ops"], rank: 1, admitEase: "Medium" },
  { id: "ncsu", name: "NC State University", country: "USA", cost: "₹28–36L/yr", deadline: "Dec 1, 2025", tags: ["CS", "Research"], rank: 1, admitEase: "Tough" },
  { id: "neu", name: "Northeastern University", country: "USA", cost: "₹30–40L/yr", deadline: "Dec 15, 2025", tags: ["Co-op", "Industry"], rank: 1, admitEase: "Medium" },
  { id: "monash", name: "Monash University", country: "Australia", cost: "₹22–30L/yr", deadline: "Oct 31, 2025", tags: ["Scholarships", "STEM"], rank: 2, admitEase: "Medium" },
  { id: "uw", name: "University of Waterloo", country: "Canada", cost: "₹26–34L/yr", deadline: "Feb 1, 2026", tags: ["Co-op", "CS"], rank: 1, admitEase: "Tough" },
  { id: "uoa", name: "University of Auckland", country: "New Zealand", cost: "₹18–24L/yr", deadline: "Nov 30, 2025", tags: ["Value", "Safe"], rank: 3, admitEase: "Easy" },
];

export function scoreUniversity(u, p) {
  let score = 50;
  if (!p) return score;
  if (p.goalCountry && u.country.toLowerCase().includes(p.goalCountry.toLowerCase())) score += 20;
  if (p.budgetMax && parseInt(u.cost.replace(/[^0-9]/g, "").slice(0, 2)) <= p.budgetMax) score += 10;
  if (p.area && u.tags.map(t => t.toLowerCase()).some(t => p.area.toLowerCase().includes(t))) score += 10;
  if (p.cgpa && p.cgpa >= 8.5 && ["Tough", "Medium"].includes(u.admitEase)) score += 5;
  return Math.min(99, score);
}
