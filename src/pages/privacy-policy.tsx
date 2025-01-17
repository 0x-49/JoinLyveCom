import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Shield,
  Lock,
  Eye,
  Server,
  Globe,
  UserCheck,
  Cookie,
  MessageCircle
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | LyveCom</title>
        <meta
          name="description"
          content="Learn about how LyveCom collects, uses, and protects your personal information."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Privacy Policy</Badge>
            <h1 className="text-4xl font-bold mb-4">Your Privacy Matters</h1>
            <p className="text-xl text-muted-foreground">
              Learn about how we collect, use, and protect your personal information
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
                { icon: <Eye className="w-4 h-4" />, label: "Information Collection" },
                { icon: <Server className="w-4 h-4" />, label: "Data Usage" },
                { icon: <Shield className="w-4 h-4" />, label: "Data Protection" },
                { icon: <Globe className="w-4 h-4" />, label: "Your Rights" }
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex items-center gap-2 justify-center"
                  onClick={() => document.getElementById(item.label.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </Button>
              ))}
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-12 prose max-w-none">
            <section id="introduction">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                1. Introduction
              </h2>
              <p className="text-muted-foreground">
                Welcome to LyveCom's Privacy Policy. We are committed to protecting your privacy and ensuring 
                you have a positive experience on our platform. This policy outlines our practices for handling 
                your personal information across our video commerce platform and services.
              </p>
            </section>

            <section id="information-collection">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2.1 Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and transaction information</li>
                  <li>Business information for enterprise customers</li>
                </ul>

                <h3 className="text-xl font-semibold">2.2 Usage Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Video interaction and engagement metrics</li>
                  <li>Feature usage and preferences</li>
                </ul>
              </div>
            </section>

            <section id="data-usage">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Server className="w-6 h-6 text-primary" />
                3. How We Use Your Information
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and improve our video commerce platform and services</li>
                  <li>Process transactions and handle billing</li>
                  <li>Send important service updates and notifications</li>
                  <li>Analyze platform usage and optimize performance</li>
                  <li>Prevent fraud and ensure platform security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section id="data-protection">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                4. Data Protection
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data centers and backup systems</li>
                </ul>
              </div>
            </section>

            <section id="your-rights">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-primary" />
                5. Your Rights
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Cookie className="w-6 h-6 text-primary" />
                6. Cookies and Tracking
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to improve your experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Essential cookies for platform functionality</li>
                  <li>Analytics cookies to understand usage</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for personalized content</li>
                </ul>
              </div>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                7. Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <Card className="p-6 bg-muted/30">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">privacy@lyvecom.com</p>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              This privacy policy was last updated on January 10, 2025. We may update this policy from time to time, 
              and will notify you of any material changes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}