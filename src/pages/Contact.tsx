import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import MandalaPattern from '@/components/MandalaPattern';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Reach Out to Seva Samarpit Foundation</title>
        <meta name="description" content="Contact Seva Samarpit Foundation in New Delhi. Call +91 98765 43210, email seva@samarpitfoundation.org, or visit our office. We respond within 24 hours." />
        <meta name="keywords" content="contact NGO, Seva Samarpit address, nonprofit contact, charity helpline, volunteer inquiry, partnership contact" />
        <link rel="canonical" href="https://sevasamarpit.org/contact" />
        
        <meta property="og:title" content="Contact Seva Samarpit Foundation" />
        <meta property="og:description" content="Get in touch with us. We're here to answer your questions and welcome you to our circle of seva." />
        <meta property="og:url" content="https://sevasamarpit.org/contact" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Contact Us | Seva Samarpit Foundation" />
        <meta name="twitter:description" content="Reach out to us. We respond within 24 hours." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Seva Samarpit Foundation",
            "description": "Get in touch with our team for inquiries, partnerships, or volunteer opportunities.",
            "url": "https://sevasamarpit.org/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Seva Samarpit Foundation",
              "telephone": "+91-98765-43210",
              "email": "seva@samarpitfoundation.org",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Gandhi Road, Connaught Place",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <CircularNav />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-earth overflow-hidden">
          <div className="absolute bottom-0 left-0 text-accent pointer-events-none">
            <MandalaPattern size={400} opacity={0.06} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Connect With Us
            </span>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              Let's Talk
            </h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground">
              Every conversation can spark a movement. Reach out to us.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card rounded-3xl p-8 shadow-elevated">
                <h2 className="font-heading text-2xl text-foreground mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                      <option>General Inquiry</option>
                      <option>Volunteer Opportunities</option>
                      <option>Corporate Partnership</option>
                      <option>Donation Query</option>
                      <option>Media & Press</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <Button variant="hero" size="xl" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                  <h3 className="font-heading text-xl mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-accent shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-body">Head Office</p>
                        <p className="text-primary-foreground/70 text-sm">
                          123 Gandhi Road, Connaught Place
                          <br />
                          New Delhi, India 110001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-accent shrink-0" size={20} />
                      <div>
                        <p className="font-body">+91 98765 43210</p>
                        <p className="text-primary-foreground/70 text-sm">Mon-Sat, 9am-6pm IST</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-accent shrink-0" size={20} />
                      <div>
                        <p className="font-body">seva@samarpitfoundation.org</p>
                        <p className="text-primary-foreground/70 text-sm">We respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-accent" size={20} />
                    <h3 className="font-heading text-xl text-foreground">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-48 rounded-2xl bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Map Integration</span>
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

export default Contact;
