import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  BookOpen, 
  Leaf, 
  Users, 
  Home, 
  Droplets, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import PressCoverage from '@/components/PressCoverage';
import QuickDonationBanner from '@/components/QuickDonationBanner';
import MandalaPattern from '@/components/MandalaPattern';
import { Button } from '@/components/ui/button';

// Assets
import healthcare1 from '@/assets/health/health1.jpeg';
import healthcare2 from '@/assets/health/health2.jpeg';
import healthcare3 from '@/assets/health/health3.jpeg';

import education1 from '@/assets/education/edu1.jpeg';
import education2 from '@/assets/education/edu2.jpeg';
import education3 from '@/assets/education/edu3.jpeg';

import women1 from '@/assets/womeneducation/women1.jpeg';
import women2 from '@/assets/womeneducation/women2.jpeg';
import women3 from '@/assets/womeneducation/women3.jpeg';

import environment1 from '@/assets/environment/environment1.jpeg';
import environment2 from '@/assets/environment/environment2.jpeg';
import environment3 from '@/assets/environment/environment3.jpeg';

import rural1 from '@/assets/rural/Rural.jpeg';
import rural2 from '@/assets/rural/rural1.jpeg';
import rural3 from '@/assets/rural/Rural2.jpeg';

import water1 from '@/assets/flood/flood1.jpeg';
import water2 from '@/assets/flood/flood2.jpeg';
import water3 from '@/assets/flood/flood3.jpeg';

interface ProgramDetail {
  id: string;
  icon: React.ElementType;
  title: string;
  hindiTitle: string;
  tagline: string;
  overview: string;
  stats: { value: string; label: string };
  images: string[];
  activities: string[];
  impactStatement: string;
  locationFocus: string;
}

const detailedPrograms: ProgramDetail[] = [
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Rural Healthcare & Mobile Clinics',
    hindiTitle: 'आरोग्य सेवा',
    tagline: 'Bridging the healthcare divide in unreached rural belts',
    overview: 'Healthcare is a fundamental human right, yet thousands in rural Bihar live hours away from basic medical care. We organize multi-specialty mobile clinics, free diagnosis camps, maternal health counseling, and distribute free life-saving medicines directly in village courtyards.',
    stats: { value: '15,000+', label: 'Patients Treated Annually' },
    images: [healthcare1, healthcare2, healthcare3],
    activities: [
      'General medicine & pediatric checkup camps',
      'Free eye examinations & optical glasses distribution',
      'Free prescription medicines & hypertension care',
      'Blood donation drives & rural hygiene awareness'
    ],
    impactStatement: 'Over 15,000 marginalized rural citizens receive certified medical consultation and medicines annually with zero out-of-pocket costs.',
    locationFocus: 'Patna, Vaishali, Nalanda, and flood-prone Diara clusters'
  },
  {
    id: 'education',
    icon: BookOpen,
    title: 'Inclusive Child Education & Pathshala',
    hindiTitle: 'शिक्षा अभियान',
    tagline: 'Empowering underprivileged children to write their own destiny',
    overview: 'Poverty should never steal a child’s right to learn. We run community learning centers (Pathshalas) for children of daily-wage laborers and agricultural workers, providing school uniforms, stationery bags, textbooks, and computer literacy classes.',
    stats: { value: '5,000+', label: 'Children Enrolled & Supported' },
    images: [education1, education2, education3],
    activities: [
      'Remedial coaching & evening learning centers',
      'Free distribution of school bags, notebooks & pens',
      'Special scholarship grants for bright girls',
      'Digital literacy & basic computer operations'
    ],
    impactStatement: 'Zero dropouts among enrolled students, with multiple beneficiaries progressing to higher secondary schools and college education.',
    locationFocus: 'Rural hamlets and underserved slum clusters across Bihar'
  },
  {
    id: 'women',
    icon: Users,
    title: 'Women Skill & Self-Reliance Centers',
    hindiTitle: 'महिला स्वावलंबन',
    tagline: 'Transforming rural women into confident economic contributors',
    overview: 'True empowerment happens when a woman earns her own dignified income. Our vocational training units teach professional stitching, tailoring, embroidery, and handicrafts, followed by distributing free sewing machines and establishing Self-Help Groups (SHGs).',
    stats: { value: '1,200+', label: 'Women Trained & Self-Employed' },
    images: [women1, women2, women3],
    activities: [
      'Certified tailoring and dress designing courses',
      'Free sewing machine gifts to graduated artisans',
      'Self-Help Group (SHG) formation & microfinance mentorship',
      'Legal rights, health awareness, and financial literacy'
    ],
    impactStatement: 'Women graduates earn an average of ₹6,000 to ₹10,000 monthly from home-based stitching, gaining domestic authority and respect.',
    locationFocus: 'Vaishali, Patna, Bhagalpur, and neighboring blocks'
  },
  {
    id: 'disaster',
    icon: Droplets,
    title: 'Flood Relief & Disaster Humanitarian Response',
    hindiTitle: 'आपदा प्रबंधन एवं राहत',
    tagline: 'Rapid boat rescue, emergency food rations, and medical aid in floods',
    overview: 'Northern Bihar faces devastating monsoon floods annually. When villages are cut off by floodwaters, our brave volunteers navigate boats into marooned areas, delivering dry rations (chuda, gur, sattu), clean drinking water, baby food, tarpaulins, and halogen tablets.',
    stats: { value: '100,000+', label: 'Emergency Ration Packets Distributed' },
    images: [water1, water2, water3],
    activities: [
      'Emergency wooden boat rescue & evacuation',
      'Nutritious dry food kit distribution to trapped families',
      'Water purification tablets and epidemic disease prevention',
      'Post-flood rehabilitation, blankets, and household supplies'
    ],
    impactStatement: 'Lifesaving humanitarian sustenance delivered to over 20,000 marooned households during peak flood inundations without delay.',
    locationFocus: 'Ganga & Kosi riverbank belt, Raghopur Diara, Vaishali, Samastipur'
  },
  {
    id: 'rural',
    icon: Home,
    title: 'Rural Infrastructure & Safe Drinking Water',
    hindiTitle: 'ग्राम विकास एवं जलापूर्ति',
    tagline: 'Creating clean, healthy, and self-sufficient village communities',
    overview: 'Sustainable village development requires clean drinking water, rural sanitation, road connectivity, and community leadership. We facilitate borewells, community cleaning drives, and bridge village grievances directly with local civic authorities.',
    stats: { value: '320+', label: 'Villages Transformed' },
    images: [rural1, rural2, rural3],
    activities: [
      'Deep borewell installations for clean drinking water',
      'Community sanitation & bio-waste management',
      'Solar streetlight recommendations and youth sports kits',
      'Gram Samiti councils for grassroots resolution'
    ],
    impactStatement: 'Improved living conditions and drastically reduced waterborne diseases across 320+ adopted village settlements.',
    locationFocus: 'Remote rural villages across Bihar and Jharkhand border'
  },
  {
    id: 'environment',
    icon: Leaf,
    title: 'Green Mission & Ecological Preservation',
    hindiTitle: 'पर्यावरण संरक्षण एवं पौधरोपण',
    tagline: 'Protecting Mother Earth through community afforestation',
    overview: 'Climate change strikes rural farmers first. Our green mission mobilizes youth, schools, and farmers to plant shade and fruit trees, clean riverbanks, and reduce single-use plastic waste for ecological balance.',
    stats: { value: '50,000+', label: 'Saplings Planted' },
    images: [environment1, environment2, environment3],
    activities: [
      'Mass plantation drives along village roads & school grounds',
      'River Ganga bank cleaning & plastic-free awareness',
      'Seed ball distribution to village youth clubs',
      'Workshops on organic farming and groundwater recharge'
    ],
    impactStatement: '50,000+ native trees planted with over 75% survival rate, establishing green biodiversity corridors in rural districts.',
    locationFocus: 'Patna riverfront, school campuses, and rural community lands'
  }
];

const OurWork: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('healthcare');
  const [isCircleNavOpen, setIsCircleNavOpen] = useState(false);

  const currentProgram = detailedPrograms.find(p => p.id === selectedTab) || detailedPrograms[0];
  const Icon = currentProgram.icon;

  return (
    <>
      <Helmet>
        <title>Our Work & Ground Missions | Seva Samarpit Foundation</title>
        <meta
          name="description"
          content="Explore the 6 core pillars of Seva Samarpit Foundation: Rural Healthcare, Child Education, Women Empowerment, Flood Relief, Rural Infrastructure, and Environment Protection across India."
        />
        <meta
          name="keywords"
          content="NGO work Bihar, flood relief Patna, free health camp NGO, women tailoring training Bihar, education for poor children, seva samarpit initiatives"
        />
        <link rel="canonical" href="https://www.sevasamarpitfoundation.in/our-work" />
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

              Direct Grassroots Impact • कर्म ही सेवा
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              Our Six Ground Missions of{' '}
              <span className="text-primary underline decoration-accent/60">Social Upliftment</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-xl font-body leading-relaxed max-w-3xl mx-auto">
              We translate compassion into measurable action. From providing emergency boat rescues in torrential floods to establishing women’s tailoring units, discover our on-ground interventions across Bihar and India.
            </p>
          </div>
        </section>

        {/* Interactive Mission Tab Navigation */}
        <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border py-4 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-hide py-1">
              {detailedPrograms.map((prog) => {
                const ProgIcon = prog.icon;
                const isSelected = selectedTab === prog.id;
                return (
                  <button
                    key={prog.id}
                    onClick={() => setSelectedTab(prog.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                      isSelected
                        ? 'bg-accent text-accent-foreground shadow-gold scale-105 font-bold'
                        : 'bg-muted/70 text-foreground hover:bg-muted hover:border-accent/30'
                    }`}
                  >
                    <ProgIcon className="w-4 h-4" />
                    <span>{prog.title.split('&')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Selected Mission Deep Dive */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="bg-card rounded-3xl p-6 sm:p-12 border-2 border-border shadow-elevated space-y-12">
              
              {/* Mission Header */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-soft shrink-0">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">
                        {currentProgram.hindiTitle}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground">
                      {currentProgram.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5 italic">
                      {currentProgram.tagline}
                    </p>
                  </div>
                </div>

                {/* Key Metric Badge */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 text-center min-w-[200px] shrink-0">
                  <div className="font-heading text-3xl font-bold text-primary">
                    {currentProgram.stats.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {currentProgram.stats.label}
                  </div>
                </div>
              </div>

              {/* Photo Album (3 Real Photos) */}
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>On-Ground Photographic Documentation</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentProgram.images.map((img, i) => (
                    <div 
                      key={i}
                      className="group relative h-64 rounded-2xl overflow-hidden border border-border shadow-soft bg-muted"
                    >
                      <img
                        src={img}
                        alt={`${currentProgram.title} photo ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-semibold">
                          Verified Field Action
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Activities Grid */}
              <div className="grid md:grid-cols-12 gap-8 pt-4">
                
                {/* Left Description */}
                <div className="md:col-span-7 space-y-4">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Operational Strategy & Context
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {currentProgram.overview}
                  </p>
                  
                  <div className="p-4 bg-muted/60 rounded-2xl border border-border space-y-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                      Measurable Impact Statement:
                    </span>
                    <p className="text-xs sm:text-sm text-foreground/90 italic">
                      "{currentProgram.impactStatement}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span><strong>Primary Operational Region:</strong> {currentProgram.locationFocus}</span>
                  </div>
                </div>

                {/* Right Checklist & Action */}
                <div className="md:col-span-5 bg-sand/50 rounded-2xl p-6 border border-border/80 space-y-5">
                  <h4 className="font-heading text-lg font-bold text-foreground">
                    Key Field Interventions:
                  </h4>

                  <div className="space-y-3">
                    {currentProgram.activities.map((act, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button 
                      asChild
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 rounded-full shadow-gold"
                    >
                      <Link to="/donate" state={{ cause: currentProgram.title }}>
                        Support {currentProgram.title.split('&')[0]}
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Media Coverage / Newspaper Archive Spotlight */}
        <PressCoverage />

        {/* Quick CTA */}
        <QuickDonationBanner />
      </main>

      <Footer />
    </>
  );
};

export default OurWork;