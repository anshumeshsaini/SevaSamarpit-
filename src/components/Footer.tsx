import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Heart, 
  ShieldCheck, 
  ExternalLink,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import MandalaPattern from './MandalaPattern';
import logo from '@/assets/logo2.png';
import { toast } from 'sonner';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Thank you for subscribing to Seva Samarpit Foundation updates!');
    setEmail('');
  };

  return (
    <footer className="relative bg-secondary text-primary-foreground overflow-hidden border-t-2 border-accent/20">
      {/* Background Sacred Geometries */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-10">
        <MandalaPattern size={600} opacity={1} />
      </div>
      <div className="absolute top-0 left-0 pointer-events-none opacity-5">
        <MandalaPattern size={400} opacity={1} />
      </div>

      {/* Top Banner / Newsletter Strip */}
      


      {/* Main Footer Links & Info */}
      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-13 h-13 rounded-full bg-primary p-1.5 border-2 border-accent/40 shadow-soft">
                <img src={logo} alt="Seva Samarpit Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-primary-foreground block leading-tight">
                  Seva Samarpit Foundation
                </span>
                <span className="text-[10px] text-accent uppercase tracking-widest font-medium">
                  सेवा समर्पित फाउंडेशन • Estd. 2016
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/75 text-xs leading-relaxed font-body">
              A recognized non-governmental organization registered under the Indian Societies Registration Act XXI of 1860. Guided by the timeless principles of <em>seva</em> (service) and <em>samarpan</em> (dedication), we empower vulnerable communities through healthcare, education, disaster relief, and women self-reliance.
            </p>

            {/* Legal Badges */}
            <div className="p-3 bg-primary/20 rounded-xl border border-accent/20 space-y-1 text-[11px] text-primary-foreground/85">
              <div className="flex items-center gap-1.5 text-accent font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>80G & 12A Certified • 50% Tax Exemption</span>
              </div>
              <p className="text-[10px] text-primary-foreground/60">
                Regd. No: Under Societies Registration Act XXI, 1860
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Facebook, href: 'https://facebook.com/sevasamarpit' },
                { icon: Instagram, href: 'https://instagram.com/sevasamarpit' },
                { icon: Twitter, href: 'https://twitter.com/sevasamarpit' },
                { icon: Linkedin, href: 'https://linkedin.com/company/sevasamarpit' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="Social Link"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-base font-bold text-primary-foreground tracking-wide border-b border-primary-foreground/15 pb-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'About Our Story', path: '/about' },
                { label: 'Our 6 Missions', path: '/our-work' },
                { label: 'Core Leadership', path: '/impact' },
                { label: 'Volunteer With Us', path: '/get-involved' },
                { label: 'Donate Online', path: '/donate' },
                { label: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-primary-foreground/75 hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-accent/60">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 6 Missions (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-primary-foreground tracking-wide border-b border-primary-foreground/15 pb-2">
              Our Key Missions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Rural Healthcare & Camps', path: '/our-work' },
                { label: 'Inclusive Child Education', path: '/our-work' },
                { label: 'Women Skill & Self-Reliance', path: '/our-work' },
                { label: 'Emergency Flood Relief', path: '/our-work' },
                { label: 'Rural Infrastructure & Water', path: '/our-work' },
                { label: 'Tree Plantation & Green Mission', path: '/our-work' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="text-primary-foreground/75 hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-accent/60">•</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                Memorial Dedication:
              </span>
              <p className="text-[11px] text-primary-foreground/60 italic leading-snug">
                Inspired forever by the ideals of Late Shri Mundrika Prasad Mishra.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Patna HQ (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-primary-foreground tracking-wide border-b border-primary-foreground/15 pb-2">
              Contact & Headquarters
            </h4>
            <ul className="space-y-3.5 text-xs text-primary-foreground/75">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>
                  <strong>Patna Office:</strong> E-205, Basudeo Vihar Apartment, Nageshwar Colony, Patna, Bihar 800001, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-accent shrink-0" />
                <a href="tel:+917992481330" className="hover:text-accent transition-colors font-medium">
                  +91 79924 81330
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-accent shrink-0" />
                <a href="mailto:sevasamarpitfoundaiton@gmail.com" className="hover:text-accent transition-colors truncate">
                  sevasamarpitfoundaiton@gmail.com
                </a>
              </li>
            </ul>

            {/* Quick UPI Details badge */}
            <div className="p-3 bg-primary-foreground/10 rounded-xl border border-primary-foreground/15 text-[11px] space-y-1">
              <div className="text-accent font-semibold">Official UPI ID for Donations:</div>
              <code className="text-white bg-black/30 px-2 py-0.5 rounded font-mono text-[10px] block select-all">
                9905933352@hdfcbank
              </code>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Copyright & Sanskrit Blessing */}
        <div className="pt-8 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60 text-center sm:text-left">
          <div>
            <p>
              © {new Date().getFullYear()} Seva Samarpit Foundation. All rights reserved. Registered Society under Act XXI of 1860.
            </p>
            <p className="text-[11px] text-accent/80 mt-0.5 font-heading">
              "परोपकाराय फलन्ति वृक्षाः परोपकाराय वहन्ति नद्यः"
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/donate" className="text-accent font-bold hover:underline">
              Support Our Cause
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;