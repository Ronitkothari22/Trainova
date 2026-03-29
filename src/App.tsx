import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DemoShowcase from './components/DemoShowcase';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'demo' | 'pricing'>('demo');

  const openModal = (mode: 'demo' | 'pricing') => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      {/* Animated global background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <div className="relative z-10">
        <Navbar onBookDemo={() => openModal('demo')} />
        <main>
          <Hero onBookDemo={() => openModal('demo')} />
          <SocialProof />
          <Features />
          <HowItWorks />
          <DemoShowcase />
          <UseCases />
          <Pricing onContactPricing={() => openModal('pricing')} />
          <FAQ />
        </main>
        <Footer />
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
      />
    </div>
  );
}

export default App;
