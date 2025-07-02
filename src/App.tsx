import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ApprSection from './components/ApprSection';
import OptionsSection from './components/OptionsSection';
import VisionSection from './components/VisionSection';
import DownloadSection from './components/DownloadSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer pour les animations au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('active');
          }, Number(delay) * 1000);
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <ApprSection />
      <OptionsSection />
      <VisionSection />
      <DownloadSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App; 