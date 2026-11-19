import React from 'react';
import { 
  Heart, 
  MapPin, 
  Users, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Droplets 
} from 'lucide-react';

const stats = [
  { icon: Heart, count: '20,000+', label: 'Lives Transformed' },
  { icon: MapPin, count: '320+', label: 'Villages Reached' },
  { icon: ShieldCheck, count: '15,000+', label: 'Patients in Health Camps' },
  { icon: BookOpen, count: '5,000+', label: 'Students Educated' },
  { icon: Sparkles, count: '1,200+', label: 'Women Skill Certified' },
  { icon: Droplets, count: '100,000+', label: 'Relief Packets in Floods' },
  { icon: Users, count: '2,200+', label: 'Dedicated Volunteers' },
  { icon: Award, count: '10+ Years', label: 'Unbroken Service (Since 2016)' },
];

export const LiveStatsMarquee: React.FC = () => {
  return (
    <div className="relative bg-secondary text-primary-foreground py-4 border-y border-accent/20 overflow-hidden shadow-inner">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial pointer-events-none opacity-30" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {stats.concat(stats).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-3 group px-2 cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-xl md:text-2xl font-bold text-accent tracking-tight">
                    {item.count}
                  </span>
                  <span className="text-xs md:text-sm text-primary-foreground/80 font-medium">
                    {item.label}
                  </span>
                </div>
                <span className="text-accent/30 text-lg ml-6 select-none">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LiveStatsMarquee;