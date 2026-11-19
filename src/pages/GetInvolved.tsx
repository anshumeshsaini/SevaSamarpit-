import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Building2, 
  Handshake, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Award,
  Send,
  GraduationCap,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import MandalaPattern from '@/components/MandalaPattern';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const roles = [
  {
    id: 'volunteer',
    icon: Users,
    title: 'Field Volunteer',
    badge: 'Ground Action',
    desc: 'Join our mobile medical teams, distribute relief packets during floods, teach children at village pathshalas, and coordinate village health drives.',
    benefits: ['Official Certificate of Social Service', 'Hands-on grassroots disaster management experience', 'Mentorship under senior social activists']
  },
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate CSR Partnership',
    badge: 'Institutional Impact',
    desc: 'Deploy corporate social responsibility capital directly in Schedule VII compliant programs: healthcare infrastructure, women vocational tools, and rural education.',
    benefits: ['Audited compliance & impact documentation', 'Employee volunteer engagement programs', 'Co-branded village transformation projects']
  },
  {
    id: 'youth',
    icon: GraduationCap,
    title: 'Youth & Campus Ambassador',
    badge: 'Colleges & Universities',
    desc: 'Lead student chapters at your university or college. Organize textbook donation drives, blood donation camps, and social awareness sessions.',
    benefits: ['Campus Leadership Certificate', 'Internship credits and recommendation letters', 'Direct involvement in social entrepreneurship']
  },
  {
    id: 'fundraiser',
    icon: Handshake,
    title: 'Community Fundraiser',
    badge: 'Advocacy',
    desc: 'Pledge your birthday, anniversary, or marathon to raise vital funds for a specific village hospital camp or school kit distribution.',
    benefits: ['Dedicated fundraising campaign page', 'Personalized impact report for all contributors', '100% tax receipt (80G) for every donor']
  }
];

const GetInvolved: React.FC = () => {
  const [isCircleNavOpen, setIsCircleNavOpen] = useState(false);
  const [activeFormTab, setActiveFormTab] = useState<'volunteer' | 'csr'>('volunteer');

  // Volunteer form state
  const [vName, setVName] = useState('');
  const [vEmail, setVEmail] = useState('');
  const [vPhone, setVPhone] = useState('');
  const [vCity, setVCity] = useState('');
  const [vDomain, setVDomain] = useState('Flood Relief & Emergency');
  const [vMessage, setVMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CSR form state
  const [cCompany, setCCompany] = useState('');
  const [cContactPerson, setCContactPerson] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [cBudget, setCBudget] = useState('₹5 Lakhs - ₹15 Lakhs');
  const [cCause, setCCause] = useState('Healthcare & Medical Mobile Units');
  const [cMessage, setCMessage] = useState('');

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Volunteer Application: ${vName} - ${vDomain}`;
    const body = `
Volunteer Application - Seva Samarpit Foundation
------------------------------------------------
Name: ${vName}
Email: ${vEmail}
Phone: ${vPhone}
City / State: ${vCity}
Preferred Domain: ${vDomain}
Message: ${vMessage}
    `.trim();

    window.open(`mailto:sevasamarpitfoundaiton@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thank you! Your volunteer application has been initiated. Our volunteer coordinator will reach out shortly.');
      setVName(''); setVEmail(''); setVPhone(''); setVCity(''); setVMessage('');
    }, 1000);
  };

  const handleCsrSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `CSR Partnership Inquiry: ${cCompany} - ${cContactPerson}`;
    const body = `
CSR Partnership Inquiry - Seva Samarpit Foundation
--------------------------------------------------
Company Name: ${cCompany}
Contact Person: ${cContactPerson}
Email: ${cEmail}
Phone: ${cPhone}
Estimated CSR Allocation: ${cBudget}
Priority Domain: ${cCause}
Inquiry Details: ${cMessage}
    `.trim();

    window.open(`mailto:sevasamarpitfoundaiton@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thank you! Your CSR inquiry has been submitted. Our institutional secretary will contact you with audited project proposals.');
      setCCompany(''); setCContactPerson(''); setCEmail(''); setCPhone(''); setCMessage('');
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Get Involved - Volunteer & Corporate CSR | Seva Samarpit Foundation</title>
        <meta
          name="description"
          content="Join 2,200+ volunteers and corporate CSR partners making a difference with Seva Samarpit Foundation. Apply for volunteering, campus ambassadorship, or Schedule VII CSR partnerships."
        />
        <meta
          name="keywords"
          content="volunteer NGO Bihar, CSR partnership NGO, social work internship, corporate donations 80G, Seva Samarpit volunteering"
        />
        <link rel="canonical" href="https://www.sevasamarpitfoundation.in/get-involved" />
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

              Community Co-Creation • सेवा में सहभागिता
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              Join the Circle of <span className="text-primary underline decoration-accent/60">Changemakers</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-xl font-body leading-relaxed max-w-3xl mx-auto">
              Real change happens when compassionate individuals and forward-looking organizations unite. Whether you are a student, medical professional, corporate executive, or community leader—there is a meaningful place for you in our circle.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-foreground/80">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <Users className="w-4 h-4 text-primary" /> 2,200+ Active Volunteers
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <Building2 className="w-4 h-4 text-primary" /> Schedule VII CSR Ready
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <Award className="w-4 h-4 text-accent" /> Certified Volunteer Recognition
              </span>
            </div>
          </div>
        </section>

        {/* 4 Involvement Channels */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
                Multiple Avenues of Engagement
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                How You Can Serve With Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.id}
                    className="bg-card rounded-3xl p-8 border border-border hover:border-gold/50 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-105 transition-all duration-300">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                          {role.badge}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                        {role.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {role.desc}
                      </p>

                      <div className="space-y-2 border-t border-border/60 pt-4">
                        <span className="text-xs font-bold text-foreground uppercase tracking-wider block">
                          What We Provide:
                        </span>
                        {role.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border">
                      <button
                        onClick={() => {
                          if (role.id === 'corporate') {
                            setActiveFormTab('csr');
                          } else {
                            setActiveFormTab('volunteer');
                          }
                          const el = document.getElementById('application-form');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                      >
                        <span>Apply For This Opportunity</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Unified Application Form Section */}
        <section id="application-form" className="py-20 bg-muted/40 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="bg-card rounded-3xl p-6 sm:p-12 border-2 border-border shadow-elevated">
              
              {/* Form Tab Switcher */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex p-1.5 rounded-full bg-muted border border-border">
                  <button
                    type="button"
                    onClick={() => setActiveFormTab('volunteer')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                      activeFormTab === 'volunteer'
                        ? 'bg-primary text-primary-foreground shadow-soft'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Volunteer Application</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveFormTab('csr')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                      activeFormTab === 'csr'
                        ? 'bg-accent text-accent-foreground shadow-gold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Corporate CSR Inquiry</span>
                  </button>
                </div>
              </div>

              {/* VOLUNTEER FORM */}
              {activeFormTab === 'volunteer' && (
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                      Join Our Volunteer Taskforce
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Serve in medical camps, flood emergency response, teaching, or digital media.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={vName}
                        onChange={(e) => setVName(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="volunteer@example.com"
                        value={vEmail}
                        onChange={(e) => setVEmail(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={vPhone}
                        onChange={(e) => setVPhone(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        City & State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Patna, Bihar"
                        value={vCity}
                        onChange={(e) => setVCity(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Area of Volunteer Service *
                    </label>
                    <select
                      value={vDomain}
                      onChange={(e) => setVDomain(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm font-medium"
                    >
                      <option value="Flood Relief & Boat Rescue">Flood Relief & Emergency Boat Operations</option>
                      <option value="Medical Camps & Patient Care">Rural Medical Camps (Doctors / Nurses / Attendants)</option>
                      <option value="Child Teaching & Pathshala">Child Education & Teaching at Pathshalas</option>
                      <option value="Women Skill Training">Women Skill & Handicraft Mentorship</option>
                      <option value="Social Media & Photography">Photography, Documentation & Social Media</option>
                      <option value="Campus & Youth Ambassador">Campus Ambassador / Student Organizing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Briefly Share Your Motivation / Skills
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about yourself, your availability, and why you wish to serve..."
                      value={vMessage}
                      onChange={(e) => setVMessage(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 rounded-full text-base shadow-gold"
                  >
                    <span>Submit Volunteer Application</span>
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}

              {/* CSR INQUIRY FORM */}
              {activeFormTab === 'csr' && (
                <form onSubmit={handleCsrSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                      Partner with Seva Samarpit Foundation
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Schedule VII Companies Act 2013 compliant initiatives with audited reporting.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Company / Foundation Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Corporate Name Ltd."
                        value={cCompany}
                        onChange={(e) => setCCompany(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Contact Person Name & Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma, CSR Head"
                        value={cContactPerson}
                        onChange={(e) => setCContactPerson(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="csr@company.com"
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Official Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={cPhone}
                        onChange={(e) => setCPhone(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Target Focus Area *
                      </label>
                      <select
                        value={cCause}
                        onChange={(e) => setCCause(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm font-medium"
                      >
                        <option value="Healthcare & Mobile Clinics">Rural Mobile Health Units & Clinics</option>
                        <option value="Child Literacy & Digital Classrooms">Child Literacy & Digital Smart Classrooms</option>
                        <option value="Women Vocational Training">Women Skill Development & Sewing Units</option>
                        <option value="Flood Preparedness & Relief">Disaster Preparedness & Flood Relief Logistics</option>
                        <option value="Clean Drinking Water Installations">Clean Drinking Water Borewells & Sanitation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Expected Budget Envelope
                      </label>
                      <select
                        value={cBudget}
                        onChange={(e) => setCBudget(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm font-medium"
                      >
                        <option value="₹2 Lakhs - ₹5 Lakhs">₹2 Lakhs - ₹5 Lakhs</option>
                        <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                        <option value="₹15 Lakhs - ₹50 Lakhs">₹15 Lakhs - ₹50 Lakhs</option>
                        <option value="₹50 Lakhs+">₹50 Lakhs+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Project Goals & Specific Expectations
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline any specific geographic focus, target beneficiary count, or CSR timelines..."
                      value={cMessage}
                      onChange={(e) => setCMessage(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full text-base shadow-soft"
                  >
                    <span>Submit CSR Partnership Proposal</span>
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GetInvolved;