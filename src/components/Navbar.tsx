import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Heart, 
  Menu, 
  X, 
  Sparkles, 
  Compass, 
  ChevronRight, 
  ShieldCheck,
  MapPin
} from 'lucide-react';
import logo from '@/assets/logo2.png';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onOpenCircleNav?: () => void;
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Core Team', path: '/impact' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCircleNav }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top Info Bar */}
        <div className="bg-secondary text-primary-foreground/90 text-xs py-2 px-4 border-b border-accent/20 transition-all duration-300 hidden md:block">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-accent font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                Regd. Under Societies Registration Act XXI, 1860 | 80G Certified
              </span>
              <span className="text-primary-foreground/40 hidden lg:inline">|</span>
              <span className="italic text-primary-foreground/75 hidden lg:inline font-heading tracking-wide">
                "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
              </span>
            </div>

            <div className="flex items-center space-x-5">
              <a 
                href="tel:+917992481330" 
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+91 79924 81330</span>
              </a>
              <a 
                href="mailto:sevasamarpitfoundaiton@gmail.com" 
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>sevasamarpitfoundaiton@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div 
          className={`transition-all duration-300 ${
            isScrolled 
              ? 'bg-background/90 backdrop-blur-md shadow-soft py-2.5 border-b border-border/80' 
              : 'bg-background/70 backdrop-blur-sm py-4 border-b border-border/40'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative">
                <div className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-primary flex items-center justify-center p-1.5 shadow-soft border-2 border-accent/40 group-hover:border-accent transition-all group-hover:scale-105 duration-300">
                  <img
                    src={logo}
                    alt="Seva Samarpit Foundation"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-ping" />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight tracking-tight group-hover:text-primary transition-colors">
                  Seva Samarpit
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium">
                  Foundation • Estd. 2016
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Interactive Seva Chakra button */}
              

              {/* Donate Button */}
              <Button 
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:shadow-elevated rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-105"
              >
                <Link to="/donate" className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-accent-foreground text-accent-foreground animate-pulse" />
                  <span>Donate Now</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu & Circle Trigger */}
            
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)} 
        />

        {/* Drawer Content */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-background shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Seva Samarpit Logo" className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Seva Samarpit</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Foundation</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-heading text-lg transition-colors ${
                      isActive 
                        ? 'bg-primary text-primary-foreground font-semibold shadow-soft' 
                        : 'text-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-muted-foreground'}`} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-border space-y-4">
            <Button 
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3.5 rounded-full shadow-gold"
            >
              <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 fill-current" />
                <span>Donate to Cause</span>
              </Link>
            </Button>

            <div className="space-y-2 pt-2 text-xs text-muted-foreground">
              <a href="tel:+917992481330" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+91 79924 81330</span>
              </a>
              <a href="mailto:sevasamarpitfoundaiton@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>sevasamarpitfoundaiton@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground/80">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="truncate">Patna, Bihar 800001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;