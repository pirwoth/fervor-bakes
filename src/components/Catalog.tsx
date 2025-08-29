import { Card } from "@/components/ui/card";
import croissantImage from "@/assets/croissant.jpg";
import chocolateCakeImage from "@/assets/chocolate-cake.jpg";
import fruitTartImage from "@/assets/fruit-tart.jpg";
import macaronsImage from "@/assets/macarons.jpg";

const products = [
  {
    id: 1,
    name: "Artisan Croissants",
    description: "Buttery, flaky perfection crafted with traditional French techniques",
    image: croissantImage,
    category: "Pastries"
  },
  {
    id: 2,
    name: "Chocolate Indulgence",
    description: "Rich chocolate cake with silky ganache and delicate finishing",
    image: chocolateCakeImage,
    category: "Cakes"
  },
  {
    id: 3,
    name: "Seasonal Fruit Tart",
    description: "Fresh seasonal fruits atop vanilla custard in a crisp pastry shell",
    image: fruitTartImage,
    category: "Tarts"
  },
  {
    id: 4,
    name: "French Macarons",
    description: "Delicate almond cookies with sophisticated flavor combinations",
    image: macaronsImage,
    category: "Confections"
  }
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-32 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
            Our Creations
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each piece is a testament to our commitment to excellence, crafted daily with 
            the finest ingredients and meticulous attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-floating transition-all duration-700 bg-card/50 backdrop-blur-sm rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8">
                <div className="mb-3">
                  <span className="font-body text-sm text-accent-foreground bg-accent/50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-4 group-hover:text-gradient transition-all duration-500">
                  {product.name}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-body text-lg text-muted-foreground mb-8">
            All items are baked fresh daily. Custom orders and special occasions welcomed.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body font-medium text-primary hover:text-gradient transition-all duration-500 border-b-2 border-primary/20 hover:border-primary pb-1"
          >
            Contact us for custom orders →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;