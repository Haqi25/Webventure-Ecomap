import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedUMKM from "./components/FeaturedUMKM";
import SustainabilitySection from "./components/SustainabilitySection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturedUMKM />
        <SustainabilitySection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;