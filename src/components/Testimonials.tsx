import React, { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const [dragTranslate, setDragTranslate] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  // detect mobile (below md breakpoint ~ 768px)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const m = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(m);
    try {
      m.addEventListener('change', handler as any);
    } catch {
      // Safari fallback
      m.addListener(handler as any);
    }
    return () => {
      try {
        m.removeEventListener('change', handler as any);
      } catch {
        m.removeListener(handler as any);
      }
    };
  }, []);

  // autoplay (5s) and respects isPaused — run on desktop and mobile
  useEffect(() => {
    // clear existing
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isPaused]);

  // Prepare cloned slides for seamless loop on both modes
  const N = testimonials.length;
  const slides = [...testimonials, ...testimonials, ...testimonials];

  const visibleCount = isMobile ? 1 : 3;
  const centerOffset = Math.floor(visibleCount / 2);

  // initialize start index in the middle copy so we can loop both ways
  useEffect(() => {
    setCurrentIndex(N + centerOffset);
    // ensure transition is enabled by default
    setIsTransitionEnabled(true);
    // reset drag state
    setDragTranslate(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  // measure slide width (viewport / visibleCount)
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setSlideWidth(w / visibleCount);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [visibleCount]);

  const getVisibleTestimonials = () => {
    if (isMobile) return testimonials;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (currentIndex - centerOffset + i) % testimonials.length;
      visible.push(testimonials[(idx + testimonials.length) % testimonials.length]);
    }
    return visible;
  };

  // Pointer / swipe handlers (container-level)
  const handlePointerDown = (e: React.PointerEvent) => {
    try { (e.currentTarget as Element).setPointerCapture(e.pointerId); } catch {}
    startXRef.current = e.clientX;
    isDraggingRef.current = true;
    setIsPaused(true);
    setIsTransitionEnabled(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    setDragTranslate(dx);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const dx = e.clientX - startXRef.current;
    const threshold = slideWidth * 0.2 || 50;
    if (dx < -threshold) setCurrentIndex(prev => prev + 1);
    else if (dx > threshold) setCurrentIndex(prev => prev - 1);
    isDraggingRef.current = false;
    setDragTranslate(0);
    setIsTransitionEnabled(true);
    setTimeout(() => setIsPaused(false), 60);
    try { (e.currentTarget as Element).releasePointerCapture(e.pointerId); } catch {}
  };

  const handlePointerCancel = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setDragTranslate(0);
    setIsTransitionEnabled(true);
    setTimeout(() => setIsPaused(false), 60);
    try { (e.currentTarget as Element).releasePointerCapture(e.pointerId); } catch {}
  };

  // handle transition end to reset index when we've moved into cloned area
  const handleTransitionEnd = () => {
    // when index goes beyond middle copy, snap back to middle copy silently
    if (currentIndex >= N * 2 + centerOffset) {
      setIsTransitionEnabled(false);
      setCurrentIndex(prev => prev - N);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitionEnabled(true)));
    } else if (currentIndex < N + centerOffset) {
      setIsTransitionEnabled(false);
      setCurrentIndex(prev => prev + N);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitionEnabled(true)));
    }
  };

  const visibleLogicalIndex = ((currentIndex - centerOffset) % N + N) % N;

  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">What People Say</h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">The joy of our customers is the heart of everything we do at Fervor Bakes.</p>
        </div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div
            className={`${isTransitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''} flex`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerCancel}
            onTransitionEnd={handleTransitionEnd}
            style={{
              width: `${slides.length * slideWidth}px`,
              transform: `translateX(${-(currentIndex - centerOffset) * slideWidth + dragTranslate}px)`,
              touchAction: 'pan-y',
              userSelect: 'none'
            }}
          >
            {slides.map((testimonial, idx) => {
              const distance = Math.abs(idx - currentIndex);
              const wrappedDist = Math.min(distance, Math.abs(distance - N), Math.abs(distance - 2 * N));
              const isActive = idx === currentIndex;
              const isNeighbor = wrappedDist === 1;
              return (
                <Card key={`slide-${idx}-${testimonial.id}`} className="min-w-0 p-8 border-0 shadow-soft bg-card/80 backdrop-blur-sm rounded-2xl" style={{ width: `${slideWidth}px` }}>
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-accent-foreground text-xl">★</span>)}</div>
                    <p className={`font-body text-lg leading-relaxed italic ${isActive ? 'text-foreground/100' : isNeighbor ? 'text-foreground/70' : 'text-foreground/50'}`}>{testimonial.text}</p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className={`font-heading text-xl font-semibold mb-2 ${isActive ? 'text-primary' : 'text-foreground/70'}`}>{testimonial.name}</h4>
                    <p className={`font-body ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>{testimonial.location}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(N + centerOffset + i)} className={`w-3 h-3 rounded-full transition-all duration-500 ${i === visibleLogicalIndex ? 'bg-primary shadow-lg' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;