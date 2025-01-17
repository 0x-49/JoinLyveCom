import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award, 
  Star,
  Shield,
  Heart,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              About LyveCom
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Transforming E-commerce Through Video
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to revolutionize online shopping by making it more engaging, 
              interactive, and personal through the power of video commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, stat: "1M+", label: "Active Users" },
              { icon: <Target className="w-8 h-8" />, stat: "10X", label: "Average ROI" },
              { icon: <Award className="w-8 h-8" />, stat: "50+", label: "Industry Awards" },
              { icon: <Star className="w-8 h-8" />, stat: "4.9", label: "Customer Rating" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center card-hover">
                <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Mission</Badge>
            <h2 className="text-3xl font-bold mb-4">Why We Do What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in making online shopping as engaging and personal as in-store experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Customer First",
                description: "Everything we do is focused on creating the best possible experience for shoppers"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Innovation",
                description: "We're constantly pushing the boundaries of what's possible in e-commerce"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Trust & Security",
                description: "We maintain the highest standards of security and data protection"
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 card-hover text-center">
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold mb-4">Meet the Experts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse team of innovators, creators, and problem solvers
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "/team/sarah.jpg"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "/team/michael.jpg"
              },
              {
                name: "Emma Davis",
                role: "Head of Product",
                image: "/team/emma.jpg"
              },
              {
                name: "James Wilson",
                role: "Head of Customer Success",
                image: "/team/james.jpg"
              }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to video commerce
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "Quality Assurance",
                items: [
                  "Rigorous testing protocols",
                  "Performance optimization",
                  "Security audits",
                  "User experience validation"
                ]
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Fast Implementation",
                items: [
                  "Quick setup process",
                  "Seamless integration",
                  "Minimal downtime",
                  "24/7 support"
                ]
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Continuous Improvement",
                items: [
                  "Regular updates",
                  "Feature enhancements",
                  "Performance monitoring",
                  "Customer feedback loop"
                ]
              }
            ].map((process, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="text-primary mb-4 flex justify-center">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center">{process.title}</h3>
                <ul className="space-y-2">
                  {process.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Store?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses using LyveCom to boost their sales
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">Contact Sales</Button>
          </div>
        </div>
      </section>
    </>
  );
}