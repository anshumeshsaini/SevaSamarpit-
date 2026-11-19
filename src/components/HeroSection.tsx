import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
  Droplets,
  Calendar,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import MandalaPattern from './MandalaPattern';

// Import real photos from assets
import healthImg from '@/assets/health/health1.jpeg';
import eduImg from '@/assets/education/edu1.jpeg';
import womenImg from '@/assets/womeneducation/women1.jpeg';
import floodImg from '@/assets/flood/flood1.jpeg';
import envImg from '@/assets/environment/environment1.jpeg';
import ruralImg from '@/assets/rural/Rural.jpeg';

const slides = [
  {
    image: floodImg,
    tag: 'Disaster & Flood Relief',
    title: 'Emergency Flood Relief Across Bihar',
    desc: 'Delivering ration packets, clean drinking water, and boat medical support to marooned villages.',
    metric: '100,000+ Food Packets'
  },
  {
    image: healthImg,
    tag: 'Free Rural Healthcare',
    title: 'Mobile Clinics & Medicine Camps',
    desc: 'Bringing certified doctors and free essential medicines directly to marginalized families.',
    metric: '15,000+ Patients Treated'
  },
  {
    image: eduImg,
    tag: 'Child Education',
    title: 'Pathshala & Learning Support',
    desc: 'Providing school kits, digital classrooms, and scholarships to bright underprivileged students.',
    metric: '5,000+ Children Enrolled'
  },
  {
    image: womenImg,
    tag: 'Women Empowerment',
    title: 'Skill Centers & Sewing Units',
    desc: 'Empowering rural women with certified vocational skills, tools, and financial independence.',
    metric: '1,200+ Women Certified'
  },
  {
    image: envImg,
    tag: 'Green Mission',
    title: 'Afforestation & Clean Villages',
    desc: 'Community-led tree planting campaigns and environmental cleanliness programs.',
    metric: '50,000+ Saplings Planted'
  }
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-earth pt-32 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Sacred Mandala Geometries */}
      <div className="absolute top-0 right-0 text-primary pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <MandalaPattern size={900} opacity={0.07} />
      </div>
      <div className="absolute bottom-0 left-0 text-accent pointer-events-none transform -translate-x-1/4 translate-y-1/4">
        <MandalaPattern size={750} opacity={0.06} />
      </div>

      {/* Radial ambient glow overlay */}
      <div className="absolute inset-0 bg-radial pointer-events-none" />

      {/* Floating subtle gold particle effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Vision & Action */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>Registered NGO Under Indian Societies Act, 1860 • 80G Verified</span>
            </div>

            {/* Sacred Motto */}
            <p className="font-heading text-lg sm:text-xl text-accent font-semibold tracking-wider">
              "समर्पण से सेवा • सेवा से परिवर्तन"
            </p>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold text-foreground leading-[1.12] tracking-tight">
              Transforming Lives Through{' '}
              <span className="relative inline-block text-primary">
                Dedicated Seva
                <svg className="absolute left-0 -bottom-2 w-full h-3 text-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
              {' '}Across India.
            </h1>

            {/* Core Narrative */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-body">
              Established in 2016, <strong>Seva Samarpit Foundation</strong> is a grassroots movement serving underprivileged communities. Guided by President <em>Mr. Sunil Kumar</em> and Secretary <em>Ms. Sonal Singh</em>, we turn empathy into measurable on-ground impact in rural healthcare, child education, flood rescue, and women empowerment.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>80G Tax Exemption</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>320+ Villages Reached</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>100% Direct Relief</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-full shadow-gold hover:shadow-elevated transition-all duration-300 hover:scale-105 text-base"
              >
                <Link to="/donate" className="flex items-center justify-center gap-2.5">

                  <span>Donate & Complete Seva</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 rounded-full transition-all duration-300 text-base"
              >
                <Link to="/our-work">
                  Explore Our 6 Pillars
                </Link>
              </Button>
            </div>

            {/* Emergency & Quick Contact */}
            <div className="pt-2 flex items-center gap-4 text-xs text-muted-foreground">
              <span>Relief Helpline: <strong className="text-foreground">+91 79924 81330</strong></span>
              <span>•</span>
              <Link to="/get-involved" className="text-primary hover:underline font-medium">
                Join as Volunteer →
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Card Stage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent/30 via-primary/20 to-accent/20 rounded-3xl blur-xl" />

              {/* Main Visual Card */}
              <div className="relative bg-card rounded-3xl overflow-hidden border-2 border-border shadow-elevated">

                {/* Photo with Overlay */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm shadow-soft">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Impact Metric Floating Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-gold">
                      {slide.metric}
                    </span>
                  </div>

                  {/* Bottom details on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold leading-snug mb-1 drop-shadow-md">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2">
                      {slide.desc}
                    </p>
                  </div>
                </div>

                {/* Interactive Slider Indicators */}
                <div className="p-4 bg-card/95 border-t border-border flex items-center justify-between">
                  <div className="flex gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-accent' : 'w-2 bg-muted hover:bg-muted-foreground/40'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <Link
                    to="/our-work"
                    className="text-xs font-semibold text-primary hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    <span>View Ground Gallery</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Floating Testimonial Pill */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;