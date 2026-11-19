import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, ShieldCheck, Sparkles, QrCode, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MandalaPattern from './MandalaPattern';

export const QuickDonationBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-secondary via-primary to-secondary text-primary-foreground relative overflow-hidden">
      {/* Background Mandala patterns */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-15">
        <MandalaPattern size={500} opacity={1} />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-10">
        <MandalaPattern size={400} opacity={1} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-body text-xs sm:text-sm font-semibold tracking-widest uppercase">

            <span>Complete the Sacred Circle • संकल्प से सिद्धि</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold leading-tight">
            Your Giving Translates into Direct Survival & Hope
          </h2>

          <p className="text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Support education, medical treatment, flood relief, and women independence across rural Bihar. Every contribution is 100% transparent and eligible for <strong>50% tax deduction under Section 80G</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 rounded-full shadow-gold hover:scale-105 transition-all text-base"
            >
              <Link to="/donate" className="flex items-center gap-2">

                <span>Donate Securely via UPI / Bank</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-6 rounded-full transition-all text-base"
            >
              <Link to="/get-involved">
                Join as Field Volunteer
              </Link>
            </Button>
          </div>

          {/* Quick info credentials */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent" />
              UPI ID: <strong className="text-white font-mono">9905933352@hdfcbank</strong>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-accent" />
              Direct Helpline: <strong className="text-white">+91 79924 81330</strong>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Registered Under Societies Act XXI, 1860</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuickDonationBanner;