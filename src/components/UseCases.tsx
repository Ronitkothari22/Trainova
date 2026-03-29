import React from 'react';
import { Briefcase, GraduationCap, Users, Settings } from 'lucide-react';

const cases = [
  {
    icon: Briefcase,
    title: "Corporate Training",
    description: "Standardize onboarding, compliance, and skills training across your entire organization with measurable outcomes."
  },
  {
    icon: Users,
    title: "HR & L&D Teams",
    description: "Run engagement diagnostics, gather employee feedback, and track departmental learning progress easily."
  },
  {
    icon: GraduationCap,
    title: "Workshops & Bootcamps",
    description: "Deliver high-energy, interactive sessions with live polls, team assignments, and real-time leaderboards."
  },
  {
    icon: Settings,
    title: "Internal Certification",
    description: "Build rigorous learning paths with required thresholds, timed quizzes, and automated pass/fail evaluations."
  }
];

export default function UseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built for Professional Environments</h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you're onboarding new hires or running a global leadership summit, Trainova adapts to your organizational structure and training goals.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {cases.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex-shrink-0 flex items-center justify-center mt-1">
                    <item.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-violet-50 rounded-3xl transform rotate-3 scale-105" />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Team training session" 
              className="relative rounded-3xl shadow-xl object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
