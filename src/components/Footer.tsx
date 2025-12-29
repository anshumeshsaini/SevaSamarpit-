import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import MandalaPattern from './MandalaPattern';

import logo from '@/assets/logo2.png';
const Footer: React.FC = () => {
  return (
    <footer className="relative bg-secondary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-10">
        <MandalaPattern size={400} opacity={1} />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12  items-center justify-center">
                <span className="text-accent-foreground font-heading text-xl font-bold"><img src={logo} alt="" /></span>
              </div>
              <span className="font-heading text-xl">Seva Samarpit</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Where giving meets purpose. Building a better India through 
              service, compassion, and community.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Work', 'Impact Stories', 'Get Involved'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {['Healthcare', 'Education', 'Women Empowerment', 'Rural Development'].map((item) => (
                <li key={item}>
                  <Link
                    to="/our-work"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                E-205, Basudeo Vihar Apartment, Nageshwar colony, Patna, Bihar 800001

                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-primary-foreground/70 text-sm">+91-79924 81330
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-primary-foreground/70 text-sm">sevasamarpitfoundaiton@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Seva Samarpit Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
