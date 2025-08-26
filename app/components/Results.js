"use client";

import { CheckCircle2, PhoneCall } from "lucide-react";
import { Card, CardHeader, Section } from "./UI";
import { MOCK_UNIVERSITIES, scoreUniversity } from "./UI";

export default function Results({ profile, onRestart }) {
  const rankedUniversities = MOCK_UNIVERSITIES.map(uni => ({
    ...uni,
    score: scoreUniversity(uni, profile)
  })).sort((a, b) => b.score - a.score).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Section className="pt-10">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900">Your University Matches</h1>
          <p className="mt-2 text-slate-600">
            Based on your profile and preferences, we&apos;ve found the best matches for you.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankedUniversities.map((uni, index) => (
            <Card key={uni.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{uni.name}</h3>
                    <p className="text-sm text-slate-600">{uni.country}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">
                    #{index + 1} Match
                  </span>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tuition:</span>
                    <span className="font-medium">{uni.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Deadline:</span>
                    <span className="font-medium">{uni.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Admit Ease:</span>
                    <span className="font-medium">{uni.admitEase}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {uni.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader 
              title="How we matched you" 
              icon={<CheckCircle2 className="w-5 h-5 text-indigo-600" />}
            />
            <div className="p-5 text-sm text-slate-600">
              We&apos;ve considered your academic profile, test scores, budget, and preferences to find the best matches for your goals.
            </div>
          </Card>
          <Card>
            <CardHeader 
              title="Need help?" 
              icon={<PhoneCall className="w-5 h-5 text-indigo-600" />}
            />
            <div className="p-5 text-sm text-slate-600">
              Our education counselors are here to help you with applications, scholarships, and more.
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Start Over
          </button>
        </div>
      </Section>
    </div>
  );
}
