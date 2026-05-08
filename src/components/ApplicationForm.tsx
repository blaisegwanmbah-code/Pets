import { motion } from 'motion/react';

export default function ApplicationForm() {
  return (
    <section id="apply" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-art-bg rounded-[60px] p-8 md:p-16 shadow-inner relative overflow-hidden ring-1 ring-art-border"
        >
          {/* Subtle background flair */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <svg viewBox="0 0 24 24" className="w-32 h-32 text-doodle-pink" fill="currentColor">
              <path d="M12,2C10.9,2 10,2.9 10,4C10,5.1 10.9,6 12,6C13.1,6 14,5.1 14,4C14,2.9 13.1,2 12,2M7,7C5.9,7 5,7.9 5,9C5,10.1 5.9,11 7,11C8.1,11 9,10.1 9,9C9,7.9 8.1,7 7,7M17,7C15.9,7 15,7.9 15,9C15,10.1 15.9,11 17,11C18.1,11 19,10.1 19,9C19,7.9 18.1,7 17,7M12,13C9.2,13 7,15.2 7,18C7,20.8 9.2,23 12,23C14.8,23 17,20.8 17,18C17,15.2 14.8,13 12,13Z"/>
            </svg>
          </div>

          <div className="text-center mb-16 relative z-10">
            <span className="text-[10px] font-bold text-doodle-pink uppercase tracking-[0.4em] mb-4 block">Application</span>
            <h2 className="text-5xl font-bold mb-4 text-slate-900 italic">Finding the <span className="not-italic">Perfect Match</span></h2>
            <div className="h-1 w-12 bg-doodle-pink/10 mx-auto rounded-full mt-6" />
          </div>

          <form action="https://formspree.io/f/mrejlodr" method="POST" className="space-y-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Jane Doe"
                  required 
                  className="w-full px-8 py-5 rounded-3xl border-none ring-1 ring-slate-200 focus:ring-4 focus:ring-doodle-pink/10 focus:outline-none transition bg-white text-slate-700" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="(702) 000-0000"
                  required 
                  className="w-full px-8 py-5 rounded-3xl border-none ring-1 ring-slate-200 focus:ring-4 focus:ring-doodle-pink/10 focus:outline-none transition bg-white text-slate-700" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Preferred Breed</label>
                <select name="breed" className="w-full px-8 py-5 rounded-3xl border-none ring-1 ring-slate-200 focus:ring-4 focus:ring-doodle-pink/10 focus:outline-none transition bg-white appearance-none cursor-pointer text-slate-700">
                  <option>Mini Goldendoodle</option>
                  <option>Toy/Mini Poodle</option>
                  <option>I'm open to either!</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Housing Type</label>
                <select name="home" className="w-full px-8 py-5 rounded-3xl border-none ring-1 ring-slate-200 focus:ring-4 focus:ring-doodle-pink/10 focus:outline-none transition bg-white appearance-none cursor-pointer text-slate-700">
                  <option>House with Yard</option>
                  <option>Apartment / Condo</option>
                  <option>Townhome</option>
                  <option>Farm / Ranch</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Household Lifestyle</label>
              <textarea 
                name="lifestyle" 
                rows={4} 
                placeholder="Work hours, children, other pets..." 
                className="w-full px-8 py-5 rounded-3xl border-none ring-1 ring-slate-200 focus:ring-4 focus:ring-doodle-pink/10 focus:outline-none transition bg-white text-slate-700"
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit" 
              className="w-full bg-doodle-pink text-white py-6 rounded-3xl text-sm font-bold uppercase tracking-[0.2em] hover:shadow-2xl transition-all shadow-xl shadow-pink-100 active:brightness-95"
            >
              Submit Application
            </motion.button>
            <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              Standard response time: 48 hours
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
