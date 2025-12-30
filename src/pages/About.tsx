import React from 'react';
import { Helmet } from 'react-helmet-async';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import MandalaPattern from '@/components/MandalaPattern';

const timeline = [
  {
    year: '2016',
    title: 'Foundation & Registration',
    description:
      'Seva Samarpit Foundation was established with a commitment to social service and inclusive development, and registered under the Indian Societies Registration Act, 1860, creating a strong legal and governance framework for structured social interventions.',
  },
  {
    year: '2017',
    title: 'Community Outreach & Education',
    description:
      'Grassroots programs were initiated to support underprivileged children through distribution of study materials and awareness activities highlighting the importance of education.',
  },
  {
    year: '2018',
    title: 'Healthcare & Social Awareness',
    description:
      'Healthcare initiatives expanded via health awareness camps, hygiene promotion, and community outreach efforts to improve basic health indicators among vulnerable populations.',
  },
  {
    year: '2019',
    title: 'Employment & Skill Development',
    description:
      'Employment-oriented and skill development initiatives were launched to promote self-reliance and income generation opportunities for youth and women.',
  },
  {
    year: '2020',
    title: 'COVID-19 & Disaster Relief',
    description:
      'During the COVID-19 pandemic, the foundation led relief efforts including distribution of essential supplies, food support, and emergency community assistance.',
  },
  {
    year: '2021',
    title: 'Flood Relief & Rehabilitation',
    description:
      'Flood relief and rehabilitation activities were carried out to provide immediate support and long-term assistance to communities affected by natural calamities.',
  },
  {
    year: '2022',
    title: 'Women Empowerment & Capacity Building',
    description:
      'Focused programs for women empowerment were implemented, covering skill training, awareness on rights and health, and promotion of financial independence.',
  },
  {
    year: '2023',
    title: 'Environmental Protection & Sustainability',
    description:
      'The foundation expanded into environmental protection through tree plantation drives, cleanliness campaigns, and awareness programs on environmental conservation.',
  },
  {
    year: '2024',
    title: 'Institutional Strengthening & Partnerships',
    description:
      'Organizational capacity building was prioritized by strengthening internal processes, documentation, and establishing partnerships with CSR organizations, government agencies, and like-minded institutions.',
  },
  {
    year: '2025',
    title: 'Scaling Impact & CSR Alignment',
    description:
      'The foundation aims to scale its programs, enhance impact measurement, and align initiatives with CSR frameworks, government schemes, and Sustainable Development Goals (SDGs) to create long-term, measurable social impact.',
  },
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
        <meta
          name="description"
          content="Discover Seva Samarpit Foundation's journey of compassion. Learn about our mission, values of Seva, Satya, Sankalp, and Sahyog, and milestones transforming communities."
        />
        <meta
          name="keywords"
          content="about Seva Samarpit, NGO history, nonprofit mission, Indian charity story, seva values, volunteer organization"
        />
        <link rel="canonical" href="https://sevasamarpit.org/about" />

        <meta
          property="og:title"
          content="About Seva Samarpit Foundation - Journey of Compassion"
        />
        <meta
          property="og:description"
          content="Discover our journey from a dedicated group of social workers to a foundation working for education, healthcare, livelihood, women empowerment, and disaster relief."
        />
        <meta property="og:url" content="https://sevasamarpit.org/about" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="About Seva Samarpit Foundation" />
        <meta
          name="twitter:description"
          content="Years of compassionate service across India. Our story of social transformation."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Seva Samarpit Foundation',
            description:
              'Learn about our journey of compassion and service across India.',
            url: 'https://sevasamarpit.org/about',
            mainEntity: {
              '@type': 'NGO',
              name: 'Seva Samarpit Foundation',
              foundingDate: '2016',
              foundingLocation: 'Patna, Bihar, India',
            },
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
              Since 2016, Seva Samarpit Foundation has been working with dedication and commitment to serve society through sustainable social development and community welfare.
            </p>
          </div>
        </section>

        {/* About NGO Text Section (added) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              About Seva Samarpit Foundation
            </h2>
            <p className="text-muted-foreground mb-4">
              Seva Samarpit Foundation is a non-governmental organization established in 2016 with a vision to serve society through dedicated and selfless efforts. The foundation is registered under the Indian Societies Registration Act, 1860, and works towards sustainable social development and community welfare.
            </p>
            <p className="text-muted-foreground mb-4">
              The organization is actively engaged in the fields of education, healthcare, employment generation, flood and disaster relief, environmental protection, and women empowerment. Through its programs and initiatives, Seva Samarpit Foundation strives to uplift underprivileged communities, promote awareness, and create opportunities for a better quality of life.
            </p>
            <p className="text-muted-foreground mb-4">
              Under the leadership of President Mr. Sunil Kumar and Secretary Ms. Sonal Singh, the foundation has been guided by a strong commitment to social service and humanitarian values. Their leadership has played a key role in shaping the foundation’s mission to serve society with integrity, compassion, and dedication.
            </p>
            <p className="text-muted-foreground">
              Driven by the principles of seva (service) and samarpan (dedication), Seva Samarpit Foundation continues to work towards building an inclusive, empowered, and socially responsible nation.
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
                  <h3 className="font-heading text-2xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                Purpose & Direction
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                Mission & Vision
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="p-8 rounded-3xl bg-card shadow-soft">
                <h3 className="font-heading text-2xl text-primary mb-4">Mission</h3>
                <p className="text-muted-foreground mb-4">
                  The mission of Seva Samarpit Foundation is to contribute to inclusive
                  and sustainable development by implementing need-based, scalable, and
                  community-driven interventions in the areas of education, healthcare,
                  livelihood and employment generation, disaster and flood relief,
                  environmental protection, and women empowerment.
                </p>
                <p className="text-muted-foreground">
                  The foundation is committed to strengthening social infrastructure,
                  improving access to essential services, and supporting vulnerable
                  populations through transparent, accountable, and outcome-oriented
                  programs aligned with national development goals and CSR priorities.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-3xl bg-card shadow-soft">
                <h3 className="font-heading text-2xl text-primary mb-4">Vision</h3>
                <p className="text-muted-foreground mb-4">
                  The vision of Seva Samarpit Foundation is to create an equitable,
                  resilient, and self-reliant society where individuals and communities
                  have equal opportunities to grow socially and economically.
                </p>
                <p className="text-muted-foreground">
                  The foundation envisions contributing to national priorities by
                  promoting human development, empowering women, enhancing
                  environmental sustainability, strengthening disaster preparedness, and
                  fostering long-term social impact through partnerships with government
                  bodies, CSR institutions, and other stakeholders.
                </p>
              </div>
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
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <span className="text-accent font-heading text-2xl">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl text-primary-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70">
                      {item.description}
                    </p>
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
                  multiplied. Our mission is to create sustainable change that empowers
                  communities to become agents of their own transformation.
                </p>
                <p className="text-muted-foreground">
                  Through healthcare, education, environmental conservation, and
                  economic empowerment, we work alongside communities to break cycles
                  of poverty and ignite cycles of progress.
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
