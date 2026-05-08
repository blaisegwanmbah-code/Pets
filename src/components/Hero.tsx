import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-art-bg">
      {/* Decorative flair */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-100/30 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-12 relative z-10 text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="mb-6">
              <span className="text-doodle-pink text-[10px] font-bold tracking-[0.3em] uppercase bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100">
                Las Vegas Premier Breeder
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl leading-[0.9] font-light mb-10 text-slate-900 italic">
              Elite Family <br /> <span className="font-bold not-italic">Companions.</span>
            </h1>
            <p className="max-w-md text-xl text-slate-600 mb-12 leading-relaxed mx-auto lg:mx-0">
              Specializing in hypoallergenic F1B Mini Goldendoodles and Poodles. Raised underfoot with love, science, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                className="px-12 py-5 bg-doodle-pink text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-xl shadow-pink-100 transition-all hover:scale-105 active:scale-95"
              >
                View Available Puppies
              </button>
              <button 
                className="px-12 py-5 bg-white border border-slate-200 text-slate-600 font-bold rounded-full text-xs uppercase tracking-widest transition-all hover:bg-slate-50"
              >
                The Application
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-20 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-100/50 rounded-[64px] blur-2xl -z-10" />
              <div 
                className="w-full h-[450px] lg:h-[600px] rounded-[60px] bg-cover bg-center shadow-2xl relative overflow-hidden" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=80&w=800')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-12 -left-12 bg-white p-8 rounded-[32px] shadow-2xl border border-pink-50 w-52 hidden md:block"
            >
              <div className="text-doodle-pink text-4xl font-bold mb-1 tracking-tighter italic font-serif">100%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Hypoallergenic</div>
              <div className="h-1 w-12 bg-doodle-pink mt-6 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const PawPrint = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12,2C10.9,2 10,2.9 10,4C10,5.1 10.9,6 12,6C13.1,6 14,5.1 14,4C14,2.9 13.1,2 12,2M7,7C5.9,7 5,7.9 5,9C5,10.1 5.9,11 7,11C8.1,11 9,10.1 9,9C9,7.9 8.1,7 7,7M17,7C15.9,7 15,7.9 15,9C15,10.1 15.9,11 17,11C18.1,11 19,10.1 19,9C19,7.9 18.1,7 17,7M12,13C9.2,13 7,15.2 7,18C7,20.8 9.2,23 12,23C14.8,23 17,20.8 17,18C17,15.2 14.8,13 12,13Z"/>
  </svg>
);
