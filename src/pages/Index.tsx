import React from 'react';
import { Helmet } from 'react-helmet-async';
import CircularNav from '@/components/CircularNav';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import RadialPrograms from '@/components/RadialPrograms';
import ImpactStories from '@/components/ImpactStories';
import DonationCircle from '@/components/DonationCircle';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Seva Samarpit Foundation | Circle of Seva - Transforming Lives Across India</title>
        <meta 
          name="description" 
          content="Join Seva Samarpit Foundation's circle of service. Transforming lives through healthcare, education, women empowerment, and rural development across India since 2009." 
        />
        <meta name="keywords" content="NGO India, charity, seva, volunteer, donate, healthcare, education, women empowerment, rural development, nonprofit, Indian NGO, social welfare" />
        <link rel="canonical" href="https://sevasamarpit.org" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Seva Samarpit Foundation | Circle of Seva - Transforming Lives" />
        <meta property="og:description" content="Join our circle of service and create ripples of change that touch countless lives across India. 50,000+ lives transformed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sevasamarpit.org" />
        <meta property="og:image" content="https://sevasamarpit.org/og-image.jpg" />
        <meta property="og:site_name" content="Seva Samarpit Foundation" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seva Samarpit Foundation | Circle of Seva" />
        <meta name="twitter:description" content="Join our circle of service. 50,000+ lives transformed across 120 villages in India." />
        <meta name="twitter:image" content="https://sevasamarpit.org/twitter-image.jpg" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Seva Samarpit Foundation",
            "alternateName": "Circle of Seva",
            "description": "Transforming lives through healthcare, education, women empowerment, and rural development across India since 2009.",
            "url": "https://sevasamarpit.org",
            "logo": "https://sevasamarpit.org/logo.png",
            "foundingDate": "2009",
            "areaServed": "India",
            "sameAs": [
              "https://facebook.com/sevasamarpit",
              "https://instagram.com/sevasamarpit",
              "https://twitter.com/sevasamarpit",
              "https://linkedin.com/company/sevasamarpit"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Gandhi Road, Connaught Place",
              "addressLocality": "New Delhi",
              "addressRegion": "Delhi",
              "addressCountry": "IN",
              "postalCode": "110001"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-98765-43210",
              "contactType": "customer service",
              "email": "seva@samarpitfoundation.org",
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>
        
        {/* Structured Data - WebSite with Search */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Seva Samarpit Foundation",
            "url": "https://sevasamarpit.org",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://sevasamarpit.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <CircularNav />
      
      <main>
        <HeroSection />
        <StatsSection />
        <RadialPrograms />
        <ImpactStories />
        <DonationCircle />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
