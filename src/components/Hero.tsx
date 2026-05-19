import React from 'react';
import { Button } from '@/components/ui/button';
import BeeSvg from '@/components/BeeSvg';
import logo from '@/assets/logo.jpg';
import beesImage from '@/assets/bees-honey-1.jpg';
const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="flex justify-center lg:justify-start mb-4">
              <img src={logo} alt="Beechside Bees - Ponce Inlet Honey" className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-soft animate-float" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Pure Organic Honey
              <span className="block text-gradient-honey">From Our Bees to You</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">Hand-bottled with love in Ponce Inlet, Florida. Our 100% organic raw honey is harvested from happy, healthy bees.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl" onClick={scrollToProducts}>
                View Our Honey
              </Button>
              <Button variant="hero-outline" size="xl" onClick={scrollToAbout}>
                Our Story
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-sage rounded-[3rem] rotate-6 opacity-60" />
              <img src={beesImage} alt="Honeybees on golden honeycomb" className="relative w-full h-full object-cover rounded-[2.5rem] shadow-hover" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - bouncing bee */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <BeeSvg className="w-10 h-10" />
      </div>
    </section>;
};
export default Hero;
