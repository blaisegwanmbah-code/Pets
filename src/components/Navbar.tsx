import { useState, useEffect } from 'react';
import { PawPrint, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  const navLinks = [
    { name: 'Available Puppies', href: '#available' },
    { name: 'Our Story', href: '#about' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-art-border' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-doodle-pink rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight uppercase text-slate-800 font-sans">MiniGooDoodle</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-doodle-pink transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#apply" 
              className="bg-doodle-pink text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-xl hover:brightness-105 transition-all shadow-lg shadow-pink-100"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold px-2 py-1"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#apply" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-doodle-pink text-white px-6 py-3 rounded-2xl font-bold text-center"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
