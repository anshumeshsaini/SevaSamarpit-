import CircularNav from "@/components/CircularNav";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      {/* Top Navigation */}
      <CircularNav />

      {/* Page Content */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            {/* Normal Heading (Same as Privacy) */}
            <div className="text-center mb-14">
              <p className="text-sm tracking-[0.35em] uppercase text-accent font-medium">
                Legal
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-heading font-semibold text-foreground">
                Terms & Conditions
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
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground">
                    By accessing and using the Seva Samarpit Foundation website,
                    you agree to be bound by these Terms and Conditions. If you do
                    not agree, please discontinue use of the website.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    2. Use of Website
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    You agree to use this website only for lawful purposes and in a
                    way that does not infringe upon the rights of others.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>No introduction of viruses or malicious code</li>
                    <li>No unauthorized access to servers or systems</li>
                    <li>No automated scraping or misuse</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    3. Donations
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    All donations are voluntary and non-refundable. By donating, you
                    confirm:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>You are authorized to use the payment method</li>
                    <li>The funds are from legitimate sources</li>
                    <li>Donations will be used for charitable purposes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    4. Intellectual Property
                  </h2>
                  <p className="text-muted-foreground">
                    All content on this website is the property of Seva Samarpit
                    Foundation and protected by applicable copyright laws.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    5. Volunteer Participation
                  </h2>
                  <p className="text-muted-foreground">
                    Volunteers participate at their own risk. We are not liable for
                    injuries or losses during volunteer activities.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground">
                    Seva Samarpit Foundation is not liable for any direct or indirect
                    damages arising from use of the website or services.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    7. Changes to Terms
                  </h2>
                  <p className="text-muted-foreground">
                    We may update these terms at any time. Continued use of the
                    website constitutes acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    8. Governing Law
                  </h2>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of India.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    9. Contact Us
                  </h2>
                  <p className="text-muted-foreground">
                    For questions regarding these Terms, contact us at{" "}
                    <a
                      href="mailto:sevasamarpitfoundaiton@gmail.com"
                      className="text-accent hover:underline"
                    >
sevasamarpitfoundaiton@gmail.com
                    </a>
                  </p>
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

export default Terms;
