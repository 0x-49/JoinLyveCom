import { generateArticleSchema } from '@/lib/structured-data';
import Head from 'next/head';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/router';
import {
  Search,
  Tag,
  Clock,
  User,
  ArrowRight,
  Mail,
  TrendingUp,
  BookOpen,
  Star
} from 'lucide-react';

// Mock blog posts - in a real app this would come from an API or CMS
const BLOG_POSTS = [
  {
    id: '1',
    title: 'How Video Commerce is Revolutionizing E-commerce',
    excerpt: 'Discover how shoppable videos are transforming the online shopping experience and driving unprecedented engagement.',
    category: 'E-commerce',
    author: 'Sarah Johnson',
    date: '2025-01-10',
    readTime: '5 min read',
    image: '/blog/video-commerce.jpg',
    tags: ['Video Commerce', 'E-commerce', 'Digital Transformation']
  },
  {
    id: '2',
    title: 'The Rise of Live Shopping: A Complete Guide',
    excerpt: "Everything you need to know about live shopping events and how they're changing the retail landscape.",
    category: 'Live Shopping',
    author: 'Michael Chen',
    date: '2025-01-08',
    readTime: '8 min read',
    image: '/blog/live-shopping.jpg',
    tags: ['Live Shopping', 'Social Commerce', 'Retail']
  },
  {
    id: '3',
    title: 'AI in E-commerce: Personalizing the Shopping Experience',
    excerpt: 'How artificial intelligence is making online shopping more personal and engaging than ever before.',
    category: 'Technology',
    author: 'Emma Davis',
    date: '2025-01-05',
    readTime: '6 min read',
    image: '/blog/ai-commerce.jpg',
    tags: ['AI', 'Personalization', 'Technology']
  },
  {
    id: '4',
    title: '10 Ways to Boost Your Video Commerce Strategy',
    excerpt: 'Practical tips and strategies to enhance your video commerce implementation and drive better results.',
    category: 'Strategy',
    author: 'James Wilson',
    date: '2025-01-03',
    readTime: '7 min read',
    image: '/blog/strategy.jpg',
    tags: ['Strategy', 'Video Commerce', 'Marketing']
  }
];

const FEATURED_POST = {
  id: 'featured',
  title: 'The Future of E-commerce: Video-First Shopping Experiences',
  excerpt: 'An in-depth look at how video commerce is reshaping the future of online retail and what it means for businesses.',
  category: 'Featured',
  author: 'Sarah Johnson',
  date: '2025-01-12',
  readTime: '10 min read',
  image: '/blog/featured.jpg',
  tags: ['Future of Retail', 'Video Commerce', 'E-commerce Trends']
};

export default function Blog() {
  const router = useRouter();

  return (
    <>
        <Head>
        <title>Blog | LyveCom - Video Commerce Insights</title>
        <meta 
          name="description" 
          content="Expert insights on video commerce, live shopping, and the future of e-commerce. Stay updated with the latest trends and strategies." 
        />
        <meta property="og:title" content="Blog | LyveCom - Video Commerce Insights" />
        <meta property="og:description" content="Expert insights on video commerce, live shopping, and the future of e-commerce." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema({
            title: FEATURED_POST.title,
            description: FEATURED_POST.excerpt,
            image: FEATURED_POST.image,
            datePublished: FEATURED_POST.date,
            author: FEATURED_POST.author,
            category: FEATURED_POST.category
          }))
          }}
        />
        </Head>

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">Our Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Video Commerce Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, success stories, and strategies to help you succeed with video commerce
            </p>
            <div className="relative max-w-xl">
              <Input 
                placeholder="Search articles..." 
                className="pl-10 pr-4 py-2"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container px-4">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3]">
                <Image
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                </div>
              <div className="p-8">
                <Badge className="mb-4">{FEATURED_POST.category}</Badge>
                <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                  {FEATURED_POST.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {FEATURED_POST.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{FEATURED_POST.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{FEATURED_POST.readTime}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {FEATURED_POST.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button>
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge variant="outline" className="mb-4">Latest Articles</Badge>
              <h2 className="text-3xl font-bold">Recent Insights</h2>
            </div>
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Card key={post.id} className="group card-hover">
                <CardHeader className="space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Categories</Badge>
            <h2 className="text-3xl font-bold mb-4">Explore Topics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deep into specific areas of video commerce
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Strategy",
                description: "Tips and strategies for video commerce success",
                count: "15 articles"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Best Practices",
                description: "Learn from successful implementations",
                count: "12 articles"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Tutorials",
                description: "Step-by-step guides and how-tos",
                count: "8 articles"
              }
            ].map((category, index) => (
              <Card key={index} className="p-6 card-hover text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <p className="text-sm font-medium">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Newsletter</Badge>
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest insights on video commerce delivered straight to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              By subscribing, you agree to our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}