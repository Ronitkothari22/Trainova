import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BarChart3 } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    text: 'Built for real training teams and live learning environments',
  },
  {
    icon: BarChart3,
    text: 'Designed to improve engagement and track learning outcomes',
  },
];

const floatVariants = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
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
            A session-driven corporate LMS that combines structured learning with real-time engagement. Run quizzes, live polls, and team activities from a single platform.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBookDemo}
            className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 inline-flex items-center gap-2 group"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {highlights.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: `${i * 0.4}s` }}
              transition={{ delay: i * 0.4 }}
              className="relative rounded-2xl bg-white/70 backdrop-blur-lg border border-white/60 shadow-lg p-6 flex flex-col items-center gap-3 overflow-hidden group hover:shadow-indigo-100 hover:shadow-xl transition-shadow text-center"
            >
              {/* Gradient blob behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center ring-1 ring-indigo-100">
                <Icon className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="relative text-sm md:text-base text-slate-700 font-medium leading-relaxed max-w-sm">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
