import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
  <section id="contact" className="relative pt-32 pb-40 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
            Let's Create Together
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience the artistry of Fervor Bakes? We're here to make your special moments even more memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="p-12 border-0 shadow-elegant bg-gradient-to-br from-card to-secondary/10 rounded-3xl">
            <h3 className="font-heading text-3xl font-bold text-primary mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                    Visit Our Bakery
                  </h4>
                  <p className="font-body text-foreground/70">
                    Pakwach, Uganda<br />
                    Where passion meets pastry
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                    Email Us
                  </h4>
                  <a 
                    href="mailto:fervorbakes@gmail.com" 
                    className="font-body text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    fervorbakes@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                    Telephone
                  </h4>
                  <a
                    href="tel:+256773896703"
                    className="font-body text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    +256 773 896 703
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Custom orders require 48-hour notice. For special occasions and events, 
                please contact us at least one week in advance to ensure availability.
              </p>
            </div>
          </Card>

          <div className="space-y-8">
            <div className="fade-in-up">
              <h3 className="font-heading text-3xl font-bold text-primary mb-6">
                Experience Excellence
              </h3>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
                At Fervor Bakes, we believe every occasion deserves something extraordinary. 
                Whether you're celebrating a milestone or simply treating yourself, 
                our artisanal creations are crafted to create lasting memories.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Button
                  variant="default"
                  size="lg"
                  className="font-body font-medium px-8 py-6 text-lg rounded-xl shadow-elegant hover:shadow-floating transition-all duration-500 w-full text-white"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-lg font-bold text-white">Daily</span>
                    <span className="font-body text-sm text-white">Fresh Baking</span>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="font-body font-medium px-8 py-6 text-lg rounded-xl border-2 border-primary/20 hover:border-primary transition-all duration-500 w-full"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-lg font-bold text-primary">Custom</span>
                    <span className="font-body text-sm text-muted-foreground">Orders Welcome</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer positioned at the bottom of the Contact section (non-sticky) */}
      <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 px-6">
        <div className="max-w-6xl mx-auto">
          <footer className="pt-6 border-t border-border text-center pb-4 bg-transparent">
            {/* Mobile: stacked lines (keep first line no-wrap so "Bakes" stays on same line) */}
            <div className="md:hidden mx-auto text-center">
              <span className="inline-block font-body text-sm text-muted-foreground whitespace-nowrap">@2025 Fervor Bakes</span>
              <span className="block font-body text-sm text-muted-foreground mt-1">All Rights Reserved</span>
            </div>

            {/* Desktop: single-line copyright */}
            <div className="hidden md:block mx-auto text-center">
              <p className="font-body text-sm text-muted-foreground">© 2025 Fervor Bakes. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;