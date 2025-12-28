import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, BookOpen, Leaf, Users, Home, Droplets, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import MandalaPattern from '@/components/MandalaPattern';

const programs = [
  {
    icon: Heart,
    title: 'Healthcare',
    tagline: 'Healing Communities',
    description: 'Free medical camps, mobile health clinics, and health awareness programs reaching remote villages where healthcare is a luxury.',
    stats: { value: '15,000+', label: 'Patients Served Annually' },
    color: 'from-red-500/20 to-red-600/10',
    iconBg: 'bg-red-500/10 text-red-600',
  },
  {
    icon: BookOpen,
    title: 'Education',
    tagline: 'Illuminating Futures',
    description: 'Learning centers, scholarship programs, and digital literacy initiatives bringing quality education to underprivileged children.',
    stats: { value: '5,000+', label: 'Students Enrolled' },
    color: 'from-blue-500/20 to-blue-600/10',
    iconBg: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Users,
    title: 'Women Empowerment',
    tagline: 'Rising Together',
    description: 'Skill development, self-help groups, and microfinance programs enabling women to become financially independent.',
    stats: { value: '3,000+', label: 'Women Empowered' },
    color: 'from-purple-500/20 to-purple-600/10',
    iconBg: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Leaf,
    title: 'Environment',
    tagline: 'Nurturing Earth',
    description: 'Tree plantation drives, sustainable farming practices, and environmental awareness creating greener communities.',
    stats: { value: '100,000+', label: 'Trees Planted' },
    color: 'from-green-500/20 to-green-600/10',
    iconBg: 'bg-green-500/10 text-green-600',
  },
  {
    icon: Home,
    title: 'Rural Development',
    tagline: 'Building Foundations',
    description: 'Infrastructure development, livelihood support, and community facilities transforming village landscapes.',
    stats: { value: '120+', label: 'Villages Developed' },
    color: 'from-amber-500/20 to-amber-600/10',
    iconBg: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: Droplets,
    title: 'Clean Water',
    tagline: 'Life-Giving Flow',
    description: 'Bore wells, water purification systems, and rainwater harvesting ensuring access to safe drinking water.',
    stats: { value: '50+', label: 'Water Projects' },
    color: 'from-cyan-500/20 to-cyan-600/10',
    iconBg: 'bg-cyan-500/10 text-cyan-600',
  },
];

const OurWork: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Programs - Healthcare, Education & Development | Seva Samarpit Foundation</title>
        <meta name="description" content="Explore our 6 impactful programs: Healthcare serving 15,000+ patients, Education for 5,000+ students, Women Empowerment, Environment, Rural Development & Clean Water." />
        <meta name="keywords" content="NGO programs India, healthcare initiatives, education programs, women empowerment NGO, rural development, clean water projects, environmental conservation" />
        <link rel="canonical" href="https://sevasamarpit.org/our-work" />
        
        <meta property="og:title" content="Our Programs - Making Impact Across India" />
        <meta property="og:description" content="Six interconnected programs forming a complete circle of sustainable development - Healthcare, Education, Women Empowerment, Environment, Rural Development & Clean Water." />
        <meta property="og:url" content="https://sevasamarpit.org/our-work" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Our Work | Seva Samarpit Foundation" />
        <meta name="twitter:description" content="6 impactful programs transforming communities across India." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Programs",
            "description": "Explore our programs in healthcare, education, women empowerment, environment, rural development, and clean water.",
            "url": "https://sevasamarpit.org/our-work",
            "hasPart": [
              {"@type": "Service", "name": "Healthcare", "description": "Free medical camps and mobile health clinics"},
              {"@type": "Service", "name": "Education", "description": "Learning centers and scholarship programs"},
              {"@type": "Service", "name": "Women Empowerment", "description": "Skill development and microfinance programs"},
              {"@type": "Service", "name": "Environment", "description": "Tree plantation and sustainable farming"},
              {"@type": "Service", "name": "Rural Development", "description": "Infrastructure and livelihood support"},
              {"@type": "Service", "name": "Clean Water", "description": "Bore wells and water purification systems"}
            ]
          })}
        </script>
      </Helmet>

      <CircularNav />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-earth overflow-hidden">
          <div className="absolute bottom-0 left-0 text-accent pointer-events-none">
            <MandalaPattern size={400} opacity={0.06} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              The Circle of Impact
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Our Work
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Six interconnected programs forming a complete circle of sustainable development, 
              each strengthening the other.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <article
                    key={index}
                    className="group relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative p-8">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-full ${program.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={28} />
                      </div>

                      {/* Content */}
                      <span className="text-accent text-sm font-body">{program.tagline}</span>
                      <h3 className="font-heading text-2xl text-foreground mt-1 mb-4">{program.title}</h3>
                      <p className="text-muted-foreground mb-6">{program.description}</p>

                      {/* Stats */}
                      <div className="pt-6 border-t border-border">
                        <span className="font-heading text-3xl text-primary">{program.stats.value}</span>
                        <p className="text-sm text-muted-foreground">{program.stats.label}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
              Be Part of the Circle
            </h2>
            <p className="max-w-xl mx-auto text-primary-foreground/80 mb-8">
              Your support completes the circle of impact. Join us as a volunteer, 
              donor, or partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/donate">
                  Donate Now
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/get-involved">
                  Volunteer With Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurWork;
