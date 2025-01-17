import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MainLayout from '@/components/layout/main-layout';
import {
  AlertTriangle,
  Info,
  DollarSign,
  Star,
  Mail,
  ShieldCheck,
  MessageCircle,
  Scale,
  FileText,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <MainLayout>
      <Head>
        <title>Disclaimer | LyveCom</title>
        <meta
          name="description"
          content="Important disclaimers and disclosures about LyveCom's services, affiliate relationships, and content policies."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Legal Information</Badge>
            <h1 className="text-4xl font-bold mb-4">Disclaimer & Disclosures</h1>
            <p className="text-xl text-muted-foreground">
              Important information about our services, relationships, and content
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
            <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Info className="w-4 h-4" />, label: "General" },
                { icon: <DollarSign className="w-4 h-4" />, label: "Affiliate" },
                { icon: <Star className="w-4 h-4" />, label: "Reviews" },
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
          <div className="space-y-12">
            <section id="general">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  General Disclaimer
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The information provided on LyveCom is for general informational purposes only. While we strive 
                    to keep the information up-to-date and accurate, we make no representations or warranties of any 
                    kind, express or implied, about the completeness, accuracy, reliability, suitability, or 
                    availability of the information, products, services, or related graphics contained on the platform.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-primary" />
                      Important Notice
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Any reliance you place on such information is strictly at your own risk. We will not be liable 
                      for any loss or damage that may arise from your use of the platform.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section id="affiliate">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Affiliate & Earnings Disclosure
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    LyveCom is committed to transparency in our business relationships:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We may earn commissions through affiliate partnerships</li>
                    <li>Some links on our platform are affiliate links</li>
                    <li>We may receive compensation for featuring certain products</li>
                    <li>Affiliate relationships do not affect our editorial independence</li>
                  </ul>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Commissions earned through affiliate links help support our platform and enable us to continue 
                      providing valuable content and services.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section id="reviews">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Star className="w-6 h-6 text-primary" />
                  Review & Content Policy
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">Our content creation process:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: <ShieldCheck className="w-5 h-5" />,
                        title: "Editorial Independence",
                        description: "Our reviews and recommendations are based on thorough research and testing"
                      },
                      {
                        icon: <Scale className="w-5 h-5" />,
                        title: "Balanced Coverage",
                        description: "We present both advantages and limitations of products we review"
                      },
                      {
                        icon: <FileText className="w-5 h-5" />,
                        title: "Transparent Process",
                        description: "We disclose our testing methodology and criteria"
                      },
                      {
                        icon: <ExternalLink className="w-5 h-5" />,
                        title: "External Sources",
                        description: "We cite and link to authoritative sources when applicable"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="text-primary">{item.icon}</div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </section>

            <section id="liability">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Limitation of Liability
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    By using LyveCom, you acknowledge and agree that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We provide no guarantees regarding service availability or performance</li>
                    <li>We are not liable for any indirect, consequential, or incidental damages</li>
                    <li>Individual results may vary and are not guaranteed</li>
                    <li>External links are provided for convenience and do not constitute endorsement</li>
                  </ul>
                  <div className="bg-muted/30 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      Professional Advice Notice
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The content on LyveCom is not intended as professional advice. Always consult with qualified 
                      professionals for specific advice related to your situation.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section id="contact" className="mt-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Questions About This Disclaimer?</h2>
                <p className="text-muted-foreground mb-6">
                  We're here to help clarify any points in this disclaimer.
                </p>
                <Button className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact Us
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Email us at{' '}
                  <a href="mailto:legal@lyvecom.com" className="text-primary hover:underline">
                    legal@lyvecom.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              This disclaimer was last updated on January 10, 2025. We reserve the right to modify these 
              disclaimers at any time without notice. Your continued use of our platform constitutes acceptance 
              of any changes.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}