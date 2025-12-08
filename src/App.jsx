import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
      offset: 50, // trigger animations earlier
    });

    // Refresh AOS after preloader completes to recalculate positions
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 2500);

    // Disable automatic browser scroll restoration on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Clear hash fragment from URL on reload (e.g. #contact -> clean base URL)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Force scroll to top of base page instantly on load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <ContentCreator />
      <Internships />
      <Leadership />
      <Certificates />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
