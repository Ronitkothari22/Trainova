import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
const contactApiBase = (import.meta.env.VITE_CONTACT_API_URL ?? '').replace(/\/$/, '');

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode?: 'demo' | 'pricing';
}

export default function ContactModal({ isOpen, onClose, mode = 'demo' }: ContactModalProps) {
    const [form, setForm] = useState({ name: '', email: '', query: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const overlayRef = useRef<HTMLDivElement>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            // Reset state when closed
            setTimeout(() => {
                setForm({ name: '', email: '', query: '' });
                setStatus('idle');
            }, 300);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch(`${contactApiBase}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    query: form.query,
                    mode,
                }),
            });
            const data = (await res.json().catch(() => ({}))) as { error?: string };
            if (!res.ok) {
                console.error('Contact API:', data.error ?? res.statusText);
                setStatus('error');
                return;
            }
            setStatus('success');
        } catch (err) {
            console.error('Contact request failed:', err);
            setStatus('error');
        }
    };

    const heading = mode === 'demo' ? 'Book a Demo' : 'Get Custom Pricing';
    const subtext = mode === 'demo'
        ? "Tell us about your team and we'll set up a personalised demo."
        : "Share your requirements and we'll craft a plan that fits.";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={overlayRef}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
                >
                    {/* Blurred backdrop */}
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

                    {/* Modal panel */}
                    <motion.div
                        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 24 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                    >
                        {/* Decorative gradient top strip */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

                        {/* Floating blobs inside modal */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-100/60 blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-violet-100/60 blur-2xl pointer-events-none" />

                        <div className="relative p-8">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {status === 'success' ? (
                                <motion.div
                                    className="flex flex-col items-center text-center py-8 gap-4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                                    <p className="text-slate-500 text-sm">We'll get back to you within 24 hours.</p>
                                    <button
                                        onClick={onClose}
                                        className="mt-2 px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-1">{heading}</h2>
                                        <p className="text-sm text-slate-500">{subtext}</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Jane Smith"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-all"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                Work Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="jane@company.com"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-all"
                                            />
                                        </div>

                                        {/* Query */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                Your Query
                                            </label>
                                            <textarea
                                                name="query"
                                                value={form.query}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                placeholder="Tell us about your team size, training goals, or any questions..."
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-all resize-none"
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3">
                                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                Something went wrong. Please try again or email us directly.
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:from-indigo-700 hover:to-violet-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === 'sending' ? (
                                                <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                                            ) : (
                                                <><Send className="w-4 h-4" /> Send Message</>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
