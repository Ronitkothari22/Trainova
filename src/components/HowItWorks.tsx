import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Admin Creates Session",
    description: "Set up a new training program, define modules, and upload learning materials in minutes."
  },
  {
    number: "02",
    title: "Learners Join",
    description: "Participants access the session via email invites or unique joining codes."
  },
  {
    number: "03",
    title: "Active Engagement",
    description: "Learners consume content, participate in live polls, and complete quizzes and assignments."
  },
  {
    number: "04",
    title: "Review Analytics",
    description: "Admins track progress, measure outcomes, and gather feedback through comprehensive dashboards."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Session-Centric Flow</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A streamlined process from setup to success, keeping all activities connected.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-white pt-8 md:pt-0"
              >
                <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg mb-6">
                  {step.number}
                </div>
                <div className="text-center px-4">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
