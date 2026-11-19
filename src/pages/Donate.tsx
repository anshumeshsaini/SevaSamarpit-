import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  QrCode, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  Building2, 
  Receipt,
  HelpCircle,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import MandalaPattern from '@/components/MandalaPattern';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const causeOptions = [
  'General Seva Fund (Where Most Needed)',
  'Rural Healthcare Camps & Free Medicines',
  'Inclusive Child Education & Pathshala',
  'Women Skill Training & Sewing Machines',
  'Emergency Flood Relief & Food Rations',
  'Rural Infrastructure & Safe Drinking Water',
  'Tree Plantation & Green Mission'
];

const UPI_ID = '9905933352@hdfcbank';
const PAYEE_NAME = 'Seva Samarpit Foundation';

const bankDetails = {
  accountName: 'Seva Samarpit Foundation',
  bankName: 'HDFC Bank',
  accountNumber: '50200085493218',
  ifscCode: 'HDFC0001932',
  branch: 'Patna Branch, Bihar',
  accountType: 'Current Account'
};

const faqs = [
  {
    q: 'Is my donation eligible for 80G tax exemption?',
    a: 'Yes! Seva Samarpit Foundation is registered under Section 80G of the Indian Income Tax Act. Indian donors can claim a 50% deduction on their taxable income for eligible contributions.'
  },
  {
    q: 'How will I receive my 80G tax exemption receipt?',
    a: 'Once your UPI or bank transfer is completed, submit your transaction reference number and PAN details in the form below or WhatsApp our accounts team at +91 79924 81330. Your formal 80G digital receipt will be emailed within 24 to 48 hours.'
  },
  {
    q: 'Can I donate via any UPI app?',
    a: 'Absolutely! You can use PhonePe, Google Pay, Paytm, BHIM, Amazon Pay, or any bank UPI app by scanning our dynamic QR code or sending directly to UPI ID: 9905933352@hdfcbank.'
  },
  {
    q: 'How does the Foundation ensure funds reach the needy?',
    a: 'We operate with strict fiscal transparency. Over 85% of every rupee is allocated directly to medicine purchases, educational kits, sewing machines, food supplies, and field camps. Accounts are audited annually by certified Chartered Accountants.'
  }
];

interface DonateLocationState {
  prefilledAmount?: number;
  cause?: string;
}

const Donate: React.FC = () => {
  const location = useLocation();
  const [isCircleNavOpen, setIsCircleNavOpen] = useState(false);

  // Initialize from navigation state if passed
  const locationState = location.state as DonateLocationState | null;
  const prefilledAmount = locationState?.prefilledAmount || 2500;
  const prefilledCause = locationState?.cause || causeOptions[0];

  const [selectedAmount, setSelectedAmount] = useState<number>(prefilledAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCause, setSelectedCause] = useState<string>(prefilledCause);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  // Receipt details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [isSubmittingReceipt, setIsSubmittingReceipt] = useState(false);

  // Active FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const finalAmount = customAmount ? parseInt(customAmount, 10) || 0 : selectedAmount;

  // Construct UPI URI
  const upiNote = `${donationType === 'monthly' ? 'Monthly Seva' : 'Seva Donation'} - ${selectedCause}`;
  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${finalAmount}&cu=INR&tn=${encodeURIComponent(upiNote.slice(0, 50))}`;

  // Live dynamic QR Code image via standard API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}&color=0f5c2f`;

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const handleOpenUpiApp = () => {
    if (!finalAmount || finalAmount < 10) {
      toast.error('Please enter a valid amount (min ₹10)');
      return;
    }
    // Launch UPI intent
    window.location.href = upiUrl;
    toast.info('Opening UPI Application... If app does not trigger, please scan QR code or copy UPI ID.');
  };

  const handleReceiptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail || !donorPhone) {
      toast.error('Please fill in your Name, Email, and Phone.');
      return;
    }

    setIsSubmittingReceipt(true);

    const subject = `80G Receipt Request - ₹${finalAmount} - ${donorName}`;
    const body = `
Seva Samarpit Foundation 80G Receipt Request:
----------------------------------------------
Donor Name: ${donorName}
Email: ${donorEmail}
Phone: ${donorPhone}
PAN Card: ${donorPan || 'Not Provided'}
Amount: ₹${finalAmount}
Donation Type: ${donationType}
Allocated Cause: ${selectedCause}
Transaction Reference / UTR: ${transactionRef || 'Pending Verification'}
Date: ${new Date().toLocaleDateString('en-IN')}

Please generate and send 80G tax receipt to my email.
    `.trim();

    const mailto = `mailto:sevasamarpitfoundaiton@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, '_blank');

    setTimeout(() => {
      setIsSubmittingReceipt(false);
      toast.success('Your receipt request has been submitted! Our accounts team will verify and send your 80G certificate.');
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Donate Now | Seva Samarpit Foundation - 80G Tax Exemption</title>
        <meta
          name="description"
          content="Support Seva Samarpit Foundation. Donate directly via UPI (9905933352@hdfcbank) or NEFT/RTGS for healthcare, child education, flood relief, and women self-reliance. 50% tax exemption under Section 80G."
        />
        <meta
          name="keywords"
          content="donate to NGO Bihar, 80G tax deduction charity, Seva Samarpit donation, donate via UPI, flood relief donation India, child education donation"
        />
        <link rel="canonical" href="https://www.sevasamarpitfoundation.in/donate" />
      </Helmet>

      <Navbar onOpenCircleNav={() => setIsCircleNavOpen(true)} />
      <CircularNav isOpen={isCircleNavOpen} onClose={() => setIsCircleNavOpen(false)} />

      <main className="pt-28 md:pt-36">
        {/* Page Hero */}
        <section className="relative py-16 md:py-24 bg-earth overflow-hidden border-b border-border">
          <div className="absolute top-0 right-0 text-primary pointer-events-none opacity-20">
            <MandalaPattern size={650} opacity={0.12} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Direct Grassroots Giving • परोपकाराय
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-foreground tracking-tight mb-4 leading-tight">
              Complete the Circle of <span className="text-primary underline decoration-accent/60">Hope & Healing</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg font-body leading-relaxed max-w-2xl mx-auto">
              Your contribution goes directly to the ground—funding free village medical camps, school kits for underprivileged children, emergency flood rations, and women’s tailoring units.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-foreground/80">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <ShieldCheck className="w-4 h-4 text-primary" /> 100% Direct Field Allocation
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <Receipt className="w-4 h-4 text-accent" /> 80G 50% Tax Deduction
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                <Building2 className="w-4 h-4 text-primary" /> Official HDFC Bank & UPI
              </span>
            </div>
          </div>
        </section>

        {/* Main Donation Stage */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Form & Amount Picker (7 Cols) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* 1. Donation Frequency Toggle */}
                <div className="bg-card rounded-2xl p-2 border border-border flex gap-2">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                      donationType === 'one-time'
                        ? 'bg-primary text-primary-foreground shadow-soft'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    One-Time Seva Gift
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                      donationType === 'monthly'
                        ? 'bg-accent text-accent-foreground shadow-gold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Monthly Seva Pledge</span>
                  </button>
                </div>

                {/* 2. Amount Selection */}
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-soft space-y-6">
                  <div>
                    <label className="block font-heading text-lg font-bold text-foreground mb-1">
                      Select Contribution Amount (₹ INR)
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Every amount creates tangible grassroots change.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                    {donationAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount('');
                        }}
                        className={`p-3.5 rounded-xl font-heading text-base sm:text-lg font-bold transition-all duration-200 text-center ${
                          selectedAmount === amt && !customAmount
                            ? 'bg-accent text-accent-foreground shadow-gold scale-105 ring-2 ring-accent/30'
                            : 'bg-muted/80 text-foreground hover:bg-muted hover:border-accent/40 border border-transparent'
                        }`}
                      >
                        ₹{amt.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount Input */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-2">
                      Or Enter Custom Amount:
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-accent">₹</span>
                      <input
                        type="number"
                        min="10"
                        placeholder="e.g. 15000"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          if (e.target.value) setSelectedAmount(0);
                        }}
                        className="w-full pl-9 pr-4 py-3.5 rounded-xl bg-background border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-base font-bold text-foreground transition-all"
                      />
                    </div>
                  </div>

                  {/* Cause Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Direct My Seva Towards:
                    </label>
                    <select
                      value={selectedCause}
                      onChange={(e) => setSelectedCause(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-background border-2 border-border focus:border-accent outline-none text-sm font-semibold text-foreground"
                    >
                      {causeOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. 80G Tax Exemption Receipt Request Form */}
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-soft space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <Receipt className="w-6 h-6 text-accent" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        Request 80G Digital Tax Receipt
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Enter your details to receive an official 50% tax exemption receipt.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleReceiptSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Donor Name"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="w-full p-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          PAN Card Number (for 80G filing)
                        </label>
                        <input
                          type="text"
                          placeholder="ABCDE1234F"
                          value={donorPan}
                          onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                          className="w-full p-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm uppercase font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="receipts@example.com"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="w-full p-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={donorPhone}
                          onChange={(e) => setDonorPhone(e.target.value)}
                          className="w-full p-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        UPI Reference / Bank UTR Number (if already paid)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 12-digit UTR from GPay / PhonePe / NEFT"
                        value={transactionRef}
                        onChange={(e) => setTransactionRef(e.target.value)}
                        className="w-full p-3 rounded-xl bg-background border border-border focus:border-accent outline-none text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmittingReceipt}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 rounded-full text-sm shadow-soft"
                    >
                      {isSubmittingReceipt ? 'Submitting Details...' : 'Submit Donor Info for 80G Receipt'}
                    </Button>
                  </form>
                </div>

              </div>

              {/* Right Column: Payment Gateway / QR Code & Bank Box (5 Cols) */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                
                {/* Instant Dynamic UPI QR Card */}
                <div className="bg-card rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-elevated text-center space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Instant UPI Payment</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Scan with Any UPI App
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    PhonePe • Google Pay • Paytm • BHIM • Amazon Pay
                  </p>

                  {/* Dynamic QR Code */}
                  <div className="mx-auto w-56 h-56 p-3 bg-white rounded-2xl shadow-inner border-2 border-primary/20 flex items-center justify-center">
                    <img 
                      src={qrCodeUrl} 
                      alt="UPI QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="font-heading text-2xl font-bold text-accent">
                    ₹{finalAmount.toLocaleString('en-IN')}
                  </div>

                  {/* Direct Launch Button on Mobile */}
                  <Button
                    onClick={handleOpenUpiApp}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-base rounded-full shadow-gold hover:scale-105 transition-all"
                  >
                    <span>Pay ₹{finalAmount.toLocaleString('en-IN')} via UPI App</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>

                  {/* Copy UPI ID */}
                  <div className="p-3 bg-muted rounded-xl flex items-center justify-between gap-2 border border-border">
                    <code className="text-xs font-mono font-bold text-foreground truncate select-all">
                      {UPI_ID}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopyText(UPI_ID, 'UPI ID')}
                      className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-md bg-card border border-border hover:bg-accent/10 transition-colors"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </button>
                  </div>
                </div>

                {/* Bank Account Details for NEFT / RTGS / IMPS */}
                <div className="bg-sand/60 rounded-3xl p-6 border border-border shadow-soft space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-border">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h4 className="font-heading text-base font-bold text-foreground">
                      Bank Transfer (NEFT / RTGS / IMPS)
                    </h4>
                  </div>

                  <div className="space-y-2.5 text-xs text-foreground/90">
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-muted-foreground">Account Name:</span>
                      <strong className="text-right">{bankDetails.accountName}</strong>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-muted-foreground">Bank Name:</span>
                      <strong>{bankDetails.bankName}</strong>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-muted-foreground">Account No:</span>
                      <div className="flex items-center gap-1.5 font-mono font-bold">
                        <span>{bankDetails.accountNumber}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyText(bankDetails.accountNumber, 'Account Number')}
                          className="text-primary hover:text-accent"
                          title="Copy Account Number"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-muted-foreground">IFSC Code:</span>
                      <div className="flex items-center gap-1.5 font-mono font-bold">
                        <span>{bankDetails.ifscCode}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyText(bankDetails.ifscCode, 'IFSC Code')}
                          className="text-primary hover:text-accent"
                          title="Copy IFSC Code"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <span className="text-muted-foreground">Branch:</span>
                      <span>{bankDetails.branch}</span>
                    </div>
                  </div>
                </div>

                {/* Helpline Box */}
                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>Donation Support: +91 79924 81330</span>
                  </div>
                  <a 
                    href="https://wa.me/917992481330" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-accent hover:underline"
                  >
                    WhatsApp →
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Donation Transparency Breakdown */}
        <section className="py-16 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
              Uncompromising Transparency
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
              Where Your Donation Goes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-soft">
                <div className="font-heading text-4xl font-bold text-accent mb-2">85%</div>
                <h4 className="font-heading text-base font-bold text-foreground">Direct Field Programs</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Medicines, school supplies, dry food packets, and sewing machines.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-soft">
                <div className="font-heading text-4xl font-bold text-primary mb-2">10%</div>
                <h4 className="font-heading text-base font-bold text-foreground">Field Logistics & Rescue</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Emergency rescue boats, fuel, medicine storage, and transportation.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-soft">
                <div className="font-heading text-4xl font-bold text-foreground mb-2">5%</div>
                <h4 className="font-heading text-base font-bold text-foreground">Auditing & Legal Filing</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Chartered accountant audits, government filings, and receipt issuance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation FAQ Accordion */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-accent" />
                Frequently Asked Questions
              </span>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Everything You Need to Know About Donating
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-heading text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Donate;