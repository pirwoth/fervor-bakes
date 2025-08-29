import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import StickyContacts from "@/components/StickyContacts";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Catalog />
      <Testimonials />
      <Contact />
      <StickyContacts />
    </div>
  );
};

export default Index;
