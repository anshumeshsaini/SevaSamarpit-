import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Shield, Award, CheckCircle, CircleCheck } from 'lucide-react';
import CircularNav from '@/components/CircularNav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import MandalaPattern from '@/components/MandalaPattern';
import { toast } from 'sonner';

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const UPI_ID = "9905933352@hdfcbank";
const PAYEE_NAME = "Seva Samarpit Foundation";

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [circleProgress, setCircleProgress] = useState(0);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  // ✅ FIXED: iOS Safari Compatible UPI Launch
  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 10) {
      toast.error("Please enter a valid donation amount (minimum ₹10)");
      return;
    }

    if (!donorName.trim()) {
      toast.error("Please enter your name");
      return;
    }

    setIsProcessing(true);

    // Animate the circle completion
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setCircleProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 50);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const note = donationType === 'monthly' ? 'Monthly Seva Donation' : 'One-time Seva Donation';
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${finalAmount}&cu=INR&tn=${encodeURIComponent(note)}`;

    // ✅ iOS Safari Compatible UPI Launch (3-Step Fallback)
    try {
      // Method 1: Hidden Iframe (Best for iOS Safari)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.src = upiLink;
      document.body.appendChild(iframe);

      setTimeout(() => {
        document.body.removeChild(iframe);

        // Method 2: Hidden Anchor Click
        const anchor = document.createElement('a');
        anchor.href = upiLink;
        anchor.style.display = 'none';
        anchor.target = '_blank';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        // Method 3: Window Open Fallback
        setTimeout(() => {
          window.open(upiLink, '_self');
        }, 500);
      }, 1000);

      toast.success(
        "Opening UPI app... Use UPI ID below if app doesn't open automatically.",
        { duration: 6000 }
      );
    } catch (error) {
      console.error('UPI Launch Error:', error);
      toast.error("Payment redirect failed. Please copy UPI ID and pay manually.");
    }

    // Reset UI after delay
    setTimeout(() => {
      setIsProcessing(false);
      setCircleProgress(0);
    }, 3000);
  };

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      toast.success("UPI ID copied to clipboard! 📋");
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = UPI_ID;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast.success("UPI ID copied! 📋");
    }
  };

  return (
    <>
      <Helmet>
        <title>Donate Now - Seva Samarpit Foundation</title>
        <meta name="description" content="Support Seva Samarpit Foundation's mission to transform lives across India. Donate securely via UPI for education, healthcare, and community development." />
        {/* ✅ iOS Safari Optimizations */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Helmet>

      <CircularNav />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-earth overflow-hidden">
          <div className="absolute bottom-0 right-0 text-accent pointer-events-none">
            <MandalaPattern size={400} opacity={0.06} />
          </div>

          <div className="container mx-auto px-6 text-center">
            <span className="text-accent tracking-[0.3em] uppercase text-sm">
              Complete the Circle
            </span>
            <h1 className="font-heading text-5xl md:text-6xl mt-4">
              Your Seva,
              <br />
              <span className="text-primary">Their Future</span>
            </h1>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* FORM */}
              <div className="space-y-8">
                {/* Type Selection */}
                <div className="flex gap-4">
                  {['one-time', 'monthly'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type as 'one-time' | 'monthly')}
                      className={`flex-1 py-3 rounded-full transition-all duration-200 font-medium ${
                        donationType === type
                          ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                          : 'bg-muted hover:bg-muted-foreground/20'
                      }`}
                    >
                      {type === 'monthly' ? 'Monthly Seva' : 'One-time Gift'}
                    </button>
                  ))}
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="block font-heading text-lg font-semibold text-foreground mb-4">
                    Select Amount (₹)
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                          selectedAmount === amount && !customAmount
                            ? "bg-accent text-accent-foreground shadow-gold shadow-lg"
                            : "bg-card border-2 border-border hover:border-accent hover:shadow-md"
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min="10"
                    placeholder="Or enter custom amount (₹10+)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      if (e.target.value) setSelectedAmount(0);
                    }}
                    className="w-full p-4 rounded-xl bg-card border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-lg font-semibold"
                  />
                </div>

                {/* Donor Details */}
                <div className="space-y-4">
                  <label className="block font-heading text-lg font-semibold text-foreground">
                    Your Details
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full p-4 rounded-xl bg-card border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-lg"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address (optional)"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full p-4 rounded-xl bg-card border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full p-4 rounded-xl bg-card border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-lg"
                  />
                </div>
              </div>

              {/* Right: Summary & Action */}
              <div className="lg:sticky lg:top-32 h-fit">
                <div className="bg-card rounded-3xl p-8 shadow-deep border border-border">
                  {/* Circle Animation */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-40 h-40">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="text-muted"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          className="text-accent transition-all duration-300 ease-out"
                          strokeDasharray={440}
                          strokeDashoffset={440 - (440 * circleProgress) / 100}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {circleProgress === 100 ? (
                          <CircleCheck className="h-12 w-12 text-accent animate-pulse" />
                        ) : (
                          <>
                            <span className="font-heading text-2xl font-bold text-foreground">
                              ₹{finalAmount.toLocaleString()}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Donation Type</span>
                      <span className="font-medium text-foreground">
                        {donationType === 'monthly' ? 'Monthly Seva' : 'One-time Gift'}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="font-heading text-xl font-bold text-accent">
                        ₹{finalAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* UPI Info */}
                  <div className="bg-muted/50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">
                      Direct UPI Payment:
                    </p>
                    <div className="flex items-center justify-between">
                      <code className="font-mono text-foreground bg-muted px-2 py-1 rounded text-sm break-all">
                        {UPI_ID}
                      </code>
                      <button
                        onClick={handleCopyUPI}
                        className="text-accent hover:text-accent/80 text-sm font-medium px-3 py-1 rounded-md hover:bg-accent/10 transition-all duration-200"
                        type="button"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                    onClick={handleDonate}
                    disabled={isProcessing || !finalAmount}
                  >
                    {isProcessing ? (
                      <>
                        <span>Completing Circle</span>
                        <div className="ml-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : donationType === 'monthly' ? (
                      <>
                        Start Monthly Seva
                        <Heart className="ml-2 h-5 w-5" />
                      </>
                    ) : (
                      <>
                        Donate ₹{finalAmount.toLocaleString()}
                        <Award className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {/* Trust Indicators */}
                  <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>100% Secure UPI</span>
                    <CheckCircle className="h-4 w-4" />
                    <span>Tax Exempt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-accent mb-4">
                Your Trust
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Where Your Donation Goes
              </h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { percent: "85%", label: "Direct Program Support" },
                { percent: "10%", label: "Operations & Growth" },
                { percent: "5%", label: "Administration" },
              ].map((item) => (
                <div key={item.label} className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl hover:shadow-gold transition-all duration-300 hover:scale-105">
                  <p className="font-heading text-5xl font-bold text-accent mb-3">
                    {item.percent}
                  </p>
                  <p className="text-muted-foreground font-medium">{item.label}</p>
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
