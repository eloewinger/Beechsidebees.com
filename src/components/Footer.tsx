import React from 'react';
import logo from '@/assets/logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Beechside Bees" 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-display text-xl font-semibold">Beechside Bees</h3>
              <p className="text-background/70 text-sm">Halifax River Honey • Est. 2023</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-background/70 text-sm mb-2">
              100% Pure Organic Honey from Ponce Inlet, Florida
            </p>
            <p className="text-background/50 text-xs">
              © {new Date().getFullYear()} Beechside Bees. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
