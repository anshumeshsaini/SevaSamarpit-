import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import team1 from '@/assets/team/team1.jpeg';
import team2 from '@/assets/team/team2.jpeg';
import team3 from '@/assets/team/team3.jpeg';
import team4 from '@/assets/team/team4.jpeg';
import team5 from '@/assets/team/team5.jpeg';
import team6 from '@/assets/team/team6.jpeg';
import team7 from '@/assets/team/team7.jpeg';
import team8 from '@/assets/team/team8.jpeg';
import team9 from '@/assets/team/team9.jpeg';

const teamMembers = [
  {
    name: 'सुनील कुमार ',
    role: 'राष्ट्रीय अध्यक्ष',
    bio: 'राष्ट्रीय अध्यक्ष के रूप में दर्शनशील नेतृत्व। 2016 में सेवा समर्पित फाउंडेशन की स्थापना की। सामाजिक सेवा में 15+ वर्षों का अनुभव।',
    image: team1,
    location: 'Patna, Bihar',
  },
  {
    name: 'सोनल कुमारी',
    role: 'राष्ट्रीय सचिव सह संस्थापिका',
    bio: 'शिक्षा और महिला सशक्तिकरण पहलों का नेतृत्व। कौशल विकास के माध्यम से समुदाय परिवर्तन के प्रति उत्साही।',
    image: team2,
    location: 'Rajasthan',
  },
  {
    name: 'संगीता सिंह',
    role: 'कोषाध्यक्ष',
    bio: 'ग्रामीण स्वास्थ्य सेवाओं में विशेषज्ञता। चिकित्सा शिविरों और कल्याण कार्यक्रमों का संचालन।',
    image: team3,
    location: 'Maharashtra',
  },
  {
    name: 'पंकज पाठक',
    role: 'पाध्यक्ष बिहार झारखंड',
    bio: 'क्षेत्रीय संचालन का नेतृत्व। बिहार-झारखंड में सभी कार्यक्रमों का समन्वय।',
    image: team4,
    location: 'Bihar-Jharkhand',
  },
  {
    name: 'मधुरी देवी',
    role: 'राष्ट्रीय उपाध्यक्ष',
    bio: 'राष्ट्रीय स्तर पर नीति निर्माण और कार्यक्रम विस्तार। संगठनात्मक विकास में प्रमुख भूमिका।',
    image: team5,
    location: 'Bihar',
  },
  {
    name: 'ममता साहू',
    role: 'राष्ट्रीय कार्यकारी अध्यक्ष',
    bio: 'कार्यकारी निर्णयों का संचालन। सभी राष्ट्रीय कार्यक्रमों का समग्र प्रबंधन।',
    image: team6,
    location: 'Uttar Pradesh',
  },
  {
    name: 'राष्ट्रीय संयुक्त सचिव',
    role: 'राष्ट्रीय संयुक्त सचिव',
    bio: 'प्रशासनिक समन्वय और दस्तावेजीकरण। राष्ट्रीय स्तर पर संचालन सहायता।',
    image: team7,
    location: 'Rajasthan',
  },
  {
    name: 'रानी पाठक',
    role: 'राष्ट्रीय महा सचिव',
    bio: 'महिला सशक्तिकरण और सामुदायिक विकास कार्यक्रमों का संचालन।',
    image: team8,
    location: 'Bihar',
  },
  {
    name: 'रेणु धारी',
    role: 'राष्ट्रीय उपाध्यक्ष',
    bio: 'कार्यक्रम निगरानी और क्षेत्रीय समन्वय। प्रभाव मूल्यांकन विशेषज्ञ।',
    image: team9,
    location: 'Patna, Bihar',
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
              Our Leadership
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              Meet the
              <br />
              Circle of Service
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
        
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="shrink-0 w-[320px] md:w-[380px] snap-start group"
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-elevated">
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl leading-tight">{member.name}</h3>
                    <p className="text-accent text-sm font-semibold mt-1">{member.role}</p>
                  </div>
                  <div className="flex gap-1 opacity-80">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs">{member.location}</span>
                  </div>
                </div>
                
                <p className="font-body text-sm leading-relaxed opacity-90">
                  {member.bio}
                </p>
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
