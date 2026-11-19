import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import MandalaPattern from '@/components/MandalaPattern';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [isCircleNavOpen, setIsCircleNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in your name, email, and message.');
      return;
    }

    setIsSending(true);

    const subject = `Contact Form [${formData.subject}]: ${formData.name}`;
    const body = `
New Inquiry Received from Seva Samarpit Website
------------------------------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject / Category: ${formData.subject}
Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Message:
${formData.message}
    `.trim();

    const mailto = `mailto:sevasamarpitfoundaiton@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, '_blank');

    setTimeout(() => {
      setIsSending(false);
      toast.success('Your message draft has been opened in your email client. Thank you for reaching out!');
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Seva Samarpit Foundation - Patna, Bihar</title>
        <meta 
          name="description" 
          content="Get in touch with Seva Samarpit Foundation at E-205, Basudeo Vihar Apartment, Nageshwar Colony, Patna, Bihar. Call +91 79924 81330 or email sevasamarpitfoundaiton@gmail.com." 
        />
        <meta 
          name="keywords" 
          content="contact Seva Samarpit Foundation, Patna NGO phone number, NGO office Bihar, charity helpline Patna, volunteer contact" 
        />
        <link rel="canonical" href="https://www.sevasamarpitfoundation.in/contact" />
      </Helmet>

      <Navbar onOpenCircleNav={() => setIsCircleNavOpen(true)} />
      <CircularNav isOpen={isCircleNavOpen} onClose={() => setIsCircleNavOpen(false)} />

      <main className="pt-28 md:pt-36">
        {/* Page Hero */}
        <section className="relative py-20 md:py-28 bg-earth overflow-hidden border-b border-border">
          <div className="absolute top-0 right-0 text-primary pointer-events-none opacity-20">
            <MandalaPattern size={650} opacity={0.12} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 shadow-sm">

              Direct Communication • संपर्क सूत्र
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              We Are Always Here to{' '}
              <span className="text-primary underline decoration-accent/60">Listen & Serve</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-xl font-body leading-relaxed max-w-3xl mx-auto">
              Have questions about our medical camps, disaster relief, 80G tax exemptions, or CSR partnerships? Reach out directly to our team in Patna. We guarantee a thoughtful response within 24 hours.
            </p>
          </div>
        </section>

        {/* 4 Direct Contact Method Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Patna HQ */}
              <div className="bg-card rounded-3xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    Patna Headquarters
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    E-205, Basudeo Vihar Apartment, Nageshwar Colony, Boring Road / Kidwaipuri, Patna, Bihar 800001
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Nageshwar+Colony+Patna+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 pt-2 border-t border-border"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone Helpline */}
              <div className="bg-card rounded-3xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    Helpline & Relief Desk
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Call our official desk directly for emergency flood relief coordination or general queries.
                  </p>
                  <p className="text-sm font-bold text-foreground mt-2 font-mono">
                    +91 79924 81330
                  </p>
                </div>
                <a
                  href="tel:+917992481330"
                  className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 pt-2 border-t border-border"
                >
                  <span>Call Us Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Official Email */}
              <div className="bg-card rounded-3xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    Official Email
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    For CSR partnerships, institutional proposals, and 80G tax receipt inquiries.
                  </p>
                  <p className="text-xs font-bold text-foreground mt-2 break-all font-mono">
                    sevasamarpitfoundaiton@gmail.com
                  </p>
                </div>
                <a
                  href="mailto:sevasamarpitfoundaiton@gmail.com"
                  className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 pt-2 border-t border-border"
                >
                  <span>Send Direct Email</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct WhatsApp */}
              <div className="bg-card rounded-3xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Instant messaging for quick updates, volunteer signups, or donation receipt confirmation.
                  </p>
                  <p className="text-xs font-bold text-emerald-700 mt-2">
                    Available Mon - Sat (9:30 AM - 6:30 PM)
                  </p>
                </div>
                <a
                  href="https://wa.me/917992481330?text=Hello%20Seva%20Samarpit%20Foundation,%20I%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 pt-2 border-t border-border"
                >
                  <span>Start WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Form and Office Hours Section */}
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Form (7 Cols) */}
              <div className="lg:col-span-7 bg-card rounded-3xl p-6 sm:p-10 border-2 border-border shadow-elevated">
                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fill in the form below and we will get back to you promptly.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Subject / Inquiry Category *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm font-medium"
                    >
                      <option value="General Inquiry">General Inquiry / Information</option>
                      <option value="Donation & 80G Receipt">Donation & 80G Tax Exemption Receipt</option>
                      <option value="Corporate CSR Partnership">Corporate CSR Partnership Proposal</option>
                      <option value="Volunteer Opportunity">Volunteering & Campus Leadership</option>
                      <option value="Flood Relief Assistance">Flood Relief & Emergency Assistance</option>
                      <option value="Grievance or Feedback">Feedback or Grievance Redressal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please write your query or details here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 rounded-full text-base shadow-gold"
                  >
                    <span>Send Message to Team</span>
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>

              {/* Office Details & Timing (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Office Timings */}
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-soft space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <Clock className="w-6 h-6 text-accent" />
                    <div>
                      <h4 className="font-heading text-lg font-bold text-foreground">
                        Office Working Hours
                      </h4>
                      <p className="text-xs text-muted-foreground">Indian Standard Time (IST)</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-foreground/85">
                    <div className="flex justify-between py-1.5 border-b border-border/50">
                      <span>Monday – Friday:</span>
                      <strong>9:30 AM – 6:30 PM</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-border/50">
                      <span>Saturday:</span>
                      <strong>10:00 AM – 4:30 PM</strong>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span>Sunday:</span>
                      <span className="text-accent font-semibold">Closed (Field Relief on Call)</span>
                    </div>
                  </div>
                </div>

                {/* Grievance & Accountability */}
                <div className="bg-sand/60 rounded-3xl p-6 sm:p-8 border border-border space-y-3">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                  <h4 className="font-heading text-lg font-bold text-foreground">
                    Grievance Redressal & Oversight
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Under the leadership of our Secretary and Executive Committee, we maintain an open-door policy for all community members, donors, and beneficiaries. Any concern or feedback is acknowledged within 24 hours.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-primary">
                    Grievance Officer: Office of the General Secretary, SSF Patna
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

export default Contact;