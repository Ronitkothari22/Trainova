import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDays, BookOpen, CheckSquare, BarChart3, 
  UploadCloud, Users, MessageSquare, PieChart 
} from 'lucide-react';

const features = [
  {
    icon: CalendarDays,
    title: "Session Management",
    description: "Create, schedule, and manage training sessions. Invite users via email or secure joining codes."
  },
  {
    icon: BookOpen,
    title: "LMS Learning Paths",
    description: "Structure content by topics and levels. Track progression and set required completion thresholds."
  },
  {
    icon: CheckSquare,
    title: "Quizzes & Assessments",
    description: "Build timed quizzes with custom scoring rules, passing criteria, and detailed performance reviews."
  },
  {
    icon: BarChart3,
    title: "Live Polls",
    description: "Engage participants in real-time with live polling, instant results, and dynamic question control."
  },
  {
    icon: UploadCloud,
    title: "Assignments & Submissions",
    description: "Set deadlines, manage multi-file submissions, and track late or missing work effortlessly."
  },
  {
    icon: Users,
    title: "Teams & Leaderboards",
    description: "Group learners, award points, and foster healthy competition with team and individual leaderboards."
  },
  {
    icon: MessageSquare,
    title: "Feedback & Surveys",
    description: "Collect anonymous or identified feedback using flexible forms and smiley-scale ratings."
  },
  {
    icon: PieChart,
    title: "Analytics Dashboard",
    description: "Get a bird's-eye view of platform engagement, session progress, and learner performance."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Platform Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to run impactful training</h3>
          <p className="text-lg text-slate-600">
            Trainova unifies content delivery, learner participation, and assessment into one seamless ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <feature.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
