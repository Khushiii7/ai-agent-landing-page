"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, MessageSquare, School, Globe2, Users, Star, ChevronRight, BookOpen, Clock, PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Landing from "./components/Landing";
import Agent from "./components/Agent";
import Results from "./components/Results";

// ---------- Helpers & Mock Data ----------
const TRUST_BADGES = [
  { label: "1M+ counseling sessions", icon: <Users className="w-5 h-5" /> },
  { label: "Data-secure & private", icon: <ShieldCheck className="w-5 h-5" /> },
  { label: "Real advisor handoff", icon: <PhoneCall className="w-5 h-5" /> },
];

const HOW_IT_WORKS = [
  { title: "Tell us about you", desc: "Your academics, test scores, budget & preferences.", icon: <MessageSquare className="w-5 h-5" /> },
  { title: "AI analyzes instantly", desc: "We weigh fit across ranking, admit likelihood & costs.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Get a curated shortlist", desc: "See 6–10 best-fit options with reasons & next steps.", icon: <School className="w-5 h-5" /> },
];

const MOCK_UNIVERSITIES = [
  { id: "asu", name: "Arizona State University", country: "USA", cost: "₹24–32L/yr", deadline: "Jan 15, 2026", tags: ["STEM", "Co-ops"], rank: 1, admitEase: "Medium" },
  { id: "ncsu", name: "NC State University", country: "USA", cost: "₹28–36L/yr", deadline: "Dec 1, 2025", tags: ["CS", "Research"], rank: 1, admitEase: "Tough" },
  { id: "neu", name: "Northeastern University", country: "USA", cost: "₹30–40L/yr", deadline: "Dec 15, 2025", tags: ["Co-op", "Industry"], rank: 1, admitEase: "Medium" },
  { id: "monash", name: "Monash University", country: "Australia", cost: "₹22–30L/yr", deadline: "Oct 31, 2025", tags: ["Scholarships", "STEM"], rank: 2, admitEase: "Medium" },
  { id: "uw", name: "University of Waterloo", country: "Canada", cost: "₹26–34L/yr", deadline: "Feb 1, 2026", tags: ["Co-op", "CS"], rank: 1, admitEase: "Tough" },
  { id: "uoa", name: "University of Auckland", country: "New Zealand", cost: "₹18–24L/yr", deadline: "Nov 30, 2025", tags: ["Value", "Safe"], rank: 3, admitEase: "Easy" },
];

// ... [rest of the component code] ...

export default function LeapAIProfileAgent() {
  const [route, setRoute] = useState("landing");
  const [profile, setProfile] = useState(null);
  const pathname = usePathname();

  // If we're on a specific page, render that page
  if (pathname === "/programs" || pathname === "/success-stories") {
    return null; // Let Next.js handle these routes
  }

  return (
    <div className="font-sans text-slate-900">
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white grid place-items-center font-bold">L</div>
            <div className="font-semibold">LeapScholar</div>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <Link href="/" className={`hover:text-slate-900 ${pathname === '/' ? 'font-medium text-indigo-600' : ''}`}>
              Why Leap
            </Link>
            <Link href="/programs" className={`hover:text-slate-900 ${pathname === '/programs' ? 'font-medium text-indigo-600' : ''}`}>
              Programs
            </Link>
            <Link href="/success-stories" className={`hover:text-slate-900 ${pathname === '/success-stories' ? 'font-medium text-indigo-600' : ''}`}>
              Success stories
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setRoute("agent")} 
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-transform active:scale-[0.98] bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Try AI Agent
            </button>
          </div>
        </div>
      </header>

      <main>
        {route === "landing" && <Landing onStart={() => setRoute("agent")} />}
        {route === "agent" && (
          <Agent 
            onResults={(p) => {
              setProfile(p);
              setRoute("results");
            }} 
          />
        )}
        {route === "results" && (
          <Results 
            profile={profile} 
            onRestart={() => setRoute("agent")} 
          />
        )}
      </main>

      <footer className="bg-black text-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            © {new Date().getFullYear()} LeapScholar. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
      <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
      <a href="#" className="hover:text-gray-300 transition-colors">Help</a>
    </div>
  </div>
</footer>
    </div>
  );
}
