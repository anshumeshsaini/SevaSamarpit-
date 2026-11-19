import React from 'react';
import { MapPin, Award, Users, Sparkles, Shield } from 'lucide-react';

import team1 from '@/assets/team/team1.jpeg';
import team2 from '@/assets/team/team2.jpeg';
import team3 from '@/assets/team/team3.jpeg';
import team4 from '@/assets/team/team4.jpeg';
import team5 from '@/assets/team/team5.jpeg';
import team6 from '@/assets/team/team6.jpeg';
import team7 from '@/assets/team/team7.jpeg';
import team8 from '@/assets/team/team8.jpeg';

export interface LeaderMember {
  name: string;
  hindiName: string;
  role: string;
  hindiRole: string;
  location: string;
  image: string;
  bio: string;
  experience: string;
}

export const leaders: LeaderMember[] = [
  {
    name: 'Mr. Sunil Kumar',
    hindiName: 'श्री सुनील कुमार',
    role: 'National President',
    hindiRole: 'राष्ट्रीय अध्यक्ष',
    location: 'Bhagalpur & Patna, Bihar',
    image: team1,
    bio: 'Visionary leader who founded Seva Samarpit Foundation in 2016. Has over 15+ years of grassroots humanitarian service, driving disaster relief and rural development.',
    experience: '15+ Years Service'
  },
  {
    name: 'Ms. Sonal Kumari',
    hindiName: 'सुश्री सोनल कुमारी',
    role: 'National Secretary & Co-Founder',
    hindiRole: 'राष्ट्रीय सचिव सह संस्थापिका',
    location: 'Patna, Bihar',
    image: team2,
    bio: 'Pioneered child literacy pathshalas and women skill centers across Bihar. Dedicated to transforming vulnerable communities through dignity and education.',
    experience: 'Founder & Secretary'
  },
  {
    name: 'Mrs. Sangita Singh',
    hindiName: 'श्रीमती संगीता सिंह',
    role: 'Treasurer',
    hindiRole: 'कोषाध्यक्ष',
    location: 'Vaishali, Bihar',
    image: team3,
    bio: 'Oversees financial integrity, accounting, and resource allocation for hundreds of free medical camps and community welfare programs.',
    experience: 'Financial Governance'
  },
  {
    name: 'Mrs. Mamta Sahu',
    hindiName: 'श्रीमती ममता साहू',
    role: 'National Executive President',
    hindiRole: 'राष्ट्रीय कार्यकारी अध्यक्ष',
    location: 'Vaishali, Bihar',
    image: team6,
    bio: 'Spearheads high-level executive decision-making and oversees state-wide field operations during emergency floods and pandemic relief.',
    experience: 'Operations Lead'
  },
  {
    name: 'Mrs. Rani Pathak',
    hindiName: 'श्रीमती रानी पाठक',
    role: 'National General Secretary',
    hindiRole: 'राष्ट्रीय महा सचिव',
    location: 'Patna, Bihar',
    image: team8,
    bio: 'Manages women empowerment programs, SHG self-reliance circles, and village grievance resolution.',
    experience: 'Women Wing Lead'
  },
  {
    name: 'Mrs. Prem Lata Singh',
    hindiName: 'श्रीमती प्रेम लता सिंह',
    role: 'National Joint Secretary',
    hindiRole: 'राष्ट्रीय संयुक्त सचिव',
    location: 'Patna, Bihar',
    image: team7,
    bio: 'Handles administrative documentation, government & CSR partnerships, and coordination across volunteer clusters.',
    experience: 'Strategic Affairs'
  },
  {
    name: 'Mrs. Madhuri Devi',
    hindiName: 'श्रीमती मधुरी देवी',
    role: 'National Vice President',
    hindiRole: 'राष्ट्रीय उपाध्यक्ष',
    location: 'Patna, Bihar',
    image: team5,
    bio: 'Leads program expansion, public relations, and legal advocacy for underprivileged families.',
    experience: 'Advocacy & Expansion'
  },
  
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-sand/60 relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">

            Leadership with Purpose • नेतृत्व मंडल
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Meet the Core Committee
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-body leading-relaxed">
            Led by selfless social workers, activists, and grassroots leaders dedicated to the noble ideals of सेवा (service) and समर्पण (dedication).
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-gold/50 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame with Gold Border Accent */}
                <div className="relative h-64 w-full overflow-hidden bg-sand-dark">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold shadow-sm">
                      {leader.experience}
                    </span>
                  </div>

                  {/* Hindi Name Overlay on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-white text-xs font-semibold tracking-wide font-heading drop-shadow-sm">
                      {leader.hindiName}
                    </div>
                    <div className="text-accent text-[11px] font-medium">
                      {leader.hindiRole}
                    </div>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Location Footer */}
              <div className="px-5 py-3 bg-muted/40 border-t border-border flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="truncate">{leader.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;