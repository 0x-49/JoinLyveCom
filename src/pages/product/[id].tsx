import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { generateProductSchema } from '@/lib/structured-data';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Check, X } from "lucide-react";
import Header from '@/components/Header';
import { Product } from '@/types/product';

// This would typically come from an API
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Premium Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring and sleep analysis',
    category: 'Tech',
    price: 199.99,
    rating: 4.5,
    reviews: 128,
    image: '/images/rect.png',
    affiliateLink: 'https://example.com/product1',
    features: ['Heart Rate Monitoring', 'Sleep Analysis', 'Water Resistant'],
    pros: ['Accurate tracking', 'Long battery life', 'Comfortable'],
    cons: ['Premium price', 'Limited color options']
  },
  {
    id: '2',
    title: 'Ergonomic Office Chair',
    description: 'Premium office chair designed for comfort during long work hours',
    category: 'Lifestyle',
    price: 299.99,
    rating: 4.8,
    reviews: 256,
    image: '/images/rect.png',
    affiliateLink: 'https://example.com/product2',
    features: ['Adjustable Height', 'Lumbar Support', 'Breathable Mesh'],
    pros: ['Very comfortable', 'Great back support', 'Easy assembly'],
    cons: ['Takes up space', 'Premium pricing']
  },
  {
    id: '3',
    title: 'Meditation Cushion Set',
    description: 'Premium meditation cushions for comfort and proper posture',
    category: 'Wellness',
    price: 79.99,
    rating: 4.7,
    reviews: 89,
    image: '/images/rect.png',
    affiliateLink: 'https://example.com/product3',
    features: ['Ergonomic Design', 'Natural Materials', 'Washable Cover'],
    pros: ['Very comfortable', 'Improves posture', 'Durable'],
    cons: ['Limited color options']
  }
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
        <Head>
        <title>{product.title} | Premium Lifestyle Products</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema(product))
          }}
        />
        </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container px-4 py-8">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => router.push(`/category/${product.category}`)}
          >
            ← Back to {product.category}
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <Badge>{product.category}</Badge>
              <h1 className="text-4xl font-bold">{product.title}</h1>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'fill-primary text-primary' 
                          : 'fill-muted text-muted'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-3xl font-bold">${product.price}</p>
              
              <p className="text-muted-foreground text-lg">
                {product.description}
              </p>

              <Button 
                size="lg" 
                className="w-full"
                onClick={() => window.open(product.affiliateLink, '_blank')}
              >
                Buy Now
              </Button>

              {/* Features */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4 text-primary">Pros</h2>
                    <ul className="space-y-2">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4 text-destructive">Cons</h2>
                    <ul className="space-y-2">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <X className="w-5 h-5 text-destructive" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}