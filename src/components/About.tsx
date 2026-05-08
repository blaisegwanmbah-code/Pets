import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function About() {
  const points = [
    "Socialized with children and other household pets from day one.",
    "Initial crate and potty training started before leaving.",
    "Comprehensive genetic health guarantee for peace of mind.",
    "Veterinary-approved breeding parents and health checks."
  ];

  return (
    <section id="about" className="py-24 bg-art-bg overflow-hidden border-y border-art-border">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[60px] shadow-2xl relative z-10" 
              alt="About Us" 
              referrerPolicy="no-referrer"
            />
            {/* Background decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100/50 rounded-full blur-3xl -z-1" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-doodle-pink text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Our Story</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[0.95] italic">
              Raised Underfoot,<br /> <span className="not-italic font-bold">Never in a Kennel.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-sans">
              At MiniGooDoodle, our dogs aren't just breeding stock—they are cherished members of our household. 
              We specialize in the F1B generation, which produces that iconic "Teddy Bear" look and 100% hypoallergenic coats. 
            </p>
            
            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 w-6 h-6 bg-pink-50 text-doodle-pink rounded-full flex items-center justify-center shrink-0 group-hover:bg-pink-100 transition-colors border border-pink-100">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="font-bold text-slate-700 tracking-tight">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-art-border grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-doodle-pink italic font-serif">10+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-doodle-pink italic font-serif">100%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Love Guaranteed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
