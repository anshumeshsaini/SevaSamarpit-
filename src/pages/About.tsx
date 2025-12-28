import React from 'react';
import { Helmet } from 'react-helmet-async';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import MandalaPattern from '@/components/MandalaPattern';

const timeline = [
  { year: '2009', title: 'The Seed is Planted', description: 'Founded by a group of passionate individuals in New Delhi with a vision to serve.' },
  { year: '2012', title: 'First Village Adopted', description: 'Began comprehensive development work in our first village in Rajasthan.' },
  { year: '2015', title: 'Women First Initiative', description: 'Launched empowerment programs reaching 1,000 women across 5 states.' },
  { year: '2018', title: 'Education Revolution', description: 'Established 25 learning centers providing quality education to rural children.' },
  { year: '2021', title: 'Healthcare Network', description: 'Mobile health clinics now serve 100+ remote villages monthly.' },
  { year: '2024', title: 'Circle Expands', description: '50,000 lives transformed across 120 villages with 2,500+ active volunteers.' },
];

const values = [
  { title: 'Seva', sanskrit: 'सेवा', description: 'Selfless service at the heart of everything we do.' },
  { title: 'Satya', sanskrit: 'सत्य', description: 'Truth and transparency in all our actions.' },
  { title: 'Sankalp', sanskrit: 'संकल्प', description: 'Unwavering commitment to our mission.' },
  { title: 'Sahyog', sanskrit: 'सहयोग', description: 'Collaboration and community partnership.' },
];

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Our Story & Mission | Seva Samarpit Foundation</title>
        <meta name="description" content="Discover Seva Samarpit Foundation's 15-year journey of compassion. Learn about our mission, values of Seva, Satya, Sankalp, and Sahyog, and milestones transforming India." />
        <meta name="keywords" content="about Seva Samarpit, NGO history, nonprofit mission, Indian charity story, seva values, volunteer organization" />
        <link rel="canonical" href="https://sevasamarpit.org/about" />
        
        <meta property="og:title" content="About Seva Samarpit Foundation - 15 Years of Compassion" />
        <meta property="og:description" content="Discover our journey from a small group of passionate individuals to a foundation transforming 50,000+ lives across 120 villages." />
        <meta property="og:url" content="https://sevasamarpit.org/about" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="About Seva Samarpit Foundation" />
        <meta name="twitter:description" content="15 years of compassionate service across India. Our story of transformation." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Seva Samarpit Foundation",
            "description": "Learn about our 15-year journey of compassion and service across India.",
            "url": "https://sevasamarpit.org/about",
            "mainEntity": {
              "@type": "NGO",
              "name": "Seva Samarpit Foundation",
              "foundingDate": "2009",
              "foundingLocation": "New Delhi, India"
            }
          })}
        </script>
      </Helmet>

      <CircularNav />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-earth overflow-hidden">
          <div className="absolute top-0 right-0 text-primary pointer-events-none">
            <MandalaPattern size={500} opacity={0.06} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              A Journey of
              <br />
              <span className="text-primary">Compassion</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              For over 15 years, Seva Samarpit Foundation has woven threads of hope, 
              service, and transformation across the fabric of rural India.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                Our Pillars
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                Values We Live By
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <span className="font-heading text-3xl text-primary group-hover:text-primary-foreground">
                      {value.sanskrit}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                Our Journey
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground">
                Milestones of Impact
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2 hidden md:block" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-accent font-heading text-2xl">{item.year}</span>
                    <h3 className="font-heading text-xl text-primary-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70">{item.description}</p>
                  </div>

                  {/* Circle Marker */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-accent items-center justify-center shrink-0 shadow-gold z-10">
                    <div className="w-4 h-4 rounded-full bg-accent-foreground" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                  Our Mission
                </span>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                  Completing the Circle
                  <br />
                  <span className="text-primary">of Humanity</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that true development is circular—what we give returns 
                  multiplied. Our mission is to create sustainable change that 
                  empowers communities to become agents of their own transformation.
                </p>
                <p className="text-muted-foreground">
                  Through healthcare, education, environmental conservation, and 
                  economic empowerment, we work alongside communities to break 
                  cycles of poverty and ignite cycles of progress.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-accent/20 animate-rotate-slow" />
                  </div>
                  <div className="absolute inset-8 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border border-primary/20 animate-rotate-reverse" />
                  </div>
                  <div className="absolute inset-16 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-primary/5 flex items-center justify-center">
                      <span className="font-heading text-6xl text-primary">सेवा</span>
                    </div>
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

export default About;
