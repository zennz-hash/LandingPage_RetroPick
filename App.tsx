import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Whitepaper from './components/Whitepaper';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Global Noise/Grain Overlay can go here if desired, keeping it clean for now */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="whitepaper">
            <Whitepaper />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;