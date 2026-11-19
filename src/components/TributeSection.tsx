import React from 'react';
import founderImage from '@/assets/home1.png';
import MandalaPattern from './MandalaPattern';
import { Award, Heart, Sparkles, Quote } from 'lucide-react';

export const TributeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-sand relative overflow-hidden border-b border-border">
      {/* Background Sacred Geometries */}
      <div className="absolute -top-24 -left-24 text-primary pointer-events-none opacity-30">
        <MandalaPattern size={500} opacity={0.12} />
      </div>
      <div className="absolute -bottom-24 -right-24 text-accent pointer-events-none opacity-30">
        <MandalaPattern size={500} opacity={0.12} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              In Eternal Reverence & Memory
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-olive tracking-tight mb-4">
              Tribute to Late Shri Mundrika Prasad Mishra
            </h2>
            <p className="text-ink/70 font-heading text-lg italic max-w-xl mx-auto">
              "The founder, visionary, and guiding soul whose selfless life continues to illuminate the path of Seva Samarpit Foundation."
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
          </div>

          {/* Tribute Card Container */}
          <div className="bg-card/90 rounded-3xl p-8 sm:p-12 border-2 border-gold/30 shadow-elevated relative overflow-hidden backdrop-blur-sm">
            
            {/* Top decorative gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/60 rounded-tl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/60 rounded-br-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Image Showcase */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
                <div className="relative group">
                  {/* Decorative concentric rings */}
                  <div className="absolute -inset-4 border-2 border-dashed border-gold/40 rounded-full animate-rotate-slow pointer-events-none" />
                  <div className="absolute -inset-8 border border-olive/20 rounded-full pointer-events-none" />

                  {/* Main Portrait */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-gold shadow-2xl bg-sand-dark">
                    <img 
                      src={founderImage} 
                      alt="Late Shri Mundrika Prasad Mishra"
                      className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Memorial Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-deep-green text-sand px-5 py-2 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap border border-gold/30 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-accent text-accent" />
                    <span>Eternal Inspiration • अमर स्मृति</span>
                  </div>
                </div>

                <div className="mt-8 space-y-1">
                  <h3 className="font-heading text-2xl font-bold text-olive">
                    Late Shri Mundrika Prasad Mishra
                  </h3>
                  <p className="text-xs text-ink/60 uppercase tracking-widest font-medium">
                    Visionary & Founding Guide
                  </p>
                </div>
              </div>

              {/* Founder Philosophy & Narrative */}
              <div className="lg:col-span-7 space-y-5 text-ink/80 text-base leading-relaxed">
                
                {/* Quote Box */}
                <div className="relative p-6 rounded-2xl bg-primary/5 border-l-4 border-gold">
                  <Quote className="w-8 h-8 text-gold/40 absolute top-4 right-4" />
                  <p className="font-heading text-xl text-olive italic leading-snug">
                    "True social change begins when people unite with compassion, courage, and unconditional responsibility toward the most vulnerable."
                  </p>
                </div>

                <p>
                  Our organization draws its deepest conviction and moral strength from the noble ideals of <strong className="text-olive font-semibold">Late Shri Mundrika Prasad Mishra</strong>. He dedicated his life to walking into forgotten villages, standing firm for justice, human dignity, and the defense of the voiceless.
                </p>

                <p>
                  His courage and humility continue to be the compass for every medical camp we organize, every classroom we support, and every relief boat we send into flood-affected regions. He believed that seva is not an act of charity, but our sacred duty to our fellow human beings.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gold/20 text-sm">
                  <div>
                    <h4 className="font-heading font-bold text-olive text-base">His Core Tenets:</h4>
                    <p className="text-xs text-ink/70 mt-1">Dignity for all, education as empowerment, and immediate grassroots action in times of calamity.</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-olive text-base">Our Pledge:</h4>
                    <p className="text-xs text-ink/70 mt-1">To carry his torch forward across thousands of villages with unwavering integrity and transparency.</p>
                  </div>
                </div>

                {/* Eternal Gratitude Sign-off */}
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-lg text-gold italic">With Reverence & Gratitude,</p>
                    <p className="text-xs font-semibold text-olive uppercase tracking-wider">The Family of Seva Samarpit Foundation</p>
                  </div>
                  <span className="text-2xl text-gold font-heading">ॐ शान्तिः</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TributeSection;