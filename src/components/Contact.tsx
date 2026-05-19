import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
const Contact: React.FC = () => {
  return <section id="contact" className="py-24 bg-gradient-sage">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-medium text-foreground/70 tracking-wider uppercase">
                Get In Touch
              </span>
              <div className="h-0.5 w-12 bg-secondary mt-2 mb-6" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Want Local Honey?
              </h2>
              <p className="text-lg text-foreground/80">
                Online ordering is not available yet, but we'd still love to hear
                from you. Reach out with questions about current honey availability,
                local pickup, or upcoming seasonal batches.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <div className="text-foreground/70">Ponce Inlet, Florida</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-foreground/70">beechsidebees@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Local Pickup</div>
                  <div className="text-foreground/70">Available in Ponce Inlet area</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                🐝 Fun Bee Fact
              </h3>
              <p className="text-foreground/80">
                A single honeybee will only produce about 1/12th of a teaspoon of 
                honey in its lifetime. That's why every jar is so precious!
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-background rounded-2xl p-8 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Reach Out Directly
            </h3>
            <p className="text-muted-foreground mb-6">
              For now, the simplest way to ask about honey is by email. Include
              what you are interested in and whether local pickup works for you.
            </p>

            <a
              href="mailto:beechsidebees@gmail.com?subject=Honey%20availability"
              className="inline-flex w-full items-center justify-center rounded-lg bg-secondary px-6 py-4 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              Email Beechside Bees
            </a>

            <div className="mt-6 rounded-xl bg-muted p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Online checkout and customer accounts can be added later when
                you are ready to accept orders through the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
