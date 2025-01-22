import Head from 'next/head';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  HelpCircle, 
  ShoppingBag, 
  Truck, 
  RefreshCw, 
  CreditCard, 
  Shield, 
  MessageCircle,
  Building,
  Globe,
  Clock,
  Settings,
  Users
} from 'lucide-react';

const faqCategories = [
  {
    id: "product",
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Product Information",
    questions: [
      {
        q: "What is the product made of?",
        a: "Our products are crafted using premium, high-quality materials sourced from trusted suppliers. Each item undergoes rigorous quality control to ensure durability and performance."
      },
      {
        q: "How do I use the product?",
        a: "Each product comes with detailed instructions for use. We also provide video tutorials and guides on our website to help you get the most out of your purchase."
      },
      {
        q: "Is there a warranty?",
        a: "Yes, all our products come with a comprehensive warranty. The specific coverage period varies by product, but most items include at least a 1-year warranty against manufacturing defects."
      }
    ]
  },
  {
    id: "shipping",
    icon: <Truck className="w-6 h-6" />,
    title: "Shipping & Delivery",
    questions: [
      {
        q: "What are the shipping costs?",
        a: "Shipping costs vary based on your location and chosen delivery method. We offer free shipping on orders over $50 within the continental US. International shipping rates are calculated at checkout."
      },
      {
        q: "How long does delivery take?",
        a: "Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days. Express shipping options are available at checkout for faster delivery."
      },
      {
        q: "Can I track my order?",
        a: "Yes, you'll receive a tracking number via email once your order ships. You can use this to monitor your delivery status through our website or the carrier's tracking system."
      }
    ]
  },
  {
    id: "returns",
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Returns & Refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day money-back guarantee on most products. Items must be in original condition with tags attached. Some restrictions apply to personalized or hygiene products."
      },
      {
        q: "How do I request a refund?",
        a: "To initiate a return, log into your account and visit the Orders section, or contact our customer service team. We'll provide a return shipping label and process your refund once we receive the item."
      },
      {
        q: "What if the product is damaged?",
        a: "If you receive a damaged product, contact us immediately with photos of the damage. We'll send a replacement or process a full refund, including shipping costs."
      }
    ]
  },
  {
    id: "payment",
    icon: <CreditCard className="w-6 h-6" />,
    title: "Payment & Security",
    questions: [
      {
        q: "Is my payment secure?",
        a: "Yes, we use industry-standard SSL encryption to protect your payment information. We partner with trusted payment processors and never store your credit card details."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods. Some regions also support local payment options."
      },
      {
        q: "Do you offer installment payments?",
        a: "Yes, we partner with services like Affirm and Klarna to offer flexible payment plans on qualifying purchases. Terms and eligibility vary by region."
      }
    ]
  },
  {
    id: "support",
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Customer Support",
    questions: [
      {
        q: "How do I contact customer support?",
        a: "Our support team is available 24/7 via live chat, email (support@example.com), or phone (1-800-EXAMPLE). We aim to respond to all inquiries within 24 hours."
      },
      {
        q: "Do you offer technical support?",
        a: "Yes, our technical support team can assist with product setup, troubleshooting, and general guidance. Support is available through multiple channels including video calls."
      },
      {
        q: "What are your business hours?",
        a: "Our customer service team is available Monday through Friday, 9 AM to 6 PM EST. Emergency support is available 24/7 through our automated system."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Your Ultimate Guide to Our Products & Services</title>
        <meta 
          name="description" 
          content="Find answers to common questions about our products, shipping, returns, payment options, and customer support. Comprehensive guide to help you make informed decisions."
        />
        <meta name="keywords" content="FAQ, customer support, product information, shipping, returns, payment options, technical support" />
      </Head>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <HelpCircle className="w-4 h-4 mr-2" /> SUPPORT CENTER
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              How Can We Help You?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to frequently asked questions about our products, services, shipping, returns, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, stat: "24/7", label: "Support Available" },
              { icon: <Users className="w-6 h-6" />, stat: "1M+", label: "Happy Customers" },
              { icon: <Globe className="w-6 h-6" />, stat: "150+", label: "Countries Served" },
              { icon: <Settings className="w-6 h-6" />, stat: "99.9%", label: "Resolution Rate" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-primary mb-2 flex justify-center">{item.icon}</div>
                <div className="text-2xl font-bold mb-1">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container px-4">
          {faqCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-primary">{category.icon}</div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.id}-${index}`}>
                    <AccordionTrigger className="text-lg">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Contact Support
                <MessageCircle className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Live Chat
                <MessageCircle className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Global Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}