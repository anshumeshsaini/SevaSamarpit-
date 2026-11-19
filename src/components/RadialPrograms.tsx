import React, { useState } from 'react';
import { Heart, BookOpen, Leaf, Users, Home, Droplets } from 'lucide-react';

const programs = [
  {
    id: 1,
    icon: Heart,
    title: 'Healthcare',
    description: 'Free medical camps and health awareness in rural India',
    color: 'bg-red-500/10 text-red-600',
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'Education',
    description: 'Quality education for underprivileged children',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    id: 3,
    icon: Leaf,
    title: 'Environment',
    description: 'Tree plantation and sustainable living initiatives',
    color: 'bg-green-500/10 text-green-600',
  },
  {
    id: 4,
    icon: Users,
    title: 'Women Empowerment',
    description: 'Skill development and self-help groups for women',
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    id: 5,
    icon: Home,
    title: 'Rural Development',
    description: 'Infrastructure and livelihood support in villages',
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    id: 6,
    icon: Droplets,
    title: 'flood relief',
    description: 'Providing Food and water',
    color: 'bg-cyan-500/10 text-cyan-600',
  },
];

const RadialPrograms: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
          Our Programs
        </span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
          The Circle of Impact
        </h2>
      </div>

      {/* Radial Layout - Desktop */}
      <div className="hidden lg:block relative max-w-4xl mx-auto aspect-square">
        {/* Center Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-32 h-32 rounded-full bg-primary shadow-elevated flex items-center justify-center">
            <span className="text-primary-foreground font-heading text-lg text-center leading-tight">
              Circle of
              <br />
              <span className="text-accent">Seva</span>
            </span>
          </div>
        </div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.2"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Program Items in Circle */}
        {programs.map((program, index) => {
          const angle = (index * 360) / programs.length - 90;
          const radius = 38;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          const Icon = program.icon;
          const isActive = activeProgram === program.id;

          return (
            <div
              key={program.id}
              className="absolute transition-all duration-500 cursor-pointer group"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setActiveProgram(program.id)}
              onMouseLeave={() => setActiveProgram(null)}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground scale-125 shadow-elevated' 
                    : `${program.color} group-hover:scale-110`
                }`}
              >
                <Icon size={28} />
              </div>
              
              {/* Tooltip */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-48 p-4 rounded-xl bg-card shadow-elevated transition-all duration-300 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <h4 className="font-heading text-lg text-foreground mb-1">{program.title}</h4>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid Layout - Mobile/Tablet */}
      <div className="lg:hidden container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${program.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={28} />
                </div>
                <h4 className="font-heading text-lg text-foreground mb-2">{program.title}</h4>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RadialPrograms;
