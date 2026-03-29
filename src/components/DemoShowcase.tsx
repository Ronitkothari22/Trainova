import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, GraduationCap, Radio } from 'lucide-react';

export default function DemoShowcase() {
  const [activeTab, setActiveTab] = useState('admin');

  const tabs = [
    { id: 'admin', label: 'Admin Dashboard', icon: LayoutDashboard },
    { id: 'learner', label: 'Learner Progress', icon: GraduationCap },
    { id: 'poll', label: 'Live Poll', icon: Radio },
  ];

  const screenshots: Record<string, string> = {
    admin: '/Screenshot/admin.png',
    learner: '/Screenshot/user.png',
    poll: '/Screenshot/Poll.png',
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Platform</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See how Trainova adapts to different roles and scenarios in real-time.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-800 p-1 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screen Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-indigo-500/10 rounded-2xl blur-2xl pointer-events-none" />

          <div className="relative rounded-xl border border-slate-700 bg-slate-800 shadow-2xl overflow-hidden">
            {/* Browser chrome bar */}
            <div className="h-10 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-3 flex-shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 bg-slate-700/60 rounded-md h-5 mx-4 text-slate-400 text-xs flex items-center px-3">
                app.trainova.io/{activeTab === 'admin' ? 'dashboard' : activeTab === 'learner' ? 'dashboard/lms' : 'dashboard/live-poll'}
              </div>
            </div>

            {/* Screenshot area */}
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: '52%' }}>
              <AnimatePresence mode="sync">
                <motion.img
                  key={activeTab}
                  src={screenshots[activeTab]}
                  alt={`${activeTab} screenshot`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-contain bg-white"
                  style={{ objectPosition: 'left top' }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Caption */}
          <div className="text-center mt-6 text-slate-400 text-sm">
            {activeTab === 'admin' && 'Admin dashboard — session overview, analytics & participant management'}
            {activeTab === 'learner' && 'Learner portal — LMS progress, sessions & course content'}
            {activeTab === 'poll' && 'Live poll view — real-time responses & engagement'}
          </div>
        </div>
      </div>
    </section>
  );
}
