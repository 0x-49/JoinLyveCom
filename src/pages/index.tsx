import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Rocket, 
  Video, 
  ShoppingBag, 
  Zap, 
  ArrowRight, 
  Check, 
  Play, 
  Globe, 
  Clock, 
  BarChart, 
  Users, 
  HelpCircle,
  Download,
  Upload,
  Building,
  Headphones,
  ShieldCheck
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>LyveCom | Video Commerce Platform for Shopify</title>
        <meta name="description" content="Transform your Shopify store with shoppable videos, live shopping, and AI-powered video commerce solutions. Boost engagement and sales with LyveCom." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90 py-2">
          <div className="container text-center text-sm text-white font-medium">
            🎉 Breaking News: LyveCom + ShopApp Integration Now Live! Limited Time Launch Offer
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
          <div className="absolute inset-0 gradient-bg opacity-20"></div>
          <div className="container px-4 flex flex-col items-center text-center space-y-8 relative z-10">
            <Badge variant="secondary" className="mb-4 text-lg py-2 px-4 bg-secondary/20 text-secondary-foreground">
              <Sparkles className="w-5 h-5 mr-2" /> REVOLUTIONARY VIDEO COMMERCE PLATFORM
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter animate-float text-shadow">
              Turn Your Shopify Store Into a<br/>
              <span className="text-gradient">Video Shopping Paradise</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-[800px] leading-relaxed">
              Stop losing sales to static, boring product pages. LyveCom transforms your store with shoppable videos, live shopping, and AI-powered recommendations — all without slowing down your site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="text-lg px-8 py-6 gradient-bg text-white">
                Start 14-Day Free Trial <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Watch Demo <Play className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: <BarChart className="w-6 h-6 text-primary" />, stat: "10X ROI", text: "Average return on investment" },
                { icon: <Users className="w-6 h-6 text-secondary" />, stat: "40% Higher", text: "Customer engagement rate" },
                { icon: <Clock className="w-6 h-6 text-accent" />, stat: "5X Longer", text: "Session duration" }
              ].map((item) => (
                <div key={item.stat} className="flex flex-col items-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  {item.icon}
                  <h3 className="text-2xl font-bold mt-2 text-gradient">{item.stat}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Struggling with These E-commerce Challenges?
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                You're not alone. Here's what we hear from store owners every day:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Low Conversion Rates",
                  description: "Static product pages fail to engage visitors, leading to high bounce rates and lost sales opportunities."
                },
                {
                  title: "Complex Integration",
                  description: "Most video solutions require technical expertise and slow down your site, hurting your SEO and user experience."
                },
                {
                  title: "Content Creation",
                  description: "Creating engaging product videos is time-consuming and expensive, especially when you need fresh content regularly."
                },
                {
                  title: "Mobile Experience",
                  description: "Your mobile shopping experience isn't optimized for video, missing out on the fastest-growing shopping segment."
                },
                {
                  title: "Social Proof",
                  description: "Difficulty showcasing user-generated content and reviews in an engaging, conversion-focused way."
                },
                {
                  title: "Live Shopping",
                  description: "Missing out on live shopping trends because traditional solutions are complex and expensive to implement."
                }
              ].map((pain) => (
                <Card key={pain.title} className="card-hover border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{pain.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {pain.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Rocket className="w-4 h-4 mr-2" /> THE LYVECOM SOLUTION
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Everything You Need for Video Commerce Success
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                One platform. Multiple ways to boost your sales with video.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Shoppable Videos",
                  description: "Transform any video into an interactive shopping experience",
                  features: [
                    "One-click import from TikTok, Instagram, & YouTube",
                    "Instant product tagging with AI assistance",
                    "Zero impact on site speed with our CDN",
                    "Mobile-optimized playback and checkout",
                    "Detailed analytics and conversion tracking"
                  ],
                  icon: <Video className="w-12 h-12" />
                },
                {
                  title: "Live Shopping Events",
                  description: "Host engaging live shopping experiences that drive sales",
                  features: [
                    "Multi-channel broadcasting to social platforms",
                    "Real-time product showcasing and checkout",
                    "Interactive chat and Q&A features",
                    "Automated event recordings and replays",
                    "Built-in promotional tools and countdown timers"
                  ],
                  icon: <Globe className="w-12 h-12" />
                },
                {
                  title: "AI-Powered Personalization",
                  description: "Deliver personalized video experiences that convert",
                  features: [
                    "Smart product recommendations",
                    "Automated content curation",
                    "Behavioral analytics and insights",
                    "Dynamic video feed optimization",
                    "A/B testing capabilities"
                  ],
                  icon: <Zap className="w-12 h-12" />
                },
                {
                  title: "ShopMini Integration",
                  description: "Quick and easy video commerce for your Shop App",
                  features: [
                    "3-click setup process",
                    "Automatic content syncing",
                    "Custom branding options",
                    "Native mobile experience",
                    "Integrated analytics dashboard"
                  ],
                  icon: <ShoppingBag className="w-12 h-12" />
                }
              ].map((solution) => (
                <Card key={solution.title} className="card-hover gradient-border">
                  <CardHeader>
                    <div className="mb-4 text-primary">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-2xl text-gradient">{solution.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-muted-foreground">
                          <Check className="w-5 h-5 mr-2 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Users className="w-4 h-4 mr-2" /> SUCCESS STORIES
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Trusted by Leading Brands
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                See how top brands are transforming their e-commerce experience with LyveCom
              </p>
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    brand: "Glamnetic",
                    title: "10X ROI with Shoppable Videos",
                    description: "We implemented LyveCom's shoppable videos across our product pages and saw immediate results. Our conversion rate jumped by 300%, and customers are spending 5x longer on our site.",
                    quote: "LyveCom transformed how we showcase our products. The ability to demonstrate our magnetic lashes through shoppable videos has been a game-changer for our conversion rates.",
                    author: "Ann McFerran, CEO",
                    stats: ["40% Engagement Rate", "5X Session Duration", "300% Revenue Increase"]
                  },
                  {
                    brand: "GFuel",
                    title: "Viral Live Shopping Success",
                    description: "Our Halloween collaboration with Warner Bros. using LyveCom's live shopping platform was our most successful event ever. We reached 50K+ viewers and sold out our limited edition products in minutes.",
                    quote: "The seamless integration between live streaming and instant checkout made our product launch an incredible success. The analytics provided valuable insights for future events.",
                    author: "Marketing Director",
                    stats: ["50K+ Live Viewers", "200% Sales Increase", "3X Customer Retention"]
                  }
                ].map((study) => (
                  <CarouselItem key={study.brand} className="md:basis-1/2 lg:basis-1/2 p-2">
                    <Card className="card-hover gradient-border h-full">
                      <CardHeader>
                        <Badge className="w-fit mb-4 bg-primary/20 text-primary">{study.brand}</Badge>
                        <CardTitle className="text-2xl text-gradient">{study.title}</CardTitle>
                        <CardDescription className="text-lg mt-4">
                          {study.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                          "{study.quote}"
                          <footer className="mt-2 font-medium text-primary">
                            - {study.author}
                          </footer>
                        </blockquote>
                        <div className="flex flex-wrap gap-2">
                          {study.stats.map((stat) => (
                            <Badge key={stat} variant="secondary" className="text-sm">
                              {stat}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <HelpCircle className="w-4 h-4 mr-2" /> FAQ
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Common Questions About LyveCom
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Everything you need to know about transforming your store with video commerce
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
              {[
                {
                  q: "How quickly can I get started with LyveCom?",
                  a: "You can start transforming your store in minutes! Our 3-click setup process makes it easy to import videos from TikTok, Instagram, or YouTube and make them shoppable instantly."
                },
                {
                  q: "Will adding videos slow down my store?",
                  a: "Not at all! We use advanced CDN technology and lazy loading to ensure your videos load lightning fast without impacting your site's performance or SEO."
                },
                {
                  q: "Do I need to create new video content?",
                  a: "No! You can easily import existing content from social media or use your product videos. Our AI helps tag products automatically, saving you time and effort."
                },
                {
                  q: "How does live shopping work?",
                  a: "Our platform lets you host live shopping events directly on your store while simultaneously broadcasting to social channels. Customers can purchase products with one click during the stream."
                },
                {
                  q: "What kind of support do you offer?",
                  a: "We provide 24/7 technical support, detailed documentation, and dedicated account managers for enterprise clients. Plus, our team helps you optimize your video strategy for maximum ROI."
                },
                {
                  q: "Is LyveCom compatible with my Shopify theme?",
                  a: "Yes! LyveCom works seamlessly with all Shopify themes. Our widgets and components are fully customizable to match your brand's look and feel."
                }
              ].map((faq, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{faq.q}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {faq.a}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Steps */}
        <section className="py-24 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Rocket className="w-4 h-4 mr-2" /> QUICK START
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Three Simple Steps to Get Started
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Transform your store into a video commerce powerhouse in minutes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {[
                {
                  title: "1. Install the App",
                  description: "Add LyveCom to your Shopify store with one click - no coding required.",
                  icon: <Download className="w-12 h-12" />
                },
                {
                  title: "2. Import Videos",
                  description: "Connect your social media accounts or upload your product videos directly.",
                  icon: <Upload className="w-12 h-12" />
                },
                {
                  title: "3. Go Live",
                  description: "Your videos are automatically optimized and made shoppable. Start selling!",
                  icon: <Zap className="w-12 h-12" />
                }
              ].map((step, index) => (
                <Card key={index} className="card-hover text-center relative">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-2xl flex items-center justify-center">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <CardHeader>
                    <div className="mb-4 text-primary mx-auto">
                      {step.icon}
                    </div>
                    <CardTitle className="text-2xl text-gradient">{step.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-[1000px] mx-auto">
              {[
                {
                  title: "Shopify Plus Partner",
                  icon: <ShoppingBag className="w-8 h-8" />
                },
                {
                  title: "Enterprise Ready",
                  icon: <Building className="w-8 h-8" />
                },
                {
                  title: "24/7 Support",
                  icon: <Headphones className="w-8 h-8" />
                },
                {
                  title: "GDPR Compliant",
                  icon: <ShieldCheck className="w-8 h-8" />
                }
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="text-primary mb-2">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-medium">{badge.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 gradient-bg opacity-10"></div>
          <div className="container px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Transform Your Store?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[800px] mx-auto">
              Join thousands of successful brands using LyveCom. Start your 14-day free trial today and see the difference video commerce can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 gradient-bg text-white">
                Start Free Trial <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Pricing <ShoppingBag className="ml-2" />
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>No credit card required • Full feature access • Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}