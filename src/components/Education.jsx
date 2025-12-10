import React from 'react';
import { educationList } from '../data/portfolioData';

const EducationCard = ({ edu, index }) => (
  <div 
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    data-aos-delay={index * 150}
    className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 hover:scale-[1.02] hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start gap-4 mb-6">
        <span className="text-white/60 text-xs font-mono font-bold tracking-widest uppercase">
          {edu.duration}
        </span>
        <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15 shrink-0">
          Education
        </span>
      </div>
      <h3 className="text-white text-xl sm:text-2xl font-black mb-1 tracking-tight">
        {edu.degree}
      </h3>
      <div className="flex justify-between items-center mb-6">
        <p className="text-red-200 text-xs sm:text-sm font-black tracking-wide uppercase">
          {edu.institution}
        </p>
        <span className="text-white/80 text-sm font-bold bg-white/5 px-2 py-1 rounded">
          {edu.score}
        </span>
      </div>

      {/* Highlights */}
      {edu.highlights && edu.highlights.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Key Highlights:</h4>
          <ul className="text-white/90 text-sm font-medium space-y-1 pl-4 list-disc">
            {edu.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

    {/* Technologies / Skills */}
    {/* {edu.tech && edu.tech.length > 0 && (
      // <div className="pt-4 border-t border-white/10">
      //   <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Relevant Skills:</h4>
      //   <div className="flex flex-wrap gap-2">
      //     {edu.tech.map((t) => (
      //       <span 
      //         key={t}
      //         className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-all"
      //       >
      //         {t}
      //       </span>
      //     ))}
      //   </div>
      // </div>
    )} */}
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-black pt-16 md:pt-24 pb-24 md:pb-32 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff2a2a]/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">
            Education
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg font-semibold max-w-lg mx-auto">
            My academic background and qualifications.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {educationList.map((edu, index) => (
            <EducationCard key={edu.institution} edu={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
