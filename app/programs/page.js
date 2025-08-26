import { Card, CardHeader, Section } from "@/app/components/UI";
import { PROGRAMS } from "@/app/data/programs";
import { BookOpen, Globe, GraduationCap, Clock, DollarSign, Check } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Section className="pt-20 pb-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Explore Our Programs</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow text-black">
              <CardHeader 
                title={program.title} 
                subtitle={program.description}
                icon={<BookOpen className="w-6 h-6 text-indigo-600" />}
                className="border-b border-slate-100"
              />
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <GraduationCap className="w-4 h-4 text-indigo-500" />
                    <span>Degree: {program.degree}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <DollarSign className="w-4 h-4 text-indigo-500" />
                    <span>Tuition: {program.avgTuition}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <Globe className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Available in: {program.countries.join(", ")}</span>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-slate-800 mb-2">Requirements:</h4>
                    <ul className="space-y-1.5">
                      {program.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
