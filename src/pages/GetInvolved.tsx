import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Building2, Handshake, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import MandalaPattern from '@/components/MandalaPattern';

const opportunities = [
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our community of changemakers. Contribute your time and skills to meaningful causes.',
    cta: 'Apply Now',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Building2,
    title: 'Corporate Partnership',
    description: 'Align your CSR goals with impactful programs. Create shared value for communities.',
    cta: 'Partner With Us',
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Handshake,
    title: 'Fundraise',
    description: 'Start a campaign for a cause you care about. Rally your network for change.',
    cta: 'Start Campaign',
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Participate in seva camps, awareness drives, and community gatherings.',
    cta: 'View Events',
    color: 'bg-amber-500/10 text-amber-600',
  },
];

const GetInvolved: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Get Involved - Volunteer, Partner & Fundraise | Seva Samarpit Foundation</title>
        <meta name="description" content="Join 2,500+ volunteers making a difference. Volunteer opportunities, corporate CSR partnerships, fundraising campaigns, and community events across India." />
        <meta name="keywords" content="volunteer India, NGO volunteering, CSR partnership, fundraise for charity, community events, social work opportunities" />
        <link rel="canonical" href="https://sevasamarpit.org/get-involved" />
        
        <meta property="og:title" content="Get Involved - Be the Change You Wish to See" />
        <meta property="og:description" content="Multiple ways to join our circle of seva: volunteer, partner, fundraise, or participate in events." />
        <meta property="og:url" content="https://sevasamarpit.org/get-involved" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Get Involved | Seva Samarpit Foundation" />
        <meta name="twitter:description" content="Join 2,500+ volunteers. Multiple ways to make an impact." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Get Involved",
            "description": "Join our circle of seva through volunteering, partnerships, fundraising, or events.",
            "url": "https://sevasamarpit.org/get-involved",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Volunteer", "description": "Join our community of changemakers"},
                {"@type": "ListItem", "position": 2, "name": "Corporate Partnership", "description": "Align your CSR goals with impactful programs"},
                {"@type": "ListItem", "position": 3, "name": "Fundraise", "description": "Start a campaign for a cause you care about"},
                {"@type": "ListItem", "position": 4, "name": "Events", "description": "Participate in seva camps and community gatherings"}
              ]
            }
          })}
        </script>
      </Helmet>

      <CircularNav />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-earth overflow-hidden">
          <div className="absolute top-0 left-0 text-primary pointer-events-none">
            <MandalaPattern size={500} opacity={0.06} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Join the Circle
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Be the
              <br />
              <span className="text-primary">Change</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              There are many ways to complete the circle of seva. Find the path 
              that resonates with your spirit of giving.
            </p>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {opportunities.map((opp, index) => {
                const Icon = opp.icon;
                return (
                  <div
                    key={index}
                    className="group p-8 rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
                  >
                    <div className={`w-16 h-16 rounded-full ${opp.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="font-heading text-2xl text-foreground mb-3">{opp.title}</h3>
                    <p className="text-muted-foreground mb-6">{opp.description}</p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      {opp.cta}
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Volunteer Form CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
              Ready to Start?
            </h2>
            <p className="max-w-xl mx-auto text-primary-foreground/80 mb-8">
              Fill out our volunteer form and our team will reach out to match 
              you with the perfect opportunity.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GetInvolved;
