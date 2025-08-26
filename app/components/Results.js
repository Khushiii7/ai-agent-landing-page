"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, PhoneCall, ArrowRight, Clock } from "lucide-react";
import { Button, Card, CardHeader, Section } from "./UI";
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
            Based on your profile and preferences, we've found the best matches for you.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankedUniversities.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="p-5 border-b border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{uni.name}</h3>
                      <p className="text-sm text-slate-500">{uni.country}</p>
                    </div>
                    <div className="flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" />
                      {uni.score}/100
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Tuition (annual)</span>
                      <span className="font-medium">{uni.cost}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Application Deadline</span>
                      <span className="font-medium">{uni.deadline}</span>
                    </div>
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1">
                        {uni.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-xs rounded-full text-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-slate-100">
                  <Button className="w-full">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader 
              title="Why these matches?" 
              icon={<CheckCircle2 className="w-5 h-5 text-indigo-600" />}
            />
            <div className="p-5 text-sm text-slate-600">
              We've considered your academic profile, test scores, budget, and preferences to find the best matches for your goals.
            </div>
          </Card>
          <Card>
            <CardHeader 
              title="Next steps" 
              icon={<Star className="w-5 h-5 text-indigo-600" />}
            />
            <div className="p-5 text-sm text-slate-600">
              Save your favorite universities and start preparing your application materials. Check the deadlines!
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
          <Button variant="ghost" onClick={onRestart}>
            Start Over
          </Button>
        </div>
      </Section>
    </div>
  );
}
