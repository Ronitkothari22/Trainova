import React from 'react';

export default function SocialProof() {
  const companies = [
    "Acme Corp", "GlobalTech", "Nexus", "Stark Ind", "Wayne Ent", "Cyberdyne"
  ];

  return (
    <section className="py-10 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
          Trusted by forward-thinking L&D teams worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {companies.map((company, index) => (
            <div key={index} className="text-xl md:text-2xl font-bold font-serif text-slate-800">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
