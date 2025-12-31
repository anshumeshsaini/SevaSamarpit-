import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo2.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Core Committee', path: '/impact' },
  { label: 'Donate', path: '/donate' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact', path: '/contact' },
];

const CircularNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  // ✅ FIXED: Scroll to top on route change (iOS Safari fix)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
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

  // ✅ FIXED: Scroll to top + Close menu on route change
  const handleNavClick = (path: string) => {
    setIsOpen(false);
    // Double scroll for iOS Safari reliability
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 100);
  };

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
        onClick={handleNavClick}
      >
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-shadow">
          <img
            src={logo}
            alt="Seva Samarpit Foundation"
            className="w-10 h-10 object-contain"
          />
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
          onClick={(e) => e.stopPropagation()}
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
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`block px-6 py-3 rounded-full font-heading text-lg whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent hover:scale-110 ${
                      isActive
                        ? 'bg-accent text-accent-foreground shadow-gold shadow-lg'
                        : 'bg-primary/10 text-primary-foreground hover:bg-accent/20 hover:text-accent hover:shadow-elevated'
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
