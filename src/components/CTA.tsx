import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-90" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-2xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to transform your corporate training?
        </h2>
        <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join hundreds of organizations using Trainova to deliver structured, engaging, and measurable learning experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-white text-indigo-600 font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
            Start Free Trial
          </button>
          <button className="px-8 py-4 rounded-full bg-indigo-700 text-white font-bold text-lg hover:bg-indigo-800 transition-colors border border-indigo-500">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
