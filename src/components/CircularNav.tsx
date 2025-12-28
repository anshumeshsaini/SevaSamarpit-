import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Impact', path: '/impact' },
  { label: 'Donate', path: '/donate' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact', path: '/contact' },
];

const CircularNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent background scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Circular Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Logo */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1"
        onClick={() => setIsOpen(false)}
      >
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-shadow">
          <span className="text-primary-foreground font-heading text-xl font-bold">स</span>
        </div>
        <span className="hidden md:block font-heading text-lg text-foreground">
          Seva Samarpit
        </span>
      </Link>

      {/* Radial Navigation Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Background - Click to close */}
        <div 
          className="absolute inset-0 bg-secondary/95 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
        />

        {/* Circular Navigation Items */}
        <nav 
          className="absolute inset-0 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to background
        >
          <div className="relative w-[500px] h-[500px] max-w-[90vw] max-h-[90vh]">
            {/* Center decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 rounded-full border-2 border-accent/30 animate-pulse-ring" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/10" />
            </div>

            {/* Nav Items in Circle */}
            {navItems.map((item, index) => {
              const angle = (index * 360) / navItems.length - 90;
              const radius = 180;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              const isActive = location.pathname === item.path;

              return (
                <div
                  key={item.path}
                  className={`absolute top-1/2 left-1/2 transition-all duration-500 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-3 rounded-full font-heading text-lg whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                      isActive
                        ? 'bg-accent text-accent-foreground shadow-gold'
                        : 'bg-primary/10 text-primary-foreground hover:bg-accent/20 hover:text-accent'
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}

            {/* Decorative circles */}
            <svg
              className="absolute inset-0 w-full h-full animate-rotate-slow pointer-events-none"
              viewBox="0 0 500 500"
              style={{ transformOrigin: 'center' }}
            >
              <circle
                cx="250"
                cy="250"
                r="180"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="1"
                strokeDasharray="8 8"
                opacity="0.3"
              />
            </svg>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CircularNav;