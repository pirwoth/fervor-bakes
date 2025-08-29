import { useState, useEffect } from "react";
import { Home, Info, ShoppingBag, Star, Mail } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "catalog", label: "Catalog" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" }
  ];

  const iconMap: Record<string, any> = {
    home: Home,
    about: Info,
    catalog: ShoppingBag,
    testimonials: Star,
    contact: Mail,
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-card/80 backdrop-blur-md rounded-2xl shadow-elegant border border-border/50">
      <div className="flex items-center gap-1 p-2">
        {navItems.map((item) => {
          const Icon = iconMap[item.id];
          return (
            <button
              key={item.id}
              aria-label={item.label}
              aria-current={activeSection === item.id ? 'page' : undefined}
              onClick={() => scrollToSection(item.id)}
              className={`
                flex items-center justify-center gap-2 px-3 md:px-6 py-2 md:py-3 rounded-xl font-body font-medium text-sm transition-all duration-500
                ${activeSection === item.id 
                  ? 'bg-primary text-primary-foreground shadow-soft' 
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }
              `}
            >
              {/* Icon visible on small screens; text shown on md+ */}
              <Icon className="w-5 h-5 md:hidden" aria-hidden />
              <span className="hidden md:inline">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;