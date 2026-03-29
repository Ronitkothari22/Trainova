import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What makes a 'session-centric' LMS different?",
    a: "Unlike traditional course libraries where learners are isolated, Trainova groups learners into active 'sessions'. This allows for real-time engagement, live polling, team activities, and synchronized learning paths, making training feel like an event rather than a solo task."
  },
  {
    q: "Can I use Trainova for asynchronous learning?",
    a: "Yes! While it excels at live sessions, you can create self-paced sessions with required completion thresholds, assignments, and automated quizzes that learners can complete on their own schedule."
  },
  {
    q: "How do participants join a session?",
    a: "Admins can invite users via email, bulk upload a CSV, assign existing registered users, or simply share a unique joining code that participants can use to enter the session instantly."
  },
  {
    q: "Does Trainova support video hosting?",
    a: "Trainova supports embedding videos from major platforms (YouTube, Vimeo) and allows direct upload of learning materials and documents directly into your session's content library."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
