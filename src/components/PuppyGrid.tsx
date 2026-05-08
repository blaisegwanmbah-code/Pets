import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

interface Puppy {
  id: string;
  name: string;
  color: string;
  breed: string;
  gender: 'Male' | 'Female';
  born: string;
  status: 'Available' | 'Reserved';
  image: string;
}

const puppies: Puppy[] = [
  {
    id: '1',
    name: 'Teddy',
    color: 'Red F1B',
    breed: 'Mini Goldendoodle',
    gender: 'Male',
    born: 'April 12, 2026',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '2',
    name: 'Bella',
    color: 'Apricot',
    breed: 'Toy Poodle',
    gender: 'Female',
    born: 'March 28, 2026',
    status: 'Reserved',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '3',
    name: 'Luna',
    color: 'Cream',
    breed: 'Mini Goldendoodle',
    gender: 'Female',
    born: 'April 12, 2026',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=500'
  }
];

export default function PuppyGrid() {
  return (
    <section id="available" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] font-bold text-doodle-pink uppercase tracking-[0.4em] mb-4 block">New Litter Available</span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">The Miller Batch</h2>
          <div className="h-1.5 w-16 bg-doodle-pink/20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {puppies.map((puppy, idx) => (
            <motion.div
              key={puppy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group bg-[#FEF9F8] rounded-[50px] overflow-hidden border border-art-border transition-all duration-700 ${
                puppy.status === 'Available' ? 'hover:shadow-3xl hover:-translate-y-3' : 'opacity-70 grayscale-[0.3]'
              }`}
            >
              <div className="h-80 overflow-hidden relative m-4 rounded-[40px]">
                <img 
                  src={puppy.image} 
                  alt={puppy.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
                />
                <div className="absolute top-6 left-6">
                  <span className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-white shadow-xl ${
                    puppy.status === 'Available' ? 'bg-doodle-pink' : 'bg-slate-400'
                  }`}>
                    {puppy.status}
                  </span>
                </div>
              </div>
              
              <div className="p-10 text-left">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-3xl font-bold text-slate-800 italic group-hover:text-doodle-pink transition-colors">"{puppy.name}"</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{puppy.color}</span>
                </div>
                <p className="text-slate-500 mb-8 font-medium text-sm tracking-wide lowercase">
                  {puppy.breed} — {puppy.gender}
                </p>
                
                <div className="flex justify-between items-center border-t border-art-border mt-6 pt-8">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-doodle-pink/40" />
                    <span>{puppy.born}</span>
                  </div>
                  {puppy.status === 'Available' ? (
                    <a 
                      href="https://wa.me/message/YY3JCXDEOTTIC1" 
                      target="_blank"
                      rel="noreferrer"
                      className="text-doodle-pink text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2 group/link"
                    >
                      Inquire
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <div className="h-2 w-12 bg-slate-200 rounded-full" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
