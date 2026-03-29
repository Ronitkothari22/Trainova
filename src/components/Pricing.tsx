import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small teams and independent facilitators.",
    features: ["Up to 50 active learners", "Basic LMS paths", "Standard quizzes", "Email support"],
    highlighted: false
  },
  {
    name: "Professional",
    price: "$299",
    description: "Ideal for growing L&D departments and regular workshops.",
    features: ["Up to 250 active learners", "Live polling & teams", "Advanced analytics", "Priority support"],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations needing custom integrations.",
    features: ["Unlimited learners", "SSO & Custom domains", "Dedicated success manager", "API access"],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your training volume. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-indigo-600 text-white shadow-xl scale-105 transform' 
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-indigo-100' : 'text-slate-500'}`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.price !== "Custom" && <span className={`text-sm ${plan.highlighted ? 'text-indigo-200' : 'text-slate-500'}`}>/mo</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.highlighted ? 'text-indigo-300' : 'text-indigo-600'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted 
                    ? 'bg-white text-indigo-600 hover:bg-slate-50' 
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
