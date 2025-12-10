import React from 'react';

const FloatingBadge = () => {
  return (
    <a 
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-black/50 backdrop-blur-md border border-green-500/30 px-4 py-3 rounded-full hover:bg-black/80 hover:border-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:-translate-y-1"
      aria-label="Open to Work - Contact me"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-white text-xs sm:text-sm font-bold tracking-wide uppercase pr-1">
        Open to Work
      </span>
    </a>
  );
};

export default FloatingBadge;
