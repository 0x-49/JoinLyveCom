import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageCircle,
  Headphones,
  Building,
  Users,
  CheckCircle
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Talk About Your Success
            </h1>
            <p className="text-xl text-muted-foreground">
              We're here to help you transform your e-commerce experience
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                info: "+1 (888) 123-4567",
                subInfo: "Mon-Fri, 9am-5pm EST"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                info: "sales@lyvecom.com",
                subInfo: "24/7 Support Available"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                info: "123 Commerce Street",
                subInfo: "San Francisco, CA 94105"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-primary">{item.info}</p>
                    <p className="text-sm text-muted-foreground">{item.subInfo}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Badge variant="outline" className="mb-4">Get in Touch</Badge>
              <h2 className="text-3xl font-bold mb-6">How Can We Help?</h2>
              <p className="text-muted-foreground mb-8">
                Whether you're curious about features, a free trial, or even press—we're ready to answer any and all questions.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Headphones className="w-5 h-5" />,
                    title: "24/7 Customer Support",
                    description: "Round-the-clock assistance for all your needs"
                  },
                  {
                    icon: <Building className="w-5 h-5" />,
                    title: "Enterprise Solutions",
                    description: "Tailored solutions for large-scale operations"
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Dedicated Account Manager",
                    description: "Personal guidance for enterprise clients"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-primary">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Work Email
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input id="company" placeholder="Your company name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="text-sm font-medium">
                      Type of Inquiry
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="press">Press Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                  <MessageCircle className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to frequently asked questions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How quickly can I get started?",
                a: "You can start using LyveCom in minutes with our simple 3-click setup process."
              },
              {
                q: "Do you offer enterprise solutions?",
                a: "Yes, we offer custom enterprise solutions with dedicated support and advanced features."
              },
              {
                q: "What kind of support do you provide?",
                a: "We offer 24/7 technical support, detailed documentation, and dedicated account managers."
              },
              {
                q: "Is there a free trial available?",
                a: "Yes, we offer a 14-day free trial with full access to all features, no credit card required."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 card-hover">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}