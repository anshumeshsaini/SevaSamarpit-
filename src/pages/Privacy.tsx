import CircularNav from "@/components/CircularNav";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      {/* Top Navigation */}
      <CircularNav />

      {/* Page Content */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            {/* Normal Heading (Like Image) */}
            <div className="text-center mb-14">
              <p className="text-sm tracking-[0.35em] uppercase text-accent font-medium">
                Legal
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-heading font-semibold text-foreground">
                Privacy Policy
              </h1>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                Last updated: January 2024
              </p>

              <div className="mt-10 space-y-10">

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-muted-foreground">
                    Seva Samarpit Foundation ("we," "our," or "us") is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when you
                    visit our website or interact with our services.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    2. Information We Collect
                  </h2>

                  <h3 className="font-heading text-lg font-semibold mt-4 mb-2">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Billing and payment information for donations</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="font-heading text-lg font-semibold mt-6 mb-2">
                    Automatically Collected Information
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    3. How We Use Your Information
                  </h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>To process donations and issue receipts</li>
                    <li>To communicate with you about our programs and updates</li>
                    <li>To respond to inquiries and provide support</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    4. Information Sharing
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We do not sell, trade, or rent your personal information. We may
                    share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>With service providers who assist our operations</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights and safety</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    5. Data Security
                  </h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to
                    protect your personal information. However, no method of
                    transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    6. Cookies
                  </h2>
                  <p className="text-muted-foreground">
                    Our website may use cookies and similar technologies to enhance
                    your experience. You can control cookies through your browser
                    settings.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    7. Your Rights
                  </h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    8. Children's Privacy
                  </h2>
                  <p className="text-muted-foreground">
                    Our website is not intended for children under 13 years of age.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    9. Third-Party Links
                  </h2>
                  <p className="text-muted-foreground">
                    We are not responsible for third-party privacy practices.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    10. Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    11. Contact Us
                  </h2>
                  <div className="mt-4 p-6 bg-muted/50 rounded-2xl">
                    <p className="font-medium">Seva Samarpit Foundation</p>
                    <p className="mt-2">
                      Email:{" "}
                      <a
                        href="mailto:sevasamarpitfoundaiton@gmail.com"
                        className="text-accent hover:underline"
                      >
sevasamarpitfoundaiton@gmail.com
                      </a>
                    </p>
                    <p>
                      Phone:{" "}
                      <a
                        href="tel:+917992481330"
                        className="text-accent hover:underline"
                      >
                        +91-79924 81330
                      </a>
                    </p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Privacy;
