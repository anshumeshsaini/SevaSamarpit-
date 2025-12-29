import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, ArrowRight, X } from 'lucide-react';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MandalaPattern from '@/components/MandalaPattern';

const Contact: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email body
    const subject = `Contact Form: ${formData.subject} - ${formData.name}`;
    const body = `
New Contact Form Submission!

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}

---
Seva Samarpit Foundation Contact Form
Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    // Encode for mailto
    const mailtoLink = `mailto:sevasamarpitfoundaiton@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Reset form and close dialog
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    setIsFormOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Reach Out to Seva Samarpit Foundation</title>
        <meta name="description" content="Contact Seva Samarpit Foundation in Patna, Bihar. Call +91 79924 81330, email sevasamarpitfoundaiton@gmail.com, or visit our office at Basudeo Vihar Apartment. We respond within 24 hours." />
        <meta name="keywords" content="contact NGO Patna, Seva Samarpit address, nonprofit Bihar, charity helpline, volunteer Patna, partnership contact" />
        <link rel="canonical" href="https://sevasamarpit.org/contact" />
        
        <meta property="og:title" content="Contact Seva Samarpit Foundation" />
        <meta property="og:description" content="Get in touch with us in Patna, Bihar. We're here to answer your questions and welcome you to our circle of seva." />
        <meta property="og:url" content="https://sevasamarpit.org/contact" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Contact Us | Seva Samarpit Foundation" />
        <meta name="twitter:description" content="Reach out to us in Patna. We respond within 24 hours." />
        
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
              "telephone": "+91-79924-81330",
              "email": "sevasamarpitfoundaiton@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "E-205, Basudeo Vihar Apartment, Nageshwar Colony",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800001",
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
              {/* Contact Form - Button Trigger */}
              <div className="bg-card rounded-3xl p-8 shadow-elevated">
                <h2 className="font-heading text-2xl text-foreground mb-6">Send us a message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  onClick={() => setIsFormOpen(true)}
                >
                  Open Contact Form
                  <ArrowRight className="ml-2" />
                </Button>
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
                          E-205, Basudeo Vihar Apartment, Nageshwar colony
                          <br />
                          Patna, Bihar 800001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-accent shrink-0" size={20} />
                      <div>
                        <p className="font-body">+91-79924 81330</p>
                        <p className="text-primary-foreground/70 text-sm">Mon-Sat, 9am-6pm IST</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-accent shrink-0" size={20} />
                      <div>
                        <p className="font-body">sevasamarpitfoundaiton@gmail.com</p>
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

                {/* Interactive Google Map */}
                <div className="relative rounded-2xl bg-muted overflow-hidden shadow-soft h-80 sm:h-96 lg:h-[420px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.256036176332!2d85.121992!3d25.611672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59005635afb9%3A0x99acd0be89532270!2sBasudeo%20Vihar%20Apartment!5e1!3m2!1sen!2sin!4v1767026873324!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Seva Samarpit Foundation - Basudeo Vihar Apartment, Patna"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Dialog */}
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] p-0">
            <DialogHeader className="p-8 border-b">
              <DialogTitle className="text-3xl font-heading text-center">
                Get In Touch
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      <SelectItem value="Volunteer Opportunities">Volunteer Opportunities</SelectItem>
                      <SelectItem value="Corporate Partnership">Corporate Partnership</SelectItem>
                      <SelectItem value="Donation Query">Donation Query</SelectItem>
                      <SelectItem value="Media & Press">Media & Press</SelectItem>
                      <SelectItem value="Event Collaboration">Event Collaboration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <div className="pt-4 flex gap-3 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    Send Message
                    <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
