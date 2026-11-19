import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  MapPin, 
  Users, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Droplets,
  CheckCircle2,
  FileText,
  Activity,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import BeneficiaryStories from '@/components/BeneficiaryStories';
import QuickDonationBanner from '@/components/QuickDonationBanner';
import MandalaPattern from '@/components/MandalaPattern';
import { Button } from '@/components/ui/button';

const impactStats = [
  { value: '20,000+', label: 'Lives Directly Transformed', desc: 'Through medical camps, literacy, and livelihood tools.', icon: Heart },
  { value: '320+', label: 'Villages & Hamlets Reached', desc: 'Covering flood-affected and backward rural blocks in Bihar.', icon: MapPin },
  { value: '15,000+', label: 'Patients Treated in Medical Camps', desc: 'Free doctor consultations, eye checkups & prescription drugs.', icon: ShieldCheck },
  { value: '5,000+', label: 'Underprivileged Children Supported', desc: 'Enrolled in community pathshalas with full school kits.', icon: BookOpen },
  { value: '1,200+', label: 'Women Vocational Graduates', desc: 'Certified in sewing and established as earning artisans.', icon: Sparkles },
  { value: '100,000+', label: 'Flood Emergency Meals & Rations', desc: 'Nutritious dry ration delivered by boats to cutoff hamlets.', icon: Droplets },
  { value: '2,200+', label: 'Dedicated Field Volunteers', desc: 'Active youth and doctors volunteering across Bihar.', icon: Users },
  { value: '10+ Years', label: 'Unbroken Grassroots Service', desc: 'Founded in 2016 under Indian Societies Act XXI of 1860.', icon: Award },
];

const districtsServed = [
  { name: 'Patna District', focus: 'Headquarters, Slum Pathshalas, Flood Relief Diara' },
  { name: 'Vaishali District', focus: 'Women Tailoring Centers, Rural Healthcare Camps' },
  { name: 'Bhagalpur District', focus: 'Child Literacy Centers & Youth Skill Training' },
  { name: 'Nalanda District', focus: 'Community Health Awareness & Eye Camps' },
  { name: 'Raghopur Diara (River Island)', focus: 'Intensive Boat Rescue & Flood Disaster Operations' },
  { name: 'Samastipur & Muzaffarpur', focus: 'Drinking Water Tube-wells & Afforestation Drives' }
];

const Impact: React.FC = () => {
  const [isCircleNavOpen, setIsCircleNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Impact & Core Leadership Dashboard | Seva Samarpit Foundation</title>
        <meta 
          name="description" 
          content="Explore the verified social impact metrics and leadership committee of Seva Samarpit Foundation. 20,000+ lives transformed across 320+ villages in Bihar, India." 
        />
        <meta 
          name="keywords" 
          content="NGO impact Bihar, Seva Samarpit leadership, Sunil Kumar NGO, Sonal Kumari, social audit, NGO transparent governance" 
        />
        <link rel="canonical" href="https://www.sevasamarpitfoundation.in/impact" />
      </Helmet>

      <Navbar onOpenCircleNav={() => setIsCircleNavOpen(true)} />
      <CircularNav isOpen={isCircleNavOpen} onClose={() => setIsCircleNavOpen(false)} />

      <main className="pt-28 md:pt-36">
        {/* Page Hero */}
        <section className="relative py-20 md:py-28 bg-earth overflow-hidden border-b border-border">
          <div className="absolute top-0 right-0 text-primary pointer-events-none opacity-20">
            <MandalaPattern size={650} opacity={0.12} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-accent" />
              Verified Social Audit • सामाजिक प्रभाव
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              Leadership Committed to{' '}
              <span className="text-primary underline decoration-accent/60">Measurable Outcomes</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-xl font-body leading-relaxed max-w-3xl mx-auto">
              Behind every initiative is an accountable leadership team and thousands of transformed lives. Explore our on-ground audit indicators, district reach, and the dedicated individuals driving the mission.
            </p>
          </div>
        </section>

        {/* 8 Impact KPI Cards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
                Decade Metrics (2016 - 2026)
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Numbers That Reflect Dignity
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-card rounded-3xl p-6 border border-border hover:border-gold/50 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>

                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                        {stat.label}
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {stat.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/60 text-[10px] text-accent font-semibold uppercase tracking-wider">
                      Verified Field Metric
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Core Committee & Leadership Team Section */}
        <TeamSection />

        {/* District Coverage & Geographic Reach */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Grassroots Coverage
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Priority Districts & Field Operational Belts
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                Our volunteers operate actively across remote, flood-vulnerable, and historically disadvantaged regions of Bihar.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {districtsServed.map((dist, i) => (
                <div 
                  key={i}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft space-y-2 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {dist.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {dist.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-sand/60 rounded-3xl border border-border text-center max-w-2xl mx-auto space-y-3">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-heading text-lg font-bold text-foreground">
                Transparent Accountability & Public Reporting
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                As a registered society under Act XXI of 1860, our accounts are scrutinized by certified Chartered Accountants annually. We maintain complete receipt records for every individual donor and corporate partner.
              </p>
              <div className="pt-2">
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-xs font-bold px-6">
                  <Link to="/contact">
                    Request Impact Audit Dossier
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* Beneficiary Stories */}
        <BeneficiaryStories />

        {/* Quick CTA */}
        <QuickDonationBanner />
      </main>

      <Footer />
    </>
  );
};

export default Impact;