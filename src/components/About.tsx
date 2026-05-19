import React from 'react';
import beesImage from '@/assets/bees-honey-2.jpg';
const About: React.FC = () => {
  return <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-honey rounded-[2rem] -rotate-3 opacity-30" />
            <img src={beesImage} alt="A honeybee collecting nectar" className="relative w-full aspect-[4/3] object-cover rounded-[1.5rem] shadow-soft" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium text-secondary tracking-wider uppercase">
                Our Story
              </span>
              <div className="h-0.5 w-12 bg-gradient-honey mt-2" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              A Family Tradition of 
              <span className="text-gradient-honey"> Pure Goodness</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>Nestled in beautiful Ponce Inlet, Florida, Beechside Bees began with a simple passion for nature and a deep respect for the incredible honeybee.


My daughter got me my first hive as a birthday present in 2023, and after that I was hooked on bees.  </p>
              <p>Since then, we've been dedicated to producing delicious raw, unfiltered honey, the way nature intended. Our bees forage nectar from local Ponce Inlet plants, like Black Mangrove and Brazilian Pepper, creating a unique flavor in every jar.</p>
              <p>We believe in sustainable beekeeping practices that prioritize the health of our hives and the environment. When you choose Beechside Bees, you're supporting local pollinators and enjoying pure Florida honey. </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Pure & Raw</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-secondary">Local</div>
                <div className="text-sm text-muted-foreground">Ponce Inlet, FL</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-secondary">Est. 2023</div>
                <div className="text-sm text-muted-foreground">Family Owned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
