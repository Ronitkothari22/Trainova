import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/Logo/logo.png"
              alt="Trainova"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How it Works</a>
            <a href="#demo" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Demo</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Log in</button>
            <button className="text-sm font-medium bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md">
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">Features</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">How it Works</a>
          <a href="#demo" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">Demo</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">Pricing</a>
          <hr className="border-slate-100" />
          <button className="text-base font-medium text-slate-600 text-left">Log in</button>
          <button className="text-base font-medium bg-indigo-600 text-white px-5 py-3 rounded-lg text-center">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
}
