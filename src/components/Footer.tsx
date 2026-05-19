import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
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
            <div className="mb-3 flex justify-center gap-3 md:justify-end">
              <a
                href="https://www.instagram.com/beechsidebees/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Beechside Bees on Instagram"
                className="rounded-full p-2 text-background/70 transition-colors hover:text-background focus-visible:text-background"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/p/Beechside-Bees-Honey-Company-61571249211002/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Beechside Bees on Facebook"
                className="rounded-full p-2 text-background/70 transition-colors hover:text-background focus-visible:text-background"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
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
