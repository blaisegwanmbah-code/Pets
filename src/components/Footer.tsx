import { Facebook, MessageCircle, MapPin, Phone, PawPrint } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-doodle-pink/5 rounded-full blur-[100px] -z-0 translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-16 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <PawPrint className="w-6 h-6 text-doodle-pink" />
              <span className="text-2xl font-bold font-display">MiniGooDoodle</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed mb-6">
              Ethical, family-focused breeding in the heart of Las Vegas. Dedicated to raising healthy, socialized, and beautiful doodle companions.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/message/YY3JCXDEOTTIC1" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583731773601" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-100 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-doodle-pink shrink-0" />
                <span className="text-sm">3508 Unique Way,<br/>Las Vegas, NV 89129</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-doodle-pink shrink-0" />
                <span className="text-sm">(803) 658-2147</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-100 uppercase tracking-widest text-xs">Quick Access</h4>
            <div className="flex flex-col space-y-4">
              <a href="#available" className="text-slate-400 hover:text-doodle-pink transition-colors text-sm font-medium">Available Puppies</a>
              <a href="#about" className="text-slate-400 hover:text-doodle-pink transition-colors text-sm font-medium">Our Story</a>
              <a href="#apply" className="text-slate-400 hover:text-doodle-pink transition-colors text-sm font-medium">Adoption Process</a>
              <a href="#" className="text-slate-400 hover:text-doodle-pink transition-colors text-sm font-medium">Terms & Guarantee</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {currentYear} MiniGooDoodle. All puppies are vet-checked and loved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Safety First</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
