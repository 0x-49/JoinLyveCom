import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MainLayout from '@/components/layout/main-layout';
import {
  Scale,
  FileText,
  Shield,
  AlertTriangle,
  Mail,
  Globe,
  MessageCircle,
  Lock,
  DollarSign,
  BookOpen,
  CheckCircle
} from 'lucide-react';

export default function TermsPage() {
  return (
    <MainLayout>
      <Head>
        <title>Terms of Service | LyveCom</title>
        <meta
          name="description"
          content="Read our terms of service to understand your rights and responsibilities when using the LyveCom platform."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Terms of Service</Badge>
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our platform
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last Updated: January 10, 2025
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Links */}
          <Card className="p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Scale className="w-4 h-4" />, label: "Terms" },
                { icon: <Shield className="w-4 h-4" />, label: "Usage" },
                { icon: <DollarSign className="w-4 h-4" />, label: "Pricing" },
                { icon: <AlertTriangle className="w-4 h-4" />, label: "Liability" }
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex items-center gap-2 justify-center"
                  onClick={() => document.getElementById(item.label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </Button>
              ))}
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-12 prose max-w-none">
            <section id="terms">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-primary" />
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing or using the LyveCom platform ("Service"), you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                  prohibited from using or accessing the Service.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    These terms constitute a legally binding agreement between you and LyveCom. Please review them carefully 
                    before proceeding to use our services.
                  </p>
                </div>
              </div>
            </section>

            <section id="usage">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                2. Use License and Restrictions
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2.1 Permitted Use</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Create and manage video commerce content</li>
                  <li>Host live shopping events</li>
                  <li>Access analytics and reporting features</li>
                  <li>Integrate with supported e-commerce platforms</li>
                </ul>

                <h3 className="text-xl font-semibold">2.2 Restrictions</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Modify or copy the platform's source code</li>
                  <li>Use the service for illegal activities</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Violate intellectual property rights</li>
                </ul>
              </div>
            </section>

            <section id="pricing">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-primary" />
                3. Pricing and Payments
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">3.1 Subscription Terms</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Subscription fees are billed in advance</li>
                  <li>All payments are non-refundable</li>
                  <li>30-day notice required for cancellation</li>
                  <li>Taxes may apply based on your location</li>
                </ul>

                <h3 className="text-xl font-semibold">3.2 Enterprise Pricing</h3>
                <p className="text-muted-foreground">
                  Enterprise customers may negotiate custom pricing and terms based on their specific needs and usage requirements.
                </p>
              </div>
            </section>

            <section id="liability">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-primary" />
                4. Limitation of Liability
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  LyveCom and its suppliers shall not be liable for any damages arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use or inability to use the service</li>
                  <li>Service interruptions or data loss</li>
                  <li>Unauthorized access to your data</li>
                  <li>Third-party actions or content</li>
                </ul>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Our liability is limited to the amount paid by you for the service in the 12 months preceding 
                    the incident giving rise to the liability.
                  </p>
                </div>
              </div>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                5. Intellectual Property
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The Service and its original content, features, and functionality are owned by LyveCom and are protected by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>International copyright laws</li>
                  <li>Trademark laws</li>
                  <li>Patent laws</li>
                  <li>Trade secret and other intellectual property rights</li>
                </ul>
              </div>
            </section>

            <section id="termination">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                6. Termination
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violation of these Terms</li>
                  <li>Fraudulent activities</li>
                  <li>Non-payment of fees</li>
                  <li>Abuse of the platform or other users</li>
                </ul>
              </div>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                7. Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <Card className="p-6 bg-muted/30">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">legal@lyvecom.com</p>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              These terms of service were last updated on January 10, 2025. We reserve the right to update these 
              terms at any time, and will notify you of any material changes.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}