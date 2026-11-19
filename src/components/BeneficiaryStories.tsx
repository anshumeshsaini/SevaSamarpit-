import React from 'react';
import { Quote, Heart, Star, Sparkles, MapPin } from 'lucide-react';
import MandalaPattern from './MandalaPattern';

const stories = [
  {
    quote: "After my husband fell ill, we had no source of income. The Foundation's skill center taught me stitching and gifted me a sewing machine. Today I earn ₹8,000 every month and my daughters go to school with pride.",
    author: "Ritu Devi",
    location: "Vaishali, Bihar",
    cause: "Women Empowerment",
    program: "Tailoring & Self-Reliance Unit"
  },
  {
    quote: "My father is a landless agricultural worker. I thought I would have to drop out in 9th grade. Seva Samarpit Foundation provided my books, fees, and after-school guidance. I passed my matriculation with distinction!",
    author: "Shivam Kumar",
    location: "Bhagalpur, Bihar",
    cause: "Child Education",
    program: "Village Pathshala Project"
  },
  {
    quote: "When our whole village was marooned by the Ganga floods, the foundation volunteers arrived on wooden boats with food packets, milk for our infants, and clean water. They did not just bring food; they gave us life.",
    author: "Ramvilas Yadav",
    location: "Patna Diara Region",
    cause: "Disaster Relief",
    program: "Emergency Flood Operations"
  },
  {
    quote: "As a practicing doctor, I have volunteered with many groups, but Seva Samarpit's logistical precision in reaching deep, inaccessible hamlets with real medicines and lab diagnostic tools is truly extraordinary.",
    author: "Dr. R.K. Verma",
    location: "Patna Medical Volunteer",
    cause: "Healthcare",
    program: "Rural Mobile Medical Camps"
  }
];

export const BeneficiaryStories: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Mandala */}
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 text-primary pointer-events-none opacity-20">
        <MandalaPattern size={650} opacity={0.12} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">

            Voices of Gratitude • आत्मीय अनुभव
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Transformations Written by Compassion
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-body leading-relaxed">
            Behind every number on our dashboard is a human life restored to dignity, health, and independence.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="relative bg-card rounded-3xl p-8 border border-border hover:border-accent/40 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5" />
              </div>

              {/* Quote text */}
              <p className="text-foreground/90 font-heading text-lg sm:text-xl italic leading-relaxed mb-6">
                "{story.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-base text-foreground">
                    {story.author}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <MapPin className="w-3 h-3 text-accent" />
                    <span>{story.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">
                    {story.cause}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeneficiaryStories;