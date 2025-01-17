import Head from 'next/head';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Play,
  Zap,
  BarChart,
  Users,
  Globe,
  ShoppingCart,
  ArrowRight,
  MessageCircle,
  Shield,
  Rocket,
  Heart
} from 'lucide-react';

const features = [
  {
    icon: <Play className="w-6 h-6" />,
    title: "Interactive Video Commerce",
    description: "Create engaging shoppable videos that drive conversions with interactive hotspots and real-time product information."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Live Shopping Events",
    description: "Host live shopping events with real-time interaction, product showcases, and instant checkout capabilities."
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Analytics Dashboard",
    description: "Track performance with detailed analytics on viewer engagement, click-through rates, and conversion metrics."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Multi-User Management",
    description: "Manage team access with role-based permissions and collaborative workflow tools."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global CDN",
    description: "Deliver high-quality video content worldwide with our enterprise-grade content delivery network."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Seamless Integration",
    description: "Integrate with your existing e-commerce platform and payment systems effortlessly."
  }
];

const benefits = [
  {
    title: "Increased Engagement",
    stats: "300%",
    description: "Higher engagement rates compared to traditional e-commerce"
  },
  {
    title: "Better Conversion",
    stats: "200%",
    description: "Improvement in conversion rates with interactive videos"
  },
  {
    title: "Customer Satisfaction",
    stats: "95%",
    description: "Customer satisfaction rate with video shopping experience"
  }
];

const testimonials = [
  {
    quote: "LyveCom has transformed how we showcase our products. Our conversion rates have skyrocketed since implementation.",
    author: "Sarah Chen",
    role: "E-commerce Director",
    company: "Fashion Nova",
    image: "/testimonials/sarah.jpg"
  },
  {
    quote: "The live shopping features have helped us create engaging shopping experiences that our customers love.",
    author: "Michael Rodriguez",
    role: "Digital Marketing Manager",
    company: "TechGear Pro",
    image: "/testimonials/michael.jpg"
  },
  {
    quote: "Integration was seamless, and the analytics provide invaluable insights for our marketing strategy.",
    author: "Emma Thompson",
    role: "Head of Digital",
    company: "BeautyBlend",
    image: "/testimonials/emma.jpg"
  }
];

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Product | LyveCom - Video Commerce Platform</title>
        <meta
          name="description"
          content="Transform your e-commerce with interactive video commerce. Create engaging shopping experiences with LyveCom's comprehensive platform."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Video Commerce Platform</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Transform Your E-commerce with Interactive Videos
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create engaging shopping experiences with shoppable videos and live events that drive conversions
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                  <Play className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/product/hero-video.jpg"
                alt="LyveCom Platform Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose LyveCom</Badge>
            <h2 className="text-3xl font-bold mb-4">Drive Better Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform helps businesses achieve remarkable results through interactive video commerce
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center card-hover">
                <h3 className="text-4xl font-bold text-primary mb-4">{benefit.stats}</h3>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Platform Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of tools to create engaging video commerce experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Brands</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers say about their experience with LyveCom
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Get Started</Badge>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your E-commerce?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses already using LyveCom to create engaging shopping experiences
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Start Free Trial
                <Rocket className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
                <MessageCircle className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
