"use client";

import { Sparkles, ArrowRight, Star, BookOpen, Users,Globe2,ShieldCheck } from "lucide-react";
import { Button, Card, CardHeader, Section, Pill, TRUST_BADGES, HOW_IT_WORKS } from "./UI";

export default function Landing({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Section className="pt-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Pill>
              <Sparkles className="w-4 h-4" /> Introducing
            </Pill>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Find your <span className="text-indigo-600">best‑fit university</span> with an AI profile review.
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Skip long forms and spreadsheets. Chat with our AI Agent that understands your goals,
              evaluates your profile, and delivers a personalized shortlist—backed by real advisors.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button onClick={onStart}>
                Start free evaluation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="ghost" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
                How it works
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {TRUST_BADGES.map((b, i) => (
                <Pill key={i}>{b.icon}<span>{b.label}</span></Pill>
              ))}
            </div>
          </div>
          <div>
            <Card className="overflow-hidden">
              <CardHeader title="What you'll get" subtitle="A crisp, actionable outcome" icon={<Star className="w-5 h-5 text-indigo-600" />} />
              <div className="p-5 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50">
                  <h4 className="font-semibold">Curated shortlist</h4>
                  <p className="text-sm text-slate-600 mt-1">6–10 universities ranked for fit, cost, deadlines, and likelihood.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50">
                  <h4 className="font-semibold">Reasoning you can trust</h4>
                  <p className="text-sm text-slate-600 mt-1">See why each match fits your background and goals.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50">
                  <h4 className="font-semibold">Next steps</h4>
                  <p className="text-sm text-slate-600 mt-1">Scholarships, test targets, and advisor handoff in one place.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50">
                  <h4 className="font-semibold">Private by default</h4>
                  <p className="text-sm text-slate-600 mt-1">Your data stays secure. Export or delete your session anytime.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <Card>
          <CardHeader title="How it works" subtitle="3 simple steps" icon={<BookOpen className="w-5 h-5 text-indigo-600" />} />
          <div className="p-6 grid sm:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((s, i) => (
              <div key={i} className="relative p-5 rounded-2xl bg-white border border-slate-200">
                <div className="absolute -top-3 -left-3 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className="p-2 rounded-xl bg-indigo-50 w-fit mb-3">{s.icon}</div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section className="pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader title="Rated 4.8/5 by students" subtitle="Real outcomes, real support" icon={<Users className="w-5 h-5 text-indigo-600" />} />
            <div className="p-6 text-sm text-slate-600">
              &ldquo;The AI shortlist felt spot‑on and saved me weeks. The advisor call clarified funding and deadlines.&rdquo;
            </div>
          </Card>
          <Card>
            <CardHeader title="Backed by data" subtitle="Up‑to‑date admit trends" icon={<Globe2 className="w-5 h-5 text-indigo-600" />} />
            <div className="p-6 text-sm text-slate-600">We blend ranking, outcomes, and historical admit patterns with your goals.</div>
          </Card>
          <Card>
            <CardHeader title="Privacy-first" subtitle="You control your data" icon={<ShieldCheck className="w-5 h-5 text-indigo-600" />} />
            <div className="p-6 text-sm text-slate-600">Session export & delete controls available any time.</div>
          </Card>
        </div>
        <div className="mt-10 flex justify-center">
          <Button onClick={onStart}>
            Start free evaluation <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Section>
    </div>
  );
}
