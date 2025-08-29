import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Kampala",
    text: "Absolutely exceptional pastries. The attention to detail and quality is unmatched in the region.",
    rating: 5
  },
  {
    id: 2,
    name: "David Ochieng",
    location: "Pakwach",
    text: "Fervor Bakes has elevated the standard of artisanal pastries. Every visit is a delightful experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    location: "Gulu",
    text: "The chocolate cake was the centerpiece of our celebration. Beautifully crafted and absolutely delicious.",
    rating: 5
  },
  {
    id: 4,
    name: "James Okello",
    location: "Arua",
    text: "Joan's creativity and skill shine through in every creation. Truly a master of her craft.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    location: "Nebbi",
    text: "The croissants are perfection - flaky, buttery, and clearly made with passion and expertise.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
            What People Say
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The joy of our customers is the heart of everything we do at Fervor Bakes.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 transition-transform duration-1000 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentIndex}`}
                className={`min-w-0 flex-1 p-8 border-0 shadow-soft bg-card/80 backdrop-blur-sm rounded-2xl slide-in-right floating-animation`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: '0.8s'
                }}
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent-foreground text-xl">★</span>
                    ))}
                  </div>
                  <p className="font-body text-lg leading-relaxed text-foreground/80 italic">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="font-heading text-xl font-semibold text-primary mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-primary shadow-lg' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;