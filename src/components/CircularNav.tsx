import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Sparkles, Heart, BookOpen, Users, Droplets, Home, Leaf, Shield, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo2.png';

interface CircularNavProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  { label: 'Home', path: '/', icon: Home, desc: 'Our Vision' },
  { label: 'About Us', path: '/about', icon: Shield, desc: 'Legacy & Values' },
  { label: 'Our Work', path: '/our-work', icon: BookOpen, desc: '6 Key Missions' },
  { label: 'Core Team', path: '/impact', icon: Users, desc: 'Leadership' },
  { label: 'Volunteer', path: '/get-involved', icon: Sparkles, desc: 'Join Hands' },
  { label: 'Donate', path: '/donate', icon: Heart, desc: '80G Tax Benefit' },
  { label: 'Contact', path: '/contact', icon: Droplets, desc: 'Patna HQ' },
];

export const CircularNav: React.FC<CircularNavProps> = ({ 
  isOpen: controlledIsOpen, 
  onClose 
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = useCallback(() => {
    if (isControlled && onClose) {
      onClose();
    } else {
      setInternalIsOpen(false);
    }
  }, [isControlled, onClose]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Click outside and Escape key handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) handleClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const handleNavClick = () => {
    handleClose();
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Deep spiritual backdrop */}
      <div 
        className="absolute inset-0 bg-secondary/95 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Close button */}
      <button
        onClick={handleClose}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 focus:outline-none"
        aria-label="Close circle navigation"
      >
        <X size={22} />
      </button>

      {/* Main Wheel Container */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title above chakra */}
        <div className="text-center mb-6 z-10 animate-fade-in-up">
          <span className="inline-block text-accent font-body text-xs tracking-[0.35em] uppercase px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-2">
            Circle of Seva • सेवा चक्र
          </span>
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground font-bold">
            Interactive Navigation Wheel
          </h2>
        </div>

        {/* Circular Wheel for Large Screens */}
        <div className="relative w-[500px] h-[500px] max-w-[92vw] max-h-[75vh] flex items-center justify-center">
          {/* Animated decorative rings */}
          <div className="absolute inset-0 rounded-full border border-accent/20 animate-rotate-slow pointer-events-none" />
          <div className="absolute inset-8 rounded-full border border-dashed border-accent/30 animate-rotate-reverse pointer-events-none" />
          <div className="absolute inset-20 rounded-full border border-primary-foreground/10 pointer-events-none" />

          {/* Center Hub */}
          <div className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-elevated border-2 border-accent flex flex-col items-center justify-center text-center animate-pulse-ring">
            <img src={logo} alt="Seva Samarpit" className="w-12 h-12 object-contain mb-1" />
            <span className="font-heading text-xs font-bold text-primary-foreground leading-tight">
              Seva Samarpit
            </span>
            <span className="text-[9px] text-accent tracking-widest uppercase">Estd. 2016</span>
          </div>

          {/* Radial Nodes */}
          {navItems.map((item, index) => {
            const total = navItems.length;
            const angle = (index * 360) / total - 90;
            const radius = 175; // px from center
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <div
                key={item.path}
                className="absolute transition-all duration-500"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 shadow-soft hover:scale-110 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap ${
                    isActive
                      ? 'bg-accent text-accent-foreground font-bold shadow-gold ring-2 ring-accent-foreground/30'
                      : 'bg-card/90 text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-accent-foreground' : 'text-primary group-hover:text-accent-foreground'}`} />
                  <span>{item.label}</span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Quick Footer inside wheel overlay */}
        <div className="mt-8 text-center text-primary-foreground/75 text-xs max-w-md animate-fade-in-up">
          <p className="font-body">
            Dedicated to sustainable social transformation through education, healthcare, disaster relief, and women empowerment.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-accent">
            <span>Patna, Bihar</span>
            <span>•</span>
            <span>+91 79924 81330</span>
            <span>•</span>
            <span>80G Tax Exemption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularNav;