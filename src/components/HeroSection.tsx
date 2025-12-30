import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MandalaPattern from './MandalaPattern';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-earth">
      {/* Background Mandala Patterns */}
      <div className="absolute top-0 right-0 text-primary pointer-events-none">
        <MandalaPattern size={800} opacity={0.08} />
      </div>
      <div className="absolute bottom-0 left-0 text-accent pointer-events-none">
        <MandalaPattern size={600} opacity={0.06} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        {/* Circular frame around heading */}
        <div className="relative inline-block mb-8">
          <svg
            className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] animate-draw-circle"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="hsl(var(--accent))"
              strokeWidth="0.5"
              strokeDasharray="314"
              strokeDashoffset="0"
              fill="none"
            />
          </svg>
          
          <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Circle of Seva
          </span>
        </div>

        <h1 
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Seva Samarpit
          <br />
          <span className="text-primary">Foundation</span>
        </h1>

        {/* Updated main description with foundation content */}
        <p 
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 font-body animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Established in 2016, registered under the Indian Societies Registration Act, 1860. 
          Dedicated to sustainable social development through education, healthcare, employment, 
          disaster relief, environment protection, and women empowerment.
        </p>

        {/* Leadership mention */}
        <p className="max-w-xl mx-auto text-base text-muted-foreground/80 mb-12 font-body animate-fade-in-up" 
           style={{ animationDelay: '0.5s' }}>
          Guided by President Mr. Sunil Kumar and Secretary Ms. Sonal Singh, driven by principles 
          of <em>seva</em> (service) and <em>samarpan</em> (dedication) to uplift underprivileged communities.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <Button variant="hero" asChild size="lg">
            <Link to="/donate">
              Complete the Circle of Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="heroOutline" asChild size="lg">
            <Link to="/our-work">
              Discover Our Impact
            </Link>
          </Button>
        </div>

        {/* Mission tagline */}
        <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground font-medium animate-fade-in-up" 
           style={{ animationDelay: '0.7s' }}>
          Building an inclusive, empowered, socially responsible nation
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
