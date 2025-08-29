import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-background to-muted/30">
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
                    href="mailto:hello@fervorbakes.com" 
                    className="font-body text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    hello@fervorbakes.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                    WhatsApp
                  </h4>
                  <a 
                    href="https://wa.me/256700000000" 
                    className="font-body text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    +256 700 000 000
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
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-card/50 rounded-2xl">
                  <h4 className="font-heading text-2xl font-bold text-primary mb-2">Daily</h4>
                  <p className="font-body text-sm text-muted-foreground">Fresh Baking</p>
                </div>
                <div className="text-center p-6 bg-card/50 rounded-2xl">
                  <h4 className="font-heading text-2xl font-bold text-primary mb-2">Custom</h4>
                  <p className="font-body text-sm text-muted-foreground">Orders Welcome</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="flex-1 font-body font-medium px-6 py-4 rounded-xl shadow-elegant hover:shadow-floating transition-all duration-500"
                  onClick={() => window.open('mailto:hello@fervorbakes.com', '_blank')}
                >
                  Email Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 font-body font-medium px-6 py-4 rounded-xl border-2 border-primary/20 hover:border-primary transition-all duration-500"
                  onClick={() => window.open('https://wa.me/256700000000', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;