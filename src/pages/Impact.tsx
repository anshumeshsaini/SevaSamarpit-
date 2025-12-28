import React from 'react';
import { Helmet } from 'react-helmet-async';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import ImpactStories from '@/components/ImpactStories';
import MandalaPattern from '@/components/MandalaPattern';

const Impact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Impact Stories - Real Transformations | Seva Samarpit Foundation</title>
        <meta name="description" content="Read inspiring stories of transformation from 50,000+ beneficiaries. Real voices from villages across India sharing how Seva Samarpit changed their lives." />
        <meta name="keywords" content="NGO impact stories, charity success stories, community transformation, rural India stories, beneficiary testimonials, social impact" />
        <link rel="canonical" href="https://sevasamarpit.org/impact" />
        
        <meta property="og:title" content="Impact Stories - Voices of Transformation" />
        <meta property="og:description" content="Behind every number is a face. Read real stories from the communities we serve across India." />
        <meta property="og:url" content="https://sevasamarpit.org/impact" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Impact Stories | Seva Samarpit Foundation" />
        <meta name="twitter:description" content="Real stories of transformation from communities across India." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Impact Stories",
            "description": "Real stories of transformation from the communities we serve.",
            "url": "https://sevasamarpit.org/impact",
            "about": {
              "@type": "Thing",
              "name": "Social Impact",
              "description": "Stories of lives transformed through healthcare, education, and community development"
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
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Stories Over Stats
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Ripples of
              <br />
              <span className="text-primary">Transformation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Behind every number is a face. Behind every statistic is a story. 
              These are the voices from our circle of seva.
            </p>
          </div>
        </section>

        {/* Impact Stories Component */}
        <ImpactStories />

        {/* Additional Quote Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="font-heading text-3xl md:text-4xl text-foreground italic leading-relaxed">
                "The best way to find yourself is to lose yourself in the service of others."
              </blockquote>
              <cite className="block mt-6 text-accent font-body">— Mahatma Gandhi</cite>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Impact;
