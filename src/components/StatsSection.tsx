import React from 'react';

const stats = [
  { value: '20,000+', label: 'Lives Transformed' },
  { value: '320+', label: 'Villages Reached' },
  { value: '10', label: 'Years of Service' },
  { value: '2,200+', label: 'Active Volunteers' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative inline-block">
                {/* Circular background */}
                <div className="absolute inset-0 w-24 h-24 mx-auto -top-4 rounded-full bg-accent/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
                <span className="relative font-heading text-4xl md:text-5xl text-accent">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-primary-foreground/70 text-sm md:text-base font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
