import React from 'react';
import founderImage from '@/assets/home1.png'; // ✅ Proper Vite/React import with alias

const TributeSection: React.FC = () => {
  return (
    <section className="py-20 bg-sand relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-gold rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-olive rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              In Loving Memory
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-olive mb-4">
              Tribute to Late Shri Mundrika Prasad Mishra
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Decorative circle behind image */}
                <div className="absolute -inset-4 border-2 border-gold/30 rounded-full"></div>
                <div className="absolute -inset-8 border border-olive/20 rounded-full"></div>
                
                {/* Main image container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                  <img 
                    src={founderImage} 
                    alt="Late Shri Mundrika Prasad Mishra - Founder and Inspiration of Seva Samarpit Foundation"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Decorative badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-deep-green text-sand px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                  1945 - Forever in Our Hearts
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-ink/80 leading-relaxed text-lg">
                Our organisation draws its vision and strength from the noble ideals of <strong className="text-olive">Late Shri Mundrika Prasad Mishra</strong>. He dedicated his life to serving the needy, uplifting the voiceless, and standing firm for justice and human rights.
              </p>
              
              <p className="text-ink/80 leading-relaxed">
                His courage, compassion, and unwavering commitment to humanity continue to guide us in our mission to build a society where every person can live with dignity, safety, and equal opportunity. Through his example, he taught us that real change begins when people unite with compassion, courage, and responsibility.
              </p>
              
              <p className="text-ink/80 leading-relaxed">
                We walk on the path he showed, working hand-in-hand with citizens, government bodies, law enforcement agencies, and social institutions to promote justice and ensure that every voice is heard. His legacy lives on through our counseling services, legal support, awareness programs, training sessions, and community outreach.
              </p>
              
              <p className="text-ink/80 leading-relaxed">
                His inspiration is our foundation. His values are our direction. We honor his memory by continuing the work he began — protecting the rights of individuals, supporting victims, and spreading awareness so that wrongdoings do not find a place in our communities.
              </p>
              
              <p className="text-ink/80 leading-relaxed italic">
                Though he is no longer with us, his spirit guides our every action as we strive to create a safer, kinder, and more just society in his honor.
              </p>

              {/* Signature */}
              <div className="pt-6 border-t border-gold/30">
                <p className="font-cormorant text-xl text-gold italic mb-2">Eternal Gratitude,</p>
                <p className="text-olive font-semibold">Seva Samarpit Foundation</p>
                <p className="text-sm text-ink/60">Carrying forward the legacy of Late Shri Mundrika Prasad Mishra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TributeSection;
