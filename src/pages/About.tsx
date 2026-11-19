import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Award, 
  Users, 
  Target, 
  Compass, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight,
  FileText
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import TributeSection from '@/components/TributeSection';
import QuickDonationBanner from '@/components/QuickDonationBanner';
import MandalaPattern from '@/components/MandalaPattern';
import { Button } from '@/components/ui/button';

const timeline = [
  {
    year: '2016',
    title: 'Establishment & Registration',
    description:
      'Seva Samarpit Foundation was formally established and registered under the Indian Societies Registration Act XXI of 1860, establishing a solid institutional foundation for structured social intervention.',
  },
  {
    year: '2017',
    title: 'Grassroots Education & Literacy Outreach',
    description:
      'Launched village pathshalas and distributed free school bags, textbooks, and learning supplies to underprivileged children in remote hamlets.',
  },
  {
    year: '2018',
    title: 'Mobile Healthcare & Preventive Camps',
    description:
      'Organized multi-specialty mobile medical camps, eye screening, and distributed free medicines to elderly villagers with no hospital access.',
  },
  {
    year: '2019',
    title: 'Vocational Training & Women Skill Centers',
    description:
      'Inaugurated dedicated sewing, tailoring, and handicraft training centers to provide women with marketable trades and steady home income.',
  },
  {
    year: '2020',
    title: 'COVID-19 Emergency Relief Operations',
    description:
      'During nationwide lockdowns, our team distributed thousands of dry ration kits, hygiene supplies, masks, and emergency community aid.',
  },
  {
    year: '2021',
    title: 'Massive North Bihar Flood Relief',
    description:
      'Deployed volunteer rescue boats and delivered over 50,000 emergency food packets, potable water, and baby food across inundated districts.',
  },
  {
    year: '2022',
    title: 'Self-Help Groups (SHGs) & Financial Inclusion',
    description:
      'Organized rural women into self-help clusters, providing training in banking, savings, and distributing free sewing machines.',
  },
  {
    year: '2023',
    title: 'Afforestation & Ecological Sustainability',
    description:
      'Planted over 50,000 tree saplings in schools and rural communities, paired with clean riverbank and sanitation campaigns.',
  },
  {
    year: '2024',
    title: 'Institutional Strengthening & CSR Alliances',
    description:
      'Standardized reporting frameworks and expanded corporate CSR partnerships in accordance with Schedule VII of the Companies Act 2013.',
  },
  {
    year: '2025 - 2026+',
    title: 'Scaling Direct Grassroots Impact',
    description:
      'Expanding permanent healthcare wellness centers and digital classrooms to touch 50,000+ lives across Bihar and neighboring states.',
  },
];

const values = [
  { 
    title: 'Seva', 
    sanskrit: 'सेवा', 
    meaning: 'Selfless Service',
    description: 'We believe service is not charity, but our sacred duty to uphold human dignity with empathy and humility.' 
  },
  { 
    title: 'Satya', 
    sanskrit: 'सत्य', 
    meaning: 'Truth & Transparency',
    description: 'Absolute fiscal accountability, open audits, and integrity in every rupee received and spent.' 
  },
  { 
    title: 'Sankalp', 
    sanskrit: 'संकल्प', 
    meaning: 'Resolute Dedication',
    description: 'Unwavering determination to reach the most remote, forgotten hamlets regardless of physical hardship.' 
  },
  { 
    title: 'Sahyog', 
    sanskrit: 'सहयोग', 
    meaning: 'Collective Action',
    description: 'Empowering communities through self-reliance, partnering with citizens, doctors, and civic institutions.' 
  },
];

const governancePoints = [
  {
    title: 'Societies Registration Act, 1860',
    detail: 'Registered under the Indian Societies Registration Act XXI of 1860 with audited legal compliance.'
  },
  {
    title: 'Section 80G & 12A Certified',
    detail: 'All donations enjoy 50% tax exemption under Section 80G of the Income Tax Act, 1961.'
  },
  {
    title: 'NITI Aayog NGO Darpan',
    detail: 'Officially registered on the Government of India NITI Aayog NGO Darpan portal.'
  },
  {
    title: 'CSR Schedule VII Compliant',
    detail: 'Eligible for Corporate Social Responsibility funding aligned with UN Sustainable Development Goals (SDGs).'
  }
];

const About: React.FC = () => {
  const [isCircleNavOpen, setIsCircleNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About Us - Story, Vision & Governance | Seva Samarpit Foundation</title>
        <meta
          name="description"
          content="Learn about Seva Samarpit Foundation, an Indian NGO established in 2016. Discover our journey, 4 pillars of Seva, Satya, Sankalp, Sahyog, leadership, and legal credentials."
        />
        <meta
          name="keywords"
          content="about Seva Samarpit Foundation, NGO story, Sunil Kumar NGO, Sonal Kumari Patna, 80G NGO Bihar, registered society 1860, charity governance"
        />
        <link rel="canonical" href="https://www.sevasamarpitfoundation.in/about" />
      </Helmet>

      <Navbar onOpenCircleNav={() => setIsCircleNavOpen(true)} />
      <CircularNav isOpen={isCircleNavOpen} onClose={() => setIsCircleNavOpen(false)} />

      <main className="pt-28 md:pt-36">
        {/* Page Hero */}
        <section className="relative py-20 md:py-28 bg-earth overflow-hidden border-b border-border">
          <div className="absolute top-0 right-0 text-primary pointer-events-none opacity-20">
            <MandalaPattern size={600} opacity={0.12} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 shadow-sm">

              Our Sacred Heritage & Identity
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              A Decadelong Journey of{' '}
              <span className="text-primary underline decoration-accent/60">Selfless Service</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-xl font-body leading-relaxed max-w-3xl mx-auto">
              Founded in 2016 and registered under the Societies Registration Act, 1860, <strong>Seva Samarpit Foundation</strong> is driven by pure compassion, transparency, and relentless grassroots action for marginalized communities.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-foreground/80">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Estd. 2016
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 80G & 12A Certified
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 320+ Villages Reached
              </span>
            </div>
          </div>
        </section>

        {/* Narrative & Leadership Foundation */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed text-base sm:text-lg font-body">
                <span className="text-xs font-bold text-accent uppercase tracking-widest block">
                  Genesis & Institutional Mission
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                  Where Compassion Meets Ground Reality
                </h2>

                <p>
                  <strong>Seva Samarpit Foundation</strong> was born out of a profound realization: millions of families across rural India live without basic preventative healthcare, quality elementary education, or disaster preparedness.
                </p>

                <p>
                  Guided by <strong>National President Mr. Sunil Kumar</strong> and <strong>Secretary Ms. Sonal Kumari</strong>, our organization has evolved from a small band of compassionate volunteers into an organized, accountable institution capable of mobilizing immediate flood rescue, operating free mobile health clinics, and setting up vocational skill centers.
                </p>

                <p className="text-sm sm:text-base text-muted-foreground">
                  We reject the concept of passive charity. Instead, we invest in women’s self-reliance, children’s literacy, and ecological resilience so that communities become independent guardians of their own destiny.
                </p>

                <div className="pt-2">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full shadow-gold">
                    <Link to="/our-work">
                      Explore Our 6 Ground Pillars
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Stat & Credentials Box */}
              <div className="lg:col-span-5 bg-card rounded-3xl p-8 border-2 border-border shadow-elevated space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold">Verified Governance</h3>
                    <p className="text-xs text-muted-foreground">Highest Tier Legal & Fiscal Compliance</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {governancePoints.map((gov, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        {gov.title}
                      </h4>
                      <p className="text-xs text-muted-foreground pl-5 leading-normal">
                        {gov.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border text-center">
                  <p className="text-[11px] text-muted-foreground italic">
                    Annual audited financial statements and FCRA/CSR documentation available upon verified request.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tribute Section to Founder */}
        <TributeSection />

        {/* 4 Pillars of Vedic Philosophy */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                <Compass className="w-3.5 h-3.5 text-accent" />
                Ethical Philosophy • चतुर्विध मूल्य
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
                Values That Anchor Our Service
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg font-body leading-relaxed">
                Our actions are guided by ancient timeless principles that treat service to humanity as the ultimate worship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="group bg-card rounded-3xl p-8 border border-border hover:border-gold/50 shadow-soft hover:shadow-elevated transition-all duration-300 text-center flex flex-col justify-between"
                >
                  <div>
                    <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <span className="font-heading text-4xl font-bold text-primary group-hover:text-primary-foreground">
                        {val.sanskrit}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                      {val.title}
                    </h3>
                    <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-3">
                      {val.meaning}
                    </p>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-primary/70 font-medium">
                    Foundation Principle #{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Detailed Cards */}
        <section className="py-20 bg-muted/60">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Mission Card */}
              <div className="bg-card rounded-3xl p-8 sm:p-10 border border-border shadow-soft space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  Our Mission • उद्देश्य
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  To contribute to inclusive, equitable, and sustainable human development by executing need-based, measurable, and community-owned interventions across healthcare, elementary education, disaster relief, environmental preservation, and women empowerment.
                </p>
                <div className="pt-2 text-xs text-primary font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Aligned with National Priorities & UN SDGs</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-card rounded-3xl p-8 sm:p-10 border border-border shadow-soft space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  Our Vision • संकल्प
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  To build a resilient, self-reliant, and socially conscious society where every individual has equal opportunity to live with health, education, and economic security, free from systemic vulnerability.
                </p>
                <div className="pt-2 text-xs text-primary font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Dignity, Autonomy & Justice for All</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Decadelong Timeline (2016 - 2026+) */}
        <section className="py-20 md:py-28 bg-secondary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                <Award className="w-3.5 h-3.5 text-accent" />
                Milestones of Impact • विकास यात्रा
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-4">
                10 Years of Grassroots Groundwork
              </h2>
              <p className="text-primary-foreground/75 text-base sm:text-lg font-body leading-relaxed">
                Trace our key operational milestones from our foundation in 2016 through a decade of disaster response, medical camps, and community empowerment.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />

              <div className="space-y-10">
                {timeline.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div 
                      key={idx}
                      className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 ${
                        isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Card */}
                      <div className={`pl-10 sm:pl-0 flex-1 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent font-heading text-lg font-bold mb-2">
                          {item.year}
                        </span>
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-primary-foreground/75 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Timeline Center Node */}
                      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center shadow-gold z-10 text-xs">
                        {idx + 1}
                      </div>

                      {/* Spacer */}
                      <div className="flex-1 hidden sm:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Quick CTA */}
        <QuickDonationBanner />
      </main>

      <Footer />
    </>
  );
};

export default About;