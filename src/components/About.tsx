import { useState, useEffect, useRef } from "react";
import { Instagram, Facebook, X, Music } from "lucide-react";
import GJD from "../assets/GJD.jpg";
import heroImg from "../assets/hero-abstract.jpg";

const About = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    if (showDetails) {
      // allow the element to render first, then enable the enter animation
      requestAnimationFrame(() => setMounted(true));
    } else {
      // ensure mounted is false when dialog isn't requested
      setMounted(false);
    }
  }, [showDetails]);

  const closeDialog = () => {
    // play the exit animation, then unmount after the transition duration
    setMounted(false);
    setTimeout(() => setShowDetails(false), 300);
  };

  useEffect(() => {
    const node = aboutRef.current;
    if (!node) return;

    const update = (entry: IntersectionObserverEntry) => {
      const isDesktop = window.innerWidth >= 768;
      // show when at least 60% of the section is visible on desktop
      setShowBg(isDesktop && entry.intersectionRatio >= 0.6);
    };

    const observer = new IntersectionObserver((entries) => {
      update(entries[0]);
    }, { threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] });

    observer.observe(node);

    const onResize = () => {
      // recompute using bounding rect if needed
      const rect = node.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const ratio = visibleHeight > 0 ? visibleHeight / rect.height : 0;
      setShowBg(window.innerWidth >= 768 && ratio >= 0.6);
    };

    window.addEventListener('resize', onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} className="h-screen px-6 relative flex items-center justify-center">
      {showBg && (
        <div
          aria-hidden
          className="fixed inset-0 z-[-40] bg-center bg-cover bg-no-repeat pointer-events-none md:block hidden"
          style={{ backgroundImage: `url(${String(heroImg)})`, backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-background/10" />
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-primary text-center md:text-left">
              Portfolio
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-body text-muted-foreground text-center md:text-left">
                Learn more about the artisan behind Fervor Bakes and her approach to craft.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-card to-secondary/20 rounded-3xl p-8 shadow-elegant floating-animation">
              <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
                <img
                  src={GJD}
                  alt="Profile — Giramia Joan Dodrege"
                  loading="lazy"
                  onError={(e: any) => {
                    // fallback to bundled hero image if GJD is missing at runtime
                    e.currentTarget.src = String(heroImg);
                  }}
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-md"
                />

                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-1">
                    Giramia Joan Dodrege
                  </h3>
                  <p className="font-body text-muted-foreground text-sm italic">Master Baker &amp; Founder</p>

                  <p className="mt-4 text-muted-foreground hidden md:block md:text-left">
                    Joan crafts each pastry with love and discipline. Her philosophy fuses
                    tradition with creativity to produce memorable flavors.
                  </p>

                  <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
                    <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" aria-label="X (Twitter)" className="text-muted-foreground hover:text-primary">
                      <X className="w-5 h-5" />
                    </a>
                    <a href="#" aria-label="TikTok" className="text-muted-foreground hover:text-primary">
                      <Music className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => setShowDetails(true)}
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                      aria-expanded={showDetails}
                    >
                      View more
                      <span className="inline-block">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(showDetails || mounted) && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-background/90 flex items-start justify-center p-6 overflow-auto"
          onMouseDown={(e) => {
            // click outside to close: only if backdrop (currentTarget) was clicked
            if (e.target === e.currentTarget) closeDialog();
          }}
        >
          <div
            ref={dialogRef}
            className={`max-w-3xl w-full bg-card rounded-2xl shadow-elevated p-8 mt-12 transform transition-all duration-300 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl text-primary font-bold">About Giramia Joan Dodrege</h2>
                <p className="text-muted-foreground mt-2">Master Baker &amp; Founder — Fervor Bakes</p>
              </div>
              <button
                onClick={closeDialog}
                className="text-muted-foreground hover:text-primary"
                aria-label="Close profile details"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="font-body text-muted-foreground text-center md:text-left">
                <span className="font-semibold text-primary">Giramia Joan Dodrege</span> brings
                passion and precision to every creation at Fervor Bakes. With years of experience
                in the culinary arts, Joan has mastered the delicate balance between traditional
                techniques and contemporary innovation.
              </p>

              <p className="font-body text-muted-foreground text-center md:text-left">
                Each pastry is carefully crafted using the finest ingredients, ensuring that
                every bite delivers an exceptional experience. From classic croissants to
                elegant cakes, every creation reflects Joan's commitment to excellence and
                artistic vision.
              </p>

              <p className="font-body text-muted-foreground text-center md:text-left">
                Located in the heart of Pakwach, Fervor Bakes has become a destination for
                those who appreciate the finer things in life—where quality meets creativity
                in perfect harmony.
              </p>

              <p className="text-center md:text-left">
                Giramia Joan started baking as a child, learning family recipes passed down
                through generations. Over the years she trained in artisan techniques and
                developed a particular love for laminated doughs and delicate decorative
                finishes.
              </p>

              <p className="text-center md:text-left">
                Her work focuses on seasonal ingredients and thoughtful presentation. In
                addition to running Fervor Bakes, Joan teaches occasional workshops and
                contributes to local community food events.
              </p>

              <p className="text-center md:text-left">
                For collaborations or bookings reach out via the contact section or through
                her social channels listed on the card.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;