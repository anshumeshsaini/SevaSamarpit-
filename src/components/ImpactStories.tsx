import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stories = [
  {
    id: 1,
    name: 'Lakshmi Devi',
    location: 'Rajasthan',
    quote: 'The tailoring training gave me more than a skill—it gave me independence. Now I support my family and teach other women.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
    program: 'Women Empowerment',
  },
  {
    id: 2,
    name: 'Ramesh Kumar',
    location: 'Bihar',
    quote: 'Clean water in our village changed everything. Our children are healthier, and we no longer walk miles to fetch water.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    program: 'Clean Water',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Uttar Pradesh',
    quote: 'Education opened doors I never knew existed. Today I am the first graduate in my village.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop',
    program: 'Education',
  },
  {
    id: 4,
    name: 'Dr. Anil Verma',
    location: 'Maharashtra',
    quote: 'Volunteering with Seva Samarpit showed me how small acts of service create waves of transformation.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
    program: 'Healthcare',
  },
];

const ImpactStories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Stories of Change
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              Voices from
              <br />
              the Circle
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <Button
              variant="circle"
              size="icon"
              onClick={() => scroll('left')}
              className="bg-primary-foreground/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="circle"
              size="icon"
              onClick={() => scroll('right')}
              className="bg-primary-foreground/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-6 snap-x snap-mandatory"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {/* Spacer for container alignment */}
        <div className="shrink-0 w-[calc((100vw-1400px)/2)] max-w-0 md:max-w-[calc((100vw-1400px)/2)]" />
        
        {stories.map((story) => (
          <article
            key={story.id}
            className="shrink-0 w-[320px] md:w-[380px] snap-start group"
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-elevated">
              {/* Image */}
              <img
                src={story.image}
                alt={story.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <Quote className="text-accent mb-4 opacity-60" size={32} />
                <p className="font-body text-base leading-relaxed mb-6 opacity-90">
                  "{story.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-xl">{story.name}</h4>
                    <p className="text-sm text-primary-foreground/70">{story.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs">
                    {story.program}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
        
        {/* Spacer for container alignment */}
        <div className="shrink-0 w-6" />
      </div>
    </section>
  );
};

export default ImpactStories;
