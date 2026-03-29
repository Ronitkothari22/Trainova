import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, BarChart, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/50 blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-violet-200/50 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 border border-indigo-100">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            The New Standard for Corporate Learning
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Train Teams with Structure. <br className="hidden md:block" />
            <span className="text-gradient">Engage with Impact.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A session-driven corporate LMS that blends structured learning with real-time engagement. Run quizzes, live polls, and team activities from a single platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-semibold text-lg hover:bg-slate-50 transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2">
              <Play className="w-5 h-5 text-indigo-600" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="h-12 bg-slate-100/80 border-b border-slate-200/60 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="mx-auto bg-white px-4 py-1 rounded-md text-xs text-slate-400 font-medium border border-slate-200 shadow-sm flex items-center gap-2">
                app.trainova.com
              </div>
            </div>
            {/* App UI Mockup */}
            <div className="p-6 bg-slate-50 flex gap-6 text-left h-[400px] md:h-[500px]">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-48 gap-4 border-r border-slate-200 pr-6">
                <div className="h-8 w-24 bg-indigo-100 rounded mb-4" />
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-4 rounded w-full ${i === 1 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                ))}
              </div>
              {/* Main Content */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="h-6 w-48 bg-slate-800 rounded mb-2" />
                    <div className="h-4 w-32 bg-slate-400 rounded" />
                  </div>
                  <div className="h-10 w-32 bg-indigo-600 rounded-lg" />
                </div>
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[Users, BarChart, CheckCircle2].map((Icon, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="h-3 w-12 bg-slate-300 rounded mb-2" />
                        <div className="h-5 w-16 bg-slate-800 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Content Area */}
                <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                  <div className="h-5 w-40 bg-slate-800 rounded mb-6" />
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-slate-50 bg-slate-50/50">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-slate-200" />
                          <div className="h-4 w-32 bg-slate-600 rounded" />
                        </div>
                        <div className="h-6 w-20 bg-emerald-100 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
