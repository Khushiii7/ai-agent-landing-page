import { Card, CardHeader, Section } from "@/app/components/UI";
import { SUCCESS_STORIES } from "@/app/data/stories";
import { GraduationCap, Award, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Section className="pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-black">Success Stories</h1>
          <p className="text-slate-600 text-lg">
            Read inspiring stories from students who achieved their study abroad dreams with LeapScholar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story) => (
            <Card key={story.id} className="hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">{story.name}</h3>
                    <p className="text-indigo-600">{story.program}</p>
                    <p className="text-sm text-slate-500">{story.university}, {story.country}</p>
                  </div>
                </div>

                <blockquote className="text-slate-600 italic border-l-2 border-indigo-200 pl-4 mb-6">
                  "{story.quote}"
                </blockquote>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="font-medium text-slate-800 mb-3">Achievements:</h4>
                  <div className="space-y-2">
                    {Object.entries(story.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-sm text-black">
                        <span className="text-slate-600 capitalize">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                    Read full story →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-black">Start Your Success Story</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their study abroad dreams with our guidance
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
          >
            Begin Your Journey
            <CheckCircle className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
