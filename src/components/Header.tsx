import React from 'react';
import logo from '@/assets/logo.jpg';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 md:px-8 py-3">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="" 
              aria-hidden="true"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <div className="font-display text-lg font-semibold text-foreground leading-tight">
                Beechside Bees
              </div>
              <p className="text-xs text-muted-foreground">Ponce Inlet Honey</p>
            </div>
          </div>
          
          <ul className="flex items-center gap-6">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                Our Story
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('products')}
                className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                Honey
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="rounded-md text-sm font-medium text-secondary transition-colors hover:text-secondary/80 focus-visible:text-secondary"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
