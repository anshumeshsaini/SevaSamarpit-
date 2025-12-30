import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, BookOpen, Leaf, Users, Home, Droplets, ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import MandalaPattern from '@/components/MandalaPattern';

// Import ALL 37 news cutting images with consistent naming (1.jpeg to 37.jpeg)
import news1 from '../assets/news/1.jpeg';
import news2 from '../assets/news/2.jpeg';
import news3 from '../assets/news/3.jpeg';
import news4 from '../assets/news/4.jpeg';
import news5 from '../assets/news/5.jpeg';
import news6 from '../assets/news/6.jpeg';
import news7 from '../assets/news/7.jpeg';
import news8 from '../assets/news/8.jpeg';
import news9 from '../assets/news/9.jpeg';
import news10 from '../assets/news/10.jpeg';
import news11 from '../assets/news/11.jpeg';
import news12 from '../assets/news/12.jpeg';
import news13 from '../assets/news/13.jpeg';
import news14 from '../assets/news/14.jpeg';
import news15 from '../assets/news/15.jpeg';
import news16 from '../assets/news/16.jpeg';
import news17 from '../assets/news/17.jpeg';
import news18 from '../assets/news/18.jpeg';

import news20 from '../assets/news/20.jpeg';
import news21 from '../assets/news/21.jpeg';
import news22 from '../assets/news/22.jpeg';
import news23 from '../assets/news/23.jpeg';
import news24 from '../assets/news/24.jpeg';
import news25 from '../assets/news/25.jpeg';
import news26 from '../assets/news/26.jpeg';
import news27 from '../assets/news/27.jpeg';
import news28 from '../assets/news/28.jpeg';
import news29 from '../assets/news/29.jpeg';
import news30 from '../assets/news/30.jpeg';
import news31 from '../assets/news/31.jpeg';
import news32 from '../assets/news/32.jpeg';
import news33 from '../assets/news/33.jpeg';
import news34 from '../assets/news/34.jpeg';
import news35 from '../assets/news/35.jpeg';
import news36 from '../assets/news/36.jpeg';

// Import program images from assets folder structure
import healthcare1 from '../assets/health/health1.jpeg';
import healthcare2 from '../assets/health/health2.jpeg';
import healthcare3 from '../assets/health/health3.jpeg';
import education1 from '../assets/education/edu1.jpeg';
import education2 from '../assets/education/edu2.jpeg';
import education3 from '../assets/education/edu3.jpeg';
import women1 from '../assets/womeneducation/women1.jpeg';
import women2 from '../assets/womeneducation/women2.jpeg';
import women3 from '../assets/womeneducation/women3.jpeg';
import environment1 from '../assets/environment/environment1.jpeg';
import environment2 from '../assets/environment/environment2.jpeg';
import environment3 from '../assets/environment/environment3.jpeg';
import rural1 from '../assets/rural/Rural.jpeg';
import rural2 from '../assets/rural/rural1.jpeg';
import rural3 from '../assets/rural/Rural2.jpeg';
import water1 from '../assets/flood/flood1.jpeg';
import water2 from '../assets/flood/flood2.jpeg';
import water3 from '../assets/flood/flood3.jpeg';

const programs = [
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare',
    tagline: 'Healing Communities',
    description: 'Free medical camps, mobile health clinics, and health awareness programs reaching remote villages where healthcare is a luxury.',
    stats: { value: '15,000+', label: 'Patients Served Annually' },
    color: 'from-red-500/20 to-red-600/10',
    iconBg: 'bg-red-500/10 text-red-600',
    details: {
      overview: 'Comprehensive healthcare reaching the most underserved areas.',
      images: [healthcare1, healthcare2, healthcare3],
      impact: '15K+ patients annually across 50+ villages',
      activities: ['Mobile clinics', 'Free medical camps', 'Health awareness']
    }
  },
  {
    id: 'education',
    icon: BookOpen,
    title: 'Education',
    tagline: 'Illuminating Futures',
    description: 'Learning centers, scholarship programs, and digital literacy initiatives bringing quality education to underprivileged children.',
    stats: { value: '5,000+', label: 'Students Enrolled' },
    color: 'from-blue-500/20 to-blue-600/10',
    iconBg: 'bg-blue-500/10 text-blue-600',
    details: {
      overview: 'Quality education for underprivileged children.',
      images: [education1, education2,education3],
      impact: '5K+ students in 25 learning centers',
      activities: ['Scholarships', 'Digital literacy', 'Learning centers']
    }
  },
  {
    id: 'women',
    icon: Users,
    title: 'Women Empowerment',
    tagline: 'Rising Together',
    description: 'Skill development, self-help groups, and microfinance programs enabling women to become financially independent.',
    stats: { value: '3,000+', label: 'Women Empowered' },
    color: 'from-purple-500/20 to-purple-600/10',
    iconBg: 'bg-purple-500/10 text-purple-600',
    details: {
      overview: 'Financial independence through skill development.',
      images: [women1, women2, women3],
      impact: '3K+ women trained and employed',
      activities: ['Microfinance', 'Skill training', 'SHGs']
    }
  },
  {
    id: 'environment',
    icon: Leaf,
    title: 'Environment',
    tagline: 'Nurturing Earth',
    description: 'Tree plantation drives, sustainable farming practices, and environmental awareness creating greener communities.',
    stats: { value: '100,000+', label: 'Trees Planted' },
    color: 'from-green-500/20 to-green-600/10',
    iconBg: 'bg-green-500/10 text-green-600',
    details: {
      overview: 'Sustainable environment for future generations.',
      images: [environment1, environment2,environment3],
      impact: '100K+ trees across 30 districts',
      activities: ['Tree drives', 'Sustainable farming', 'Awareness']
    }
  },
  {
    id: 'rural',
    icon: Home,
    title: 'Rural Development',
    tagline: 'Building Foundations',
    description: 'Infrastructure development, livelihood support, and community facilities transforming village landscapes.',
    stats: { value: '120+', label: 'Villages Developed' },
    color: 'from-amber-500/20 to-amber-600/10',
    iconBg: 'bg-amber-500/10 text-amber-600',
    details: {
      overview: 'Transforming rural infrastructure.',
      images: [rural1, rural2, rural3,],
      impact: '120+ villages with new facilities',
      activities: ['Roads', 'Community halls', 'Livelihood']
    }
  },
  {
    id: 'Flood',
    icon: Droplets,
    title: 'Flood Relief',
    tagline: 'Hope After the Storm',
    description: 'Emergency rescue operations, food distribution, medical aid, and rehabilitation support for flood-affected communities.',
    stats: { value: '30+', label: 'Relief Operations' },
    color: 'from-blue-500/20 to-indigo-600/10',
    iconBg: 'bg-blue-500/10 text-blue-600',
    details: {
      overview: 'Immediate relief and long-term recovery for flood-hit regions.',
      images: [water1, water2,water3],
      impact: '30+ operations supporting 15K+ affected people',
      activities: [
        'Rescue & Evacuation',
        'Food & Essentials Distribution',
        'Medical Camps',
        'Shelter & Rehabilitation'
      ]
    }
  },
  
];

// SIMPLIFIED 37 NEWS CUTTINGS - only image data
const newsCuttings = [
  { id: 1, image: news1 },
  { id: 2, image: news2 },
  { id: 3, image: news3 },
  { id: 4, image: news4 },
  { id: 5, image: news5 },
  { id: 6, image: news6 },
  { id: 7, image: news7 },
  { id: 8, image: news8 },
  { id: 9, image: news9 },
  { id: 10, image: news10 },
  { id: 11, image: news11 },
  { id: 12, image: news12 },
  { id: 13, image: news13 },
  { id: 14, image: news14 },
  { id: 15, image: news15 },
  { id: 16, image: news16 },
  { id: 17, image: news17 },
  { id: 18, image: news18 },
  { id: 20, image: news20 },
  { id: 21, image: news21 },
  { id: 22, image: news22 },
  { id: 23, image: news23 },
  { id: 24, image: news24 },
  { id: 25, image: news25 },
  { id: 26, image: news26 },
  { id: 27, image: news27 },
  { id: 28, image: news28 },
  { id: 29, image: news29 },
  { id: 30, image: news30 },
  { id: 31, image: news31 },
  { id: 32, image: news32 },
  { id: 33, image: news33 },
  { id: 34, image: news34 },
  { id: 35, image: news35 },
  { id: 36, image: news36 },
];

const OurWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'news'>('work');
  const [selectedNewsImage, setSelectedNewsImage] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Our Programs & News - Seva Samarpit Foundation</title>
        <meta name="description" content="Explore our 6 impactful programs and 37 latest news cuttings from Healthcare, Education, Women Empowerment, Environment, Rural Development & Clean Water initiatives." />
        <meta name="keywords" content="NGO India programs, NGO news cuttings Bihar, Seva Samarpit Foundation news, rural development Bihar" />
        <link rel="canonical" href="https://sevasamarpit.org/our-work" />
      </Helmet>

      <CircularNav />

      <main className="pt-24">
        {/* Hero Section with Tab Slider */}
        <section className="relative py-20 md:py-32 bg-earth overflow-hidden">
          <div className="absolute bottom-0 left-0 text-accent pointer-events-none">
            <MandalaPattern size={400} opacity={0.06} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              The Circle of Impact
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Our Work
            </h1>
            
            {/* Tab Slider */}
            <div className="flex bg-card/50 backdrop-blur-sm rounded-full p-1 mx-auto max-w-md border border-border/50">
              <button
                onClick={() => setActiveTab('work')}
                className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'work'
                    ? 'bg-background text-foreground shadow-md scale-105'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Our Work
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'news'
                    ? 'bg-background text-foreground shadow-md scale-105'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Newspaper className="w-4 h-4 inline ml-1 mb-1" />
                News Cuttings (37)
              </button>
            </div>

            <p className={`max-w-2xl mx-auto text-lg text-muted-foreground mt-8 transition-opacity duration-500 ${
              activeTab === 'work' ? 'opacity-100' : 'opacity-0 h-8'
            }`}>
              Six interconnected programs forming a complete circle of sustainable development.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className={`py-20 bg-background transition-opacity duration-700 ${activeTab === 'work' ? 'block' : 'hidden'}`}>
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <Dialog key={program.id}>
                    <DialogTrigger asChild>
                      <article className="group relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer h-full">
                        <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="relative p-8 h-full flex flex-col">
                          <div className={`w-16 h-16 rounded-full ${program.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon size={28} />
                          </div>
                          <span className="text-accent text-sm font-body">{program.tagline}</span>
                          <h3 className="font-heading text-2xl text-foreground mt-1 mb-4 flex-1">{program.title}</h3>
                          <p className="text-muted-foreground mb-6 flex-1">{program.description}</p>
                          <div className="pt-6 border-t border-border">
                            <span className="font-heading text-3xl text-primary">{program.stats.value}</span>
                            <p className="text-sm text-muted-foreground">{program.stats.label}</p>
                          </div>
                        </div>
                      </article>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
                      <DialogHeader className="p-8 border-b">
                        <DialogTitle className="text-3xl font-heading">{program.title}</DialogTitle>
                      </DialogHeader>
                      <div className="grid lg:grid-cols-2 h-[500px] p-8 gap-8">
                        <div className="space-y-4">
                          <img 
                            src={program.details.images[0]?.src || program.details.images[0]} 
                            alt={program.title}
                            className="w-full h-64 object-cover rounded-2xl shadow-lg"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            {program.details.images.slice(1).map((img: any, i: number) => (
                              <img 
                                key={i}
                                src={img.src || img}
                                alt={`${program.title} ${i+1}`}
                                className="w-full h-32 object-cover rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="space-y-6 pr-4 overflow-y-auto">
                          <div>
                            <h4 className="font-heading text-xl mb-2 text-primary">{program.stats.value}</h4>
                            <p className="text-muted-foreground">{program.stats.label}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-lg mb-3">Overview</h5>
                            <p className="text-muted-foreground">{program.details.overview}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-lg mb-3">Key Activities</h5>
                            <ul className="space-y-2">
                              {program.details.activities.map((activity: string, i: number) => (
                                <li key={i} className="flex items-center text-accent">
                                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-4 border-t">
                            <Button asChild className="w-full">
                              <Link to={`/programs/${program.id}`}>Learn More <ArrowRight className="ml-2" /></Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>
          </div>
        </section>

        {/* News Cuttings Section - SIMPLIFIED IMAGE GRID WITH MODAL */}
        <section className={`py-20 bg-background transition-opacity duration-700 ${activeTab === 'news' ? 'block' : 'hidden'}`}>
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsCuttings.map((news) => (
                <Dialog key={news.id} open={selectedNewsImage === news.image.src} onOpenChange={() => setSelectedNewsImage(null)}>
                  <DialogTrigger asChild>
                    <article className="group bg-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 border hover:border-accent/50 cursor-pointer">
                      <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={news.image} 
                          alt={`News cutting ${news.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </article>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                    <div className="h-[80vh] w-full flex items-center justify-center p-8 bg-black">
                      <img 
                        src={selectedNewsImage || ''} 
                        alt="Full size news cutting"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/news">View All News Cuttings</Link>
              </Button>
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
              Your support completes the circle of impact. Join us as a volunteer, donor, or partner.
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
