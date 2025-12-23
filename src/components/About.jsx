import React from 'react';
import stackImage from '../assets/about/dhanush_profile.jpeg';
import { aboutContent } from '../data/portfolioData';
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M64 12c-27 0-32 12-32 12l0 13 32 0 0 4.5-43.5 0c0 0-14 3-14 32.5s12.5 35 12.5 35l14.5 0 0-16.5s0-13 13.5-13l24 0s14.5 0 14.5-14.5l0-29.5s2-13.5-16.5-13.5l-5 0z" />
      <path fill="#FFD43B" d="M64 116c27 0 32-12 32-12l0-13-32 0 0-4.5 43.5 0c0 0 14-3 14-32.5S109 19 109 19L94.5 19l0 16.5s0 13-13.5 13l-24 0s-14.5 0-14.5 14.5l0 29.5s-2 13.5 16.5 13.5l5 0z" />
      <circle fill="#FFFFFF" cx="44" cy="27" r="4.5" />
      <circle fill="#FFFFFF" cx="84" cy="101" r="4.5" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);
const DjangoIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <rect width="128" height="128" rx="20" fill="#092E20"/>
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="60" fontWeight="bold" fontFamily="sans-serif">dj</text>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Django</span>
  </div>
);
const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="4.5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">React</span>
  </div>
);
const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-16 md:pt-20 pb-28 md:pb-40 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start text-center md:text-left">
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-8 md:mt-0">
          <div data-aos="flip-left" data-aos-duration="1000" className="relative flex justify-center w-full group">
            <div className="absolute -inset-2 bg-gradient-to-r from-black via-gray-800 to-black rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl w-full max-w-[260px] sm:max-w-[280px] rounded-[2rem] p-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl relative bg-black/10">
                <img 
                  src={stackImage} 
                  alt="Pasham Dhanush Reddy — Software Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-4 md:mt-0 relative z-20 flex flex-col items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 text-center md:text-left">{aboutContent.heading}</h2>
          <p 
            className="text-base sm:text-lg font-bold mb-8 md:mb-12 leading-relaxed max-w-3xl text-red-50 text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
          <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-10 mt-6 md:mt-8 flex-wrap">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DjangoIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};
export default About;
