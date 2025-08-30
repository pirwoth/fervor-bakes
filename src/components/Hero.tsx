import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-background/0 md:bg-background/10"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="fade-in-up">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Fervor</span> Bakes
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Savor freshness daily
          </p>
          
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Located in Pakwach, where artistry meets flavor
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="font-body font-medium px-8 py-6 text-lg rounded-xl shadow-elegant hover:shadow-floating transition-all duration-500"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Creations
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-body font-medium px-8 py-6 text-lg rounded-xl border-2 border-primary/20 hover:border-primary transition-all duration-500"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;