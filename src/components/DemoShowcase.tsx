import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, GraduationCap, Radio } from 'lucide-react';

export default function DemoShowcase() {
  const [activeTab, setActiveTab] = useState('admin');

  const tabs = [
    { id: 'admin', label: 'Admin Dashboard', icon: LayoutDashboard },
    { id: 'learner', label: 'Learner Progress', icon: GraduationCap },
    { id: 'poll', label: 'Live Poll', icon: Radio },
  ];

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
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
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
          <div className="rounded-xl border border-slate-700 bg-slate-800 shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[16/9] relative">
            {/* Header */}
            <div className="h-10 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-600" />
              <div className="w-3 h-3 rounded-full bg-slate-600" />
              <div className="w-3 h-3 rounded-full bg-slate-600" />
            </div>
            
            {/* Content Area */}
            <div className="p-6 h-full relative overflow-hidden bg-slate-50 text-slate-900">
              <AnimatePresence mode="wait">
                {activeTab === 'admin' && (
                  <motion.div
                    key="admin"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col gap-6"
                  >
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold">Session Overview</h3>
                        <p className="text-slate-500">Q3 Leadership Training</p>
                      </div>
                      <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-medium">Live Session</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                        <div className="text-slate-500 text-sm mb-1">Total Participants</div>
                        <div className="text-3xl font-bold">124</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                        <div className="text-slate-500 text-sm mb-1">Avg. Completion</div>
                        <div className="text-3xl font-bold text-emerald-600">78%</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                        <div className="text-slate-500 text-sm mb-1">Active Polls</div>
                        <div className="text-3xl font-bold text-amber-500">2</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <h4 className="font-semibold mb-4">Recent Activity</h4>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center px-4 gap-4">
                            <div className="w-8 h-8 rounded-full bg-indigo-100" />
                            <div className="flex-1">
                              <div className="h-3 w-1/3 bg-slate-300 rounded mb-1" />
                              <div className="h-2 w-1/4 bg-slate-200 rounded" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'learner' && (
                  <motion.div
                    key="learner"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex gap-6"
                  >
                    <div className="w-1/3 bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col gap-4">
                      <h3 className="font-bold text-lg">Your Path</h3>
                      <div className="space-y-2">
                        <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">✓</div>
                          <span className="font-medium text-indigo-900 text-sm">Module 1: Intro</span>
                        </div>
                        <div className="p-3 bg-white border border-indigo-600 rounded-lg flex items-center gap-3 shadow-sm">
                          <div className="w-6 h-6 rounded-full border-2 border-indigo-600 text-indigo-600 flex items-center justify-center text-xs">2</div>
                          <span className="font-bold text-slate-900 text-sm">Module 2: Deep Dive</span>
                        </div>
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3 opacity-50">
                          <div className="w-6 h-6 rounded-full border-2 border-slate-400 text-slate-400 flex items-center justify-center text-xs">3</div>
                          <span className="font-medium text-slate-600 text-sm">Quiz Assessment</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Module 2 Video Lesson</h2>
                      <p className="text-slate-500 mb-6">Watch the 15-minute presentation to unlock the next quiz.</p>
                      <div className="w-full max-w-md aspect-video bg-slate-900 rounded-xl flex items-center justify-center relative group cursor-pointer">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'poll' && (
                  <motion.div
                    key="poll"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex items-center justify-center bg-indigo-50/50"
                  >
                    <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                      <div className="flex items-center gap-2 text-rose-500 font-semibold text-sm mb-6 animate-pulse">
                        <div className="w-2 h-2 bg-rose-500 rounded-full" />
                        LIVE POLL
                      </div>
                      <h2 className="text-2xl font-bold mb-8">What is the biggest challenge in your current role?</h2>
                      <div className="space-y-4">
                        {[
                          { label: 'Time Management', percent: 45 },
                          { label: 'Resource Allocation', percent: 25 },
                          { label: 'Team Communication', percent: 30 }
                        ].map((option, i) => (
                          <div key={i} className="relative h-14 rounded-xl border border-slate-200 overflow-hidden flex items-center px-4 cursor-pointer hover:border-indigo-400 transition-colors">
                            <div 
                              className="absolute left-0 top-0 bottom-0 bg-indigo-50 -z-10 transition-all duration-1000"
                              style={{ width: `${option.percent}%` }}
                            />
                            <span className="font-medium z-10">{option.label}</span>
                            <span className="ml-auto font-bold text-indigo-600 z-10">{option.percent}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
