import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  BookOpen, 
  Users, 
  Droplets, 
  Home, 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Layers,
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Assets
import health1 from '@/assets/health/health1.jpeg';
import edu1 from '@/assets/education/edu1.jpeg';
import women1 from '@/assets/womeneducation/women1.jpeg';
import flood1 from '@/assets/flood/flood1.jpeg';
import rural1 from '@/assets/rural/Rural.jpeg';
import env1 from '@/assets/environment/environment1.jpeg';

export interface PillarItem {
  id: string;
  icon: React.ElementType;
  title: string;
  hindiTitle: string;
  category: string;
  image: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  keyPoints: string[];
  color: string;
  accentColor: string;
}

export const pillarsData: PillarItem[] = [
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Rural Healthcare & Mobile Clinics',
    hindiTitle: 'आरोग्य सेवा',
    category: 'Healthcare',
    image: health1,
    tagline: 'Delivering free medical diagnosis and critical medicines to the most isolated villages.',
    description: 'We organize free health checkup camps, eye screening, blood donation drives, and distribute life-saving medicines across rural Bihar where hospitals are hours away.',
    metric: '15,000+',
    metricLabel: 'Patients Treated Annually',
    keyPoints: ['Free general medicine & pediatrics', 'Mobile doctor units in remote hamlets', 'Preventative health & hygiene drives'],
    color: 'from-red-600/20 to-red-900/10',
    accentColor: 'text-red-600 bg-red-500/10 border-red-500/30'
  },
  {
    id: 'education',
    icon: BookOpen,
    title: 'Inclusive Child Education & Pathshala',
    hindiTitle: 'शिक्षा अभियान',
    category: 'Education',
    image: edu1,
    tagline: 'Illuminating futures by breaking generational poverty through quality education.',
    description: 'We operate village learning centers, provide school bags, textbooks, stationery kits, and sponsor scholarships so no child is forced to drop out due to poverty.',
    metric: '5,000+',
    metricLabel: 'Students Supported',
    keyPoints: ['Community learning centers', 'Textbooks & digital literacy classes', 'Special support for girl child education'],
    color: 'from-blue-600/20 to-blue-900/10',
    accentColor: 'text-blue-600 bg-blue-500/10 border-blue-500/30'
  },
  {
    id: 'women',
    icon: Users,
    title: 'Women Empowerment & Skill Centers',
    hindiTitle: 'महिला स्वावलंबन',
    category: 'Livelihood',
    image: women1,
    tagline: 'Equipping rural women with vocational trade skills and financial autonomy.',
    description: 'We set up tailoring and handicraft training centers, mentor women into self-help groups (SHGs), and provide free sewing machines to make them breadwinners.',
    metric: '1,200+',
    metricLabel: 'Women Financially Empowered',
    keyPoints: ['Certified sewing & tailoring courses', 'Self-Help Group (SHG) formation', 'Financial literacy & legal rights counseling'],
    color: 'from-amber-600/20 to-amber-900/10',
    accentColor: 'text-amber-600 bg-amber-500/10 border-amber-500/30'
  },
  {
    id: 'disaster',
    icon: Droplets,
    title: 'Flood Relief & Disaster Response',
    hindiTitle: 'आपदा प्रबंधन',
    category: 'Relief',
    image: flood1,
    tagline: 'Rapid emergency relief, dry ration distribution, and rescue in flood-ravaged belts.',
    description: 'During severe monsoon floods across Bihar, our brave volunteers reach marooned hamlets on rescue boats, distributing food, clean water, baby food, and tarpaulins.',
    metric: '100,000+',
    metricLabel: 'Emergency Ration Packets',
    keyPoints: ['Emergency boat rescue operations', 'Nutritious dry ration (chuda, sattu, gur)', 'Water purification and epidemic control'],
    color: 'from-cyan-600/20 to-cyan-900/10',
    accentColor: 'text-cyan-600 bg-cyan-500/10 border-cyan-500/30'
  },
  {
    id: 'rural',
    icon: Home,
    title: 'Rural Infrastructure & Clean Water',
    hindiTitle: 'ग्राम विकास',
    category: 'Development',
    image: rural1,
    tagline: 'Transforming rural settlements into thriving, dignified, and self-sufficient communities.',
    description: 'We build community tube-wells, assist in village sanitation, solar street lighting, and coordinate with civic authorities to address infrastructure deficits.',
    metric: '320+',
    metricLabel: 'Villages Transformed',
    keyPoints: ['Clean safe drinking water installations', 'Community sanitization drives', 'Livelihood and cottage industry linkages'],
    color: 'from-emerald-600/20 to-emerald-900/10',
    accentColor: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/30'
  },
  {
    id: 'environment',
    icon: Leaf,
    title: 'Green Mission & Ecological Protection',
    hindiTitle: 'पर्यावरण संरक्षण',
    category: 'Environment',
    image: env1,
    tagline: 'Mass afforestation, clean river campaigns, and preserving Mother Earth for tomorrow.',
    description: 'We lead large-scale tree plantation drives, school eco-clubs, plastic-free riverbanks, and promote organic farming practices to protect our natural heritage.',
    metric: '50,000+',
    metricLabel: 'Saplings Planted',
    keyPoints: ['Community plantation drives', 'Riverbank conservation awareness', 'Youth environmental stewardship'],
    color: 'from-green-600/20 to-green-900/10',
    accentColor: 'text-green-600 bg-green-500/10 border-green-500/30'
  }
];

export const PillarsOfSeva: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'orbit'>('grid');
  const [selectedOrbitIndex, setSelectedOrbitIndex] = useState<number>(0);

  const filteredPillars = activeTab === 'all' 
    ? pillarsData 
    : pillarsData.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">

            Our Six Core Missions • षड्विध सेवा
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Pillars of Sustainable Transformation
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-body leading-relaxed">
            Every intervention is designed to empower, heal, and sustain. Explore how your support drives grassroots change where it matters most.
          </p>

          {/* View Mode Switcher */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-muted border border-border shadow-inner">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                viewMode === 'grid' 
                  ? 'bg-card text-foreground shadow-soft font-bold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span>Card Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('orbit')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                viewMode === 'orbit' 
                  ? 'bg-accent text-accent-foreground shadow-gold font-bold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '20s' }} />
              <span>Chakra Orbit View</span>
            </button>
          </div>
        </div>

        {/* ORBIT VIEW (Unique Circular Chakra Experience) */}
        {viewMode === 'orbit' && (
          <div className="max-w-5xl mx-auto mb-16 bg-card/60 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-border shadow-elevated">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Circular Hub Visual */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
                  
                  {/* Decorative orbital rings */}
                  <div className="absolute inset-4 rounded-full border border-dashed border-accent/40 animate-rotate-slow pointer-events-none" />
                  <div className="absolute inset-16 rounded-full border border-primary/20 animate-rotate-reverse pointer-events-none" />

                  {/* Center Emblem */}
                  <div className="relative z-10 w-28 h-28 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center text-center p-2 shadow-elevated border-2 border-accent">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-widest">Circle of</span>
                    <span className="font-heading text-lg font-bold">SEVA</span>
                    <span className="text-[9px] text-primary-foreground/75 mt-0.5">Click any node</span>
                  </div>

                  {/* Orbiting Pillar Nodes */}
                  {pillarsData.map((item, idx) => {
                    const total = pillarsData.length;
                    const angle = (idx * 360) / total - 90;
                    const radius = 135;
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;
                    const isSelected = selectedOrbitIndex === idx;
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedOrbitIndex(idx)}
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                        className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                          isSelected
                            ? 'bg-accent text-accent-foreground scale-125 ring-4 ring-accent/30 shadow-gold z-20'
                            : 'bg-card text-foreground hover:bg-primary/20 hover:scale-110 z-10'
                        }`}
                        title={item.title}
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Pillar Details Panel */}
              <div className="lg:col-span-6 space-y-4">
                {(() => {
                  const sel = pillarsData[selectedOrbitIndex];
                  const Icon = sel.icon;
                  return (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${sel.accentColor}`}>
                          {sel.category}
                        </span>
                        <span className="text-xs text-muted-foreground font-heading italic">
                          {sel.hindiTitle}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                        {sel.title}
                      </h3>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {sel.description}
                      </p>

                      {/* Photo preview */}
                      <div className="h-44 w-full rounded-2xl overflow-hidden border border-border shadow-soft">
                        <img 
                          src={sel.image} 
                          alt={sel.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>

                      {/* Key highlights */}
                      <div className="space-y-2 pt-2">
                        {sel.keyPoints.map((pt, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full shadow-gold">
                          <Link to="/donate" state={{ cause: sel.title }}>
                            Support This Cause
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full">
                          <Link to="/our-work">
                            View All Field Work
                          </Link>
                        </Button>
                      </div>
                    </div>
                  );
                })()}
              </div>

            </div>
          </div>
        )}

        {/* CARD GRID VIEW (Standard Accessible View) */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-accent/50 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Pillar Icon Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-full bg-background/95 backdrop-blur-sm text-primary flex items-center justify-center shadow-soft">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Category Pill */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-secondary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                          {pillar.hindiTitle}
                        </span>
                      </div>

                      {/* Metric Tag on Image */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <div className="text-white text-xs font-medium">
                          <strong className="text-accent text-sm font-bold font-heading">{pillar.metric}</strong> {pillar.metricLabel}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-accent font-semibold tracking-wider uppercase mt-1">
                          {pillar.category}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Key highlights bullet points */}
                      <div className="space-y-1.5 pt-1 border-t border-border/60">
                        {pillar.keyPoints.slice(0, 2).map((pt, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            <span className="truncate">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="px-6 pb-6 pt-2 border-t border-border flex items-center justify-between">
                    <Link
                      to="/our-work"
                      className="text-xs font-semibold text-foreground/80 hover:text-primary flex items-center gap-1 group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Field Stories</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Button
                      asChild
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold rounded-full px-4 shadow-sm"
                    >
                      <Link to="/donate" state={{ cause: pillar.title }}>
                        Support
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Callout banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-3xl bg-secondary text-primary-foreground max-w-3xl mx-auto shadow-elevated border border-accent/20">
           
            <div className="text-center sm:text-left">
              <h4 className="font-heading text-lg font-bold text-primary-foreground">
                Want to partner on a specific CSR or rural initiative?
              </h4>
              <p className="text-xs text-primary-foreground/75 mt-0.5">
                We align with Schedule VII, Companies Act 2013 and offer complete impact audit reports.
              </p>
            </div>
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-6 shrink-0 shadow-gold">
              <Link to="/get-involved">
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PillarsOfSeva;