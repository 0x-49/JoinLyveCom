import Head from 'next/head';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Cpu,
  Database,
  Lock,
  Zap,
  ArrowRight,
  FileText,
  BookOpen,
  MessageCircle,
  Globe,
  Key,
  Webhook,
  RefreshCw,
  Server
} from 'lucide-react';

const features = [
  {
    icon: <Webhook className="w-6 h-6" />,
    title: "RESTful Endpoints",
    description: "Clean and intuitive REST API endpoints for seamless integration with your platform."
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Real-time Updates",
    description: "WebSocket support for real-time data synchronization and live event streaming."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Scalable Infrastructure",
    description: "Built on enterprise-grade infrastructure to handle millions of requests."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Authentication",
    description: "OAuth 2.0 and API key authentication with role-based access control."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Management",
    description: "Comprehensive data management APIs for products, videos, and analytics."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Smart Processing",
    description: "Advanced video processing APIs with AI-powered features and optimization."
  }
];

const codeExamples = {
  authentication: `
// Authentication Example
const lyvecom = new LyveCom({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Initialize client
await lyvecom.initialize();
  `,
  createVideo: `
// Create Interactive Video
const video = await lyvecom.videos.create({
  title: 'Product Showcase',
  url: 'https://example.com/video.mp4',
  products: [
    {
      id: 'prod_123',
      timestamp: 15, // seconds
      position: { x: 0.5, y: 0.3 }
    }
  ]
});
  `,
  analytics: `
// Fetch Analytics
const analytics = await lyvecom.analytics.get({
  videoId: 'vid_123',
  startDate: '2025-01-01',
  endDate: '2025-01-31',
  metrics: ['views', 'clicks', 'conversions']
});
  `
};

export default function APIPage() {
  return (
    <>
      <Head>
        <title>API Documentation | LyveCom</title>
        <meta
          name="description"
          content="Integrate video commerce capabilities into your platform with our comprehensive API. Access documentation, SDKs, and developer resources."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Developer Resources</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Build with LyveCom API
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Powerful and flexible APIs to integrate video commerce capabilities into your platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Get API Key
                <Key className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
                <FileText className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">API Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Built for Developers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create powerful video commerce experiences
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

      {/* Code Examples Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Code Examples</Badge>
            <h2 className="text-3xl font-bold mb-4">Simple Integration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started quickly with our easy-to-use SDKs and code examples
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="authentication">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="authentication">Authentication</TabsTrigger>
                <TabsTrigger value="createVideo">Create Video</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              {Object.entries(codeExamples).map(([key, code]) => (
                <TabsContent key={key} value={key}>
                  <Card className="bg-black text-white p-6">
                    <pre className="text-sm overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Resources</Badge>
            <h2 className="text-3xl font-bold mb-4">Developer Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and scale with LyveCom
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Documentation",
                description: "Comprehensive guides and API reference"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "SDKs & Libraries",
                description: "Official SDKs for popular languages"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "API Status",
                description: "Real-time API performance monitoring"
              }
            ].map((resource, index) => (
              <Card key={index} className="p-6 card-hover text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Create your free API key and start integrating video commerce features today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Get API Key
                <Key className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Support
                <MessageCircle className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Quick setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Secure by default</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
