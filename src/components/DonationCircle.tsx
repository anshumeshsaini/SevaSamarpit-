import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const amounts = [500, 1000, 2500, 5000, 10000];

const DonationCircle: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [isHovering, setIsHovering] = useState(false);

  // Calculate progress for visual circle (using 10000 as max)
  const progress = (selectedAmount / 10000) * 100;

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-radial pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Complete the Circle
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Your Seva,
              <br />
              <span className="text-primary">Their Smile</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Every contribution completes a circle of hope. Your generosity creates 
              ripples that transform lives across communities in India.
            </p>

            {/* Amount Selection */}
            <div className="flex flex-wrap gap-3 mb-8">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`px-6 py-3 rounded-full font-body text-sm transition-all duration-300 ${
                    selectedAmount === amount
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  ₹{amount.toLocaleString()}
                </button>
              ))}
            </div>

            <Button variant="hero" asChild>
              <Link to="/donate">
                Donate ₹{selectedAmount.toLocaleString()}
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right - Interactive Circle Visualization */}
          <div 
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer decorative ring */}
              <svg className="absolute inset-0 w-full h-full animate-rotate-slow" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="0.3"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Progress Circle */}
              <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="2"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${(progress / 100) * 283} 283`}
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              {/* Inner Content */}
              <div className="absolute inset-8 rounded-full bg-primary/5 flex flex-col items-center justify-center text-center">
                <Heart 
                  className={`text-accent mb-2 transition-all duration-300 ${
                    isHovering ? 'scale-125 fill-accent' : ''
                  }`} 
                  size={32} 
                />
                <span className="font-heading text-4xl md:text-5xl text-foreground">
                  ₹{selectedAmount.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground mt-2">
                  can help {Math.floor(selectedAmount / 100)} families
                </span>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs animate-float">
                Education
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs animate-float" style={{ animationDelay: '1s' }}>
                Healthcare
              </div>
              <div className="absolute top-1/4 left-0 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs animate-float" style={{ animationDelay: '2s' }}>
                Clean Water
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCircle;
