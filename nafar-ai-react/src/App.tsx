import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import OptionsSection from './components/OptionsSection';
import ApprSection from './components/ApprSection';
import VisionSection from './components/VisionSection';
import DownloadSection from './components/DownloadSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all elements with 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-nunito">
      <Header />
      <main>
        <Banner />
        <OptionsSection />
        <ApprSection />
        <VisionSection />
        <DownloadSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
