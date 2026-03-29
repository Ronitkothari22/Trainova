import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Sparkles, Users, Puzzle, HeadphonesIcon, CreditCard, Check, ArrowRight } from 'lucide-react';

const features = [
  { icon: Users, text: 'Unlimited learners & sessions' },
  { icon: Puzzle, text: 'Custom integrations & SSO' },
  { icon: HeadphonesIcon, text: 'Dedicated success manager' },
  { icon: CreditCard, text: 'Flexible, usage-based billing' },
  { icon: Check, text: 'API access & white-labelling' },
  { icon: Check, text: 'On-boarding & training support' },
];

interface PricingProps {
  onContactPricing: () => void;
}

export default function Pricing({ onContactPricing }: PricingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Section blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] rounded-full bg-indigo-100/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[30%] h-[50%] rounded-full bg-violet-100/40 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-4 border border-indigo-100">
            <Sparkles className="w-3.5 h-3.5" />
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pricing That Fits You</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            We don't do one-size-fits-all. Share your requirements and we'll craft a plan around your organisation's needs.
          </p>
        </motion.div>

        {/* Single animated card */}
        <div ref={ref} className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 60, rotateX: 8 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700" />

            {/* Animated shimmer sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
              initial={{ x: '-120%' }}
              animate={inView ? { x: '220%' } : {}}
              transition={{ duration: 1.1, delay: 0.5, ease: 'easeInOut' }}
            />

            {/* Decorative circles */}
            <motion.div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10"
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5"
              animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Floating sparkle dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
                style={{
                  top: `${15 + i * 13}%`,
                  right: `${8 + (i % 3) * 6}%`,
                }}
                animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
              />
            ))}

            <div className="relative p-10 md:p-14">
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-6"
              >
                <Sparkles className="w-3 h-3" /> Custom Plan
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.62 }}
                className="text-3xl md:text-4xl font-extrabold text-white mb-3"
              >
                Let's Build Your Plan
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-indigo-200 text-base mb-10 max-w-md"
              >
                Get in touch and we'll tailor pricing based on your team size, feature needs, and growth goals — no hidden fees.
              </motion.p>

              {/* Features grid */}
              <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.75 } },
                  hidden: {},
                }}
                className="grid sm:grid-cols-2 gap-4 mb-10"
              >
                {features.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(255,255,255,0.25)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onContactPricing}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-base shadow-xl hover:bg-slate-50 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact Us for Pricing
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
