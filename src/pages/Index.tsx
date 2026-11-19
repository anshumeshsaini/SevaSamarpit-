import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import CircularNav from '@/components/CircularNav';
import HeroSection from '@/components/HeroSection';
import LiveStatsMarquee from '@/components/LiveStatsMarquee';
import TributeSection from '@/components/TributeSection';
import PillarsOfSeva from '@/components/PillarsOfSeva';
import ImpactCalculator from '@/components/ImpactCalculator';
import PressCoverage from '@/components/PressCoverage';
import TeamSection from '@/components/TeamSection';
import BeneficiaryStories from '@/components/BeneficiaryStories';
import QuickDonationBanner from '@/components/QuickDonationBanner';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [isCircleNavOpen, setIsCircleNavOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Seva Samarpit Foundation | Dedicated to Service, Devoted to Humanity</title>
        <meta 
          name="description" 
          content="Seva Samarpit Foundation is a registered Indian NGO (Act XXI, 1860) transforming 20,000+ lives across rural Bihar and India through healthcare, child education, flood relief, and women empowerment." 
        />
        <meta name="keywords" content="NGO India, Seva Samarpit Foundation, Patna NGO, charity Bihar, rural healthcare camps, flood relief Bihar, women empowerment, free education NGO, donate 80G tax exemption" />
        <link rel="canonical" href="https://www.sevasamarpitfoundation.in/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Seva Samarpit Foundation | Transforming Lives Across India" />
        <meta property="og:description" content="Dedicated to grassroots social development through healthcare, child education, flood emergency relief, and women self-reliance. 20,000+ lives transformed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sevasamarpitfoundation.in/" />
        <meta property="og:site_name" content="Seva Samarpit Foundation" />
        
        {/* Structured Data - NGO Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Seva Samarpit Foundation",
            "alternateName": "Circle of Seva",
            "description": "Transforming lives through healthcare, education, women empowerment, disaster relief, and rural development across India since 2016.",
            "url": "https://www.sevasamarpitfoundation.in/",
            "foundingDate": "2016",
            "areaServed": "India",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "E-205, Basudeo Vihar Apartment, Nageshwar colony, Patna, Bihar 800001",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "addressCountry": "IN",
              "postalCode": "800001"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-79924-81330",
              "contactType": "general inquiries",
              "email": "sevasamarpitfoundaiton@gmail.com",
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>
      </Helmet>

      {/* Main Unified Header Navigation */}
      <Navbar onOpenCircleNav={() => setIsCircleNavOpen(true)} />

      {/* Interactive Seva Chakra Modal Navigator */}
      <CircularNav 
        isOpen={isCircleNavOpen} 
        onClose={() => setIsCircleNavOpen(false)} 
      />
      
      <main className="overflow-hidden">
        {/* 1. Re-imagined Immersive Hero */}
        <HeroSection />

        {/* 2. Dynamic Live Stats Marquee */}
        <LiveStatsMarquee />

        {/* 3. Tribute to Founder Late Shri Mundrika Prasad Mishra */}
        <TributeSection />

        {/* 4. Pillars of Seva (Card & Chakra Orbit View) */}
        <PillarsOfSeva />

        {/* 5. Interactive Tangible Impact Calculator */}
        <ImpactCalculator />

        {/* 6. Authentic Media & Press Recognition (Newspaper Archive) */}
        <PressCoverage limit={8} />

        {/* 7. Leadership & Core Committee */}
        <TeamSection />

        {/* 8. Beneficiary Testimonials & Grassroots Voices */}
        <BeneficiaryStories />

        {/* 9. Compelling Quick Donation Strip */}
        <QuickDonationBanner />
      </main>

      {/* Complete Footer */}
      <Footer />
    </>
  );
};

export default Index;