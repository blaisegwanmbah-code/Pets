/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PuppyGrid from './components/PuppyGrid';
import About from './components/About';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-doodle-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PuppyGrid />
        <About />
        
        {/* Process Section - Brief Overview */}
        <section id="process" className="py-24 bg-white border-y border-art-border">
          <div className="max-w-7xl mx-auto px-12">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold text-doodle-pink uppercase tracking-[0.4em] mb-4 block">The Process</span>
              <h2 className="text-5xl font-bold mb-4 text-slate-900 leading-tight italic">Our Adoption <span className="not-italic">Journey</span></h2>
              <div className="h-1 w-16 bg-pink-100 mx-auto rounded-full mt-6" />
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Apply", desc: "Tell us about your home and lifestyle through our detailed application." },
                { step: "02", title: "Interview", desc: "A brief chat to ensure the perfect match for you and the puppy." },
                { step: "03", title: "Deposit", desc: "Reserve your chosen puppy with a secure holding deposit." },
                { step: "04", title: "Pickup", desc: "Meet your puppy in Las Vegas or arrange specialized delivery." }
              ].map((item, i) => (
                <div key={i} className="bg-art-bg p-10 rounded-[48px] border border-art-border hover:shadow-2xl transition-all duration-500 group">
                  <span className="text-4xl font-bold text-doodle-pink/30 block mb-6 font-serif italic group-hover:text-doodle-pink transition-colors">{item.step}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}
