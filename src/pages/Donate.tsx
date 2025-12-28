import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Shield, Award, CheckCircle } from 'lucide-react';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import MandalaPattern from '@/components/MandalaPattern';

const amounts = [500, 1000, 2500, 5000, 10000, 25000];

const impactItems = [
  { amount: 500, impact: 'Provides meals for 10 children for a week' },
  { amount: 1000, impact: 'Funds medical checkup for 5 families' },
  { amount: 2500, impact: 'Sponsors education for 1 child for a month' },
  { amount: 5000, impact: 'Plants 50 trees in rural areas' },
  { amount: 10000, impact: 'Supports a self-help group for 3 months' },
  { amount: 25000, impact: 'Funds a village water purification system' },
];

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const currentImpact = impactItems.find(item => item.amount === selectedAmount)?.impact || 
    'Your contribution creates meaningful impact';

  return (
    <>
      <Helmet>
        <title>Donate Now - Transform Lives with 80G Tax Benefit | Seva Samarpit Foundation</title>
        <meta name="description" content="Make a tax-deductible donation to Seva Samarpit Foundation. 100% reaches beneficiaries. ₹500 feeds 10 children, ₹25,000 funds village water system. 80G certified." />
        <meta name="keywords" content="donate NGO India, 80G tax benefit donation, charity donation, support education, healthcare donation, rural development fund" />
        <link rel="canonical" href="https://sevasamarpit.org/donate" />
        
        <meta property="og:title" content="Donate to Seva Samarpit - Complete the Circle of Seva" />
        <meta property="og:description" content="Your seva transforms lives. 100% of donations reach beneficiaries. 80G tax exemption available. Join 2,500+ donors." />
        <meta property="og:url" content="https://sevasamarpit.org/donate" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Donate | Seva Samarpit Foundation" />
        <meta name="twitter:description" content="Transform lives with your donation. 80G tax benefit available." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DonateAction",
            "name": "Donate to Seva Samarpit Foundation",
            "description": "Support healthcare, education, and rural development across India",
            "url": "https://sevasamarpit.org/donate",
            "recipient": {
              "@type": "NGO",
              "name": "Seva Samarpit Foundation",
              "url": "https://sevasamarpit.org"
            },
            "potentialAction": {
              "@type": "DonateAction",
              "target": "https://sevasamarpit.org/donate"
            }
          })}
        </script>
      </Helmet>

      <CircularNav />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-earth overflow-hidden">
          <div className="absolute bottom-0 right-0 text-accent pointer-events-none">
            <MandalaPattern size={400} opacity={0.06} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Complete the Circle
            </span>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              Your Seva,
              <br />
              <span className="text-primary">Their Future</span>
            </h1>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Form */}
                <div className="lg:col-span-3 bg-card rounded-3xl p-8 shadow-elevated">
                  {/* Donation Type Toggle */}
                  <div className="flex gap-4 mb-8">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 rounded-full font-body text-sm transition-all ${
                        donationType === 'one-time'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      One-time Gift
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 py-3 rounded-full font-body text-sm transition-all ${
                        donationType === 'monthly'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      Monthly Seva
                    </button>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block font-heading text-lg text-foreground mb-4">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {amounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className={`py-4 rounded-xl font-body transition-all ${
                            selectedAmount === amount && !customAmount
                              ? 'bg-primary text-primary-foreground shadow-soft'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                      <input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        className="w-full pl-8 pr-4 py-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Impact Message */}
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 mb-8">
                    <div className="flex items-center gap-3">
                      <Heart className="text-accent" size={20} />
                      <p className="text-foreground text-sm">{currentImpact}</p>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <Button variant="hero" size="xl" className="w-full">
                    {donationType === 'monthly' ? 'Start Monthly Seva' : 'Complete Your Seva'}
                  </Button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-6 mt-6 text-muted-foreground">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield size={16} />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award size={16} />
                      <span>80G Tax Benefit</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} />
                      <span>Verified NGO</span>
                    </div>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                    <h3 className="font-heading text-xl mb-4">Why Donate?</h3>
                    <ul className="space-y-3 text-sm text-primary-foreground/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                        100% of donations reach beneficiaries
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                        80G tax exemption certificate provided
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                        Transparent impact reporting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                        15+ years of trusted service
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-card shadow-soft">
                    <h3 className="font-heading text-xl text-foreground mb-4">Need Help?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      For donations above ₹50,000 or CSR partnerships, contact us directly.
                    </p>
                    <p className="text-foreground text-sm">
                      📧 donate@samarpitfoundation.org
                      <br />
                      📞 +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Donate;
