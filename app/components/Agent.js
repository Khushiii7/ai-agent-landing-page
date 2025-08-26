"use client";

import { useState } from "react";
import { MessageSquare, ArrowRight, ShieldCheck, ChevronLeft } from "lucide-react";
import { Button, Card, CardHeader, Section } from "./UI";
import { LabeledSelect, LabeledInput, LabeledNumber } from "./UI";

export default function Agent({ onResults }) {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({
    degreeLevel: "Masters",
    area: "Computer Science",
    goalCountry: "USA",
    cgpa: 8.5,
    ielts: 7.0,
    budgetMax: 30,
    intake: "Fall 2026"
  });

  const steps = [
    {
      title: "Basics",
      fields: (
        <div className="grid sm:grid-cols-2 gap-4">
          <LabeledSelect 
            label="Degree level" 
            value={profile.degreeLevel} 
            onChange={(v) => setProfile(p => ({ ...p, degreeLevel: v }))} 
            options={["Bachelors", "Masters", "PhD"]} 
          />
          <LabeledInput 
            label="Intended major / area" 
            value={profile.area} 
            onChange={(v) => setProfile(p => ({ ...p, area: v }))} 
          />
          <LabeledSelect 
            label="Target country" 
            value={profile.goalCountry} 
            onChange={(v) => setProfile(p => ({ ...p, goalCountry: v }))} 
            options={["USA", "Canada", "UK", "Germany", "Australia"]} 
          />
          <LabeledSelect 
            label="Intake" 
            value={profile.intake} 
            onChange={(v) => setProfile(p => ({ ...p, intake: v }))} 
            options={["Spring 2026", "Fall 2026"]} 
          />
        </div>
      )
    },
    {
      title: "Academics",
      fields: (
        <div className="grid sm:grid-cols-2 gap-4">
          <LabeledNumber 
            label="CGPA (10-scale)" 
            value={profile.cgpa} 
            onChange={(v) => setProfile(p => ({ ...p, cgpa: v }))} 
            min={0} 
            max={10}
          />
          <LabeledNumber 
            label="IELTS/TOEFL (IELTS eq.)" 
            value={profile.ielts} 
            onChange={(v) => setProfile(p => ({ ...p, ielts: v }))} 
            min={0} 
            max={9}
          />
        </div>
      )
    },
    {
      title: "Preferences",
      fields: (
        <div className="grid sm:grid-cols-2 gap-4">
          <LabeledNumber 
            label="Max budget (₹L/yr)" 
            value={profile.budgetMax} 
            onChange={(v) => setProfile(p => ({ ...p, budgetMax: v }))} 
            min={0}
            max={200}
          />
          <LabeledSelect 
            label="City preference" 
            value={profile.cityPref || "Any"} 
            onChange={(v) => setProfile(p => ({ ...p, cityPref: v }))} 
            options={["Any", "Metro", "Small town"]} 
          />
        </div>
      )
    }
  ];

  const progress = Math.round(((step + 1) / steps.length) * 100);

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onResults(profile);
    }
  };

  const back = () => step > 0 && setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <Section className="pt-10 pb-6">
        <h2 className="text-2xl font-bold">Let's personalize your shortlist</h2>
        <div className="mt-6 w-full h-3 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-3 bg-indigo-600 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </Section>

      <Section className="pb-16">
        <Card>
          <CardHeader 
            title={steps[step].title}
            icon={<MessageSquare className="w-5 h-5 text-indigo-600" />}
          />
          <div className="p-6 space-y-6">
            {steps[step].fields}
            <div className="flex justify-between">
              <Button 
                variant="ghost" 
                onClick={back}
                disabled={step === 0}
                className={step === 0 ? "invisible" : ""}
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              <Button onClick={next}>
                {step === steps.length - 1 ? "See matches" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
        <div className="mt-6 text-sm text-slate-500 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Your data is secure and private
        </div>
      </Section>
    </div>
  );
}
