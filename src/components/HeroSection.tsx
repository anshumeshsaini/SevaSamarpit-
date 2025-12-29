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

        <p 
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 font-body animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Where giving meets purpose. Join our circle of service and create ripples 
          of change that touch countless lives across India.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <Button variant="hero" asChild>
            <Link to="/donate">
              Complete the Circle
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button variant="heroOutline" asChild>
            <Link to="/our-work">
              Explore Our Work
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
       
      </div>
    </section>
  );
};

export default HeroSection;
