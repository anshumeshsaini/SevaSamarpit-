import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Coins, 
  Calculator,
  CheckCircle2,
  Receipt
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import MandalaPattern from './MandalaPattern';

interface ImpactTier {
  amount: number;
  label: string;
  badge: string;
  impacts: string[];
  beneficiaries: string;
}

const impactTiers: ImpactTier[] = [
  {
    amount: 500,
    label: 'Vidya Seva',
    badge: 'Education Support',
    impacts: [
      'Textbooks, notebook kits, and stationery for 2 rural students',
      'Special remedial coaching at our community pathshala',
      'Daily nutritional supplement during study hours'
    ],
    beneficiaries: '2 Children Educated for 1 Month'
  },
  {
    amount: 1000,
    label: 'Arogya Seva',
    badge: 'Basic Healthcare',
    impacts: [
      'Comprehensive doctor consultation & vitals check for 5 elderly villagers',
      '1 Month supply of essential hypertension & diabetes medications',
      'Eye screening & preventative health advice'
    ],
    beneficiaries: '5 Elderly Patients Treated'
  },
  {
    amount: 2500,
    label: 'Aapad Rahat',
    badge: 'Flood & Disaster Relief',
    impacts: [
      'Dry ration kit containing chuda, sattu, gur, biscuits & clean drinking water',
      'Water purification tablets (halazone) and ORS packets',
      'Waterproof tarpaulin sheet for temporary shelter'
    ],
    beneficiaries: '1 Flood-Affected Family of 5'
  },
  {
    amount: 5000,
    label: 'Nari Shakti',
    badge: 'Women Empowerment',
    impacts: [
      '3-Month certified vocational tailoring and cutting course',
      'Raw material fabrics, sewing kit, and thread sets',
      'Financial inclusion & self-help group enrollment'
    ],
    beneficiaries: '1 Woman Trained for Financial Autonomy'
  },
  {
    amount: 10000,
    label: 'Swavalamban',
    badge: 'Livelihood Tool Kit',
    impacts: [
      '1 Brand new heavy-duty sewing machine gifted to certified artisan',
      'Immediate home-based stitching enterprise setup',
      'Direct order linkage with local market vendors'
    ],
    beneficiaries: 'Lifelong Family Income Generated'
  },
  {
    amount: 25000,
    label: 'Gram Arogya Camp',
    badge: 'Full Village Camp',
    impacts: [
      'Full-day multi-specialty mobile medical camp in an isolated village',
      'Team of 3 doctors, 2 nurses, and diagnostic equipment',
      'Free distribution of medicines to over 250 villagers'
    ],
    beneficiaries: 'Entire Village Hamlet (250+ People)'
  }
];

export const ImpactCalculator: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);

  // Find nearest tier or exact
  const currentTier = impactTiers.find(t => t.amount === selectedAmount) || impactTiers[2];

  // 80G tax benefit calculation (50% deduction of donation amount under Section 80G)
  const taxSavingsEstimate = Math.round(selectedAmount * 0.15); // Approximate tax savings based on ~30% bracket on 50% deduction

  return (
    <section className="py-20 md:py-28 bg-earth relative overflow-hidden">
      {/* Background mandala decoration */}
      <div className="absolute top-0 right-0 text-primary pointer-events-none opacity-20">
        <MandalaPattern size={600} opacity={0.15} />
      </div>
      <div className="absolute bottom-0 left-0 text-accent pointer-events-none opacity-20">
        <MandalaPattern size={500} opacity={0.15} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">

            Transparent Giving • सेवा प्रभाव
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Calculate Your Seva Impact
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-body leading-relaxed">
            Every single rupee you entrust to Seva Samarpit Foundation translates into verified, on-ground dignity. See exactly what your contribution will accomplish today.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-6 sm:p-10 border-2 border-border shadow-elevated">
          
          {/* Amount Selector Pills */}
          <div className="mb-8">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3 text-center sm:text-left">
              Choose Contribution Amount:
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {impactTiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => setSelectedAmount(tier.amount)}
                  className={`py-3 px-2 rounded-2xl font-body text-sm font-bold transition-all duration-300 text-center ${
                    selectedAmount === tier.amount
                      ? 'bg-accent text-accent-foreground shadow-gold scale-105 ring-2 ring-accent-foreground/20'
                      : 'bg-muted/80 text-foreground hover:bg-muted hover:border-accent/40 border border-transparent'
                  }`}
                >
                  <div className="text-base sm:text-lg font-heading">₹{tier.amount.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] opacity-75 font-normal truncate">{tier.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Result Stage */}
          <div className="bg-sand/60 rounded-2xl p-6 sm:p-8 border border-border/80">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Left: Tangible Impact */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-soft">
                    {currentTier.badge}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Direct Grassroots Allocation
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  With ₹{selectedAmount.toLocaleString('en-IN')}, you empower:
                </h3>

                <p className="text-accent font-heading text-xl font-bold italic">
                  "{currentTier.beneficiaries}"
                </p>

                {/* Impact Checklist */}
                <div className="space-y-2.5 pt-2">
                  {currentTier.impacts.map((imp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Tax Benefit & CTA */}
              <div className="md:col-span-5 bg-card rounded-2xl p-6 border border-border space-y-4 shadow-soft text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 mx-auto flex items-center justify-center text-accent">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>

                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    80G Tax Deductible
                  </span>
                  <div className="text-xs text-muted-foreground mt-1">
                    50% Tax Exemption eligible under Section 80G of Income Tax Act.
                  </div>
                </div>

                <div className="p-3 bg-muted/60 rounded-xl text-xs text-foreground/80 space-y-1">
                  <div className="flex justify-between">
                    <span>Donation:</span>
                    <strong className="font-heading text-sm">₹{selectedAmount.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between text-primary font-medium">
                    <span>Eligible Exemption:</span>
                    <span>50%</span>
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 rounded-full shadow-gold hover:scale-105 transition-all text-sm"
                >
                  <Link 
                    to="/donate" 
                    state={{ prefilledAmount: selectedAmount, cause: currentTier.badge }}
                    className="flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Donate ₹{selectedAmount.toLocaleString('en-IN')} Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <p className="text-[11px] text-muted-foreground">
                  Instant 80G digital receipt sent via email/WhatsApp.
                </p>
              </div>

            </div>
          </div>

          {/* Trust Footnote */}
          <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-3">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              100% of public donations go directly to field programs
            </span>
            <span className="flex items-center gap-1.5">
              <Receipt className="w-3.5 h-3.5 text-primary" />
              Verified Bank & UPI Direct Transfer
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactCalculator;