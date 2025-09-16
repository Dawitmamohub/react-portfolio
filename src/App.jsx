import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="fade-in">
          <Hero />
        </section>
        <section className="fade-in">
          <Skills />
        </section>
        <section className="fade-in">
          <Projects />
        </section>
        <section className="fade-in">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
