import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Filter, 
  SlidersHorizontal, 
  Star, 
  ChevronDown, 
  ShoppingCart, 
  Play,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";

// Mock data - replace with real data from your API
const categoryData = {
  tech: {
    title: "Tech & Gadgets",
    description: "Discover the latest in technology and innovative gadgets",
    heroImage: "/images/tech-hero.jpg",
    products: [
      {
        id: 1,
        name: "Smart Home Hub Pro",
        price: 199.99,
        rating: 4.8,
        reviews: 256,
        image: "/images/product1.jpg",
        video: "/videos/product1.mp4",
        description: "Control your entire home with this advanced smart hub",
        features: ["Voice Control", "AI Integration", "Energy Monitoring"],
        stats: {
          satisfaction: "98%",
          delivery: "2-day",
          warranty: "2 years"
        }
      },
      // Add more products...
    ]
  },
  // Add more categories...
};

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const category = categoryData[slug as keyof typeof categoryData];

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Head>
        <title>{category.title} - Best {category.title} Products & Reviews | LyveCom</title>
        <meta
          name="description"
          content={`Discover the best ${category.title.toLowerCase()} products with detailed reviews, video demonstrations, and expert recommendations. Shop our curated selection with free shipping available.`}
        />
        <meta
          name="keywords"
          content={`${category.title.toLowerCase()}, ${category.title.toLowerCase()} products, best ${category.title.toLowerCase()}, ${category.title.toLowerCase()} reviews, buy ${category.title.toLowerCase()}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: `${category.title} Products`,
              description: category.description,
              url: `https://yourdomain.com/category/${slug}`,
              hasPart: category.products.map(product => ({
                "@type": "Product",
                name: product.name,
                description: product.description,
                image: product.image,
                offers: {
                  "@type": "Offer",
                  price: product.price,
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock"
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: product.rating,
                  reviewCount: product.reviews
                }
              }))
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              {category.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {category.description}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Shop Now
                <ShoppingCart className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
                <Play className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Sort Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                    <SheetDescription>
                      Refine your search with these filters
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Price Range</h3>
                      <Slider
                        value={priceRange}
                        min={0}
                        max={1000}
                        step={10}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    {/* Add more filter options */}
                  </div>
                </SheetContent>
              </Sheet>
              <div className="flex gap-2 flex-wrap">
                {activeFilters.map((filter) => (
                  <Badge key={filter} variant="secondary" className="cursor-pointer">
                    {filter}
                    <button 
                      className="ml-1"
                      onClick={() => setActiveFilters(filters => filters.filter(f => f !== filter))}
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12" aria-label="Product listings">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured {category.title} Products</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            role="list"
            aria-label="Products grid"
          >
            {category.products.map((product) => (
              <Card
                key={product.id}
                className="card-hover"
                role="listitem"
                aria-label={`${product.name} product details`}
              >
                <CardHeader>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.description} in the ${category.title} category`}
                      fill
                      className="object-cover"
                      priority={product.id <= 4} // Prioritize loading for first 4 products
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-2 right-2"
                      aria-label={`Watch ${product.name} product video`}
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{product.name}</h3>
                    <CardDescription>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                          <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                          <span className="ml-1 font-medium">{product.rating}</span>
                        </div>
                        <span className="text-muted-foreground">
                          ({product.reviews} customer reviews)
                        </span>
                      </div>
                      <p className="font-bold text-lg" aria-label={`Price: $${product.price}`}>
                        ${product.price}
                      </p>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <TrendingUp className="w-4 h-4 mx-auto mb-1" aria-hidden="true" />
                      <span className="text-sm font-medium">{product.stats.satisfaction}</span>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <Clock className="w-4 h-4 mx-auto mb-1" aria-hidden="true" />
                      <span className="text-sm font-medium">{product.stats.delivery}</span>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <CheckCircle className="w-4 h-4 mx-auto mb-1" aria-hidden="true" />
                      <span className="text-sm font-medium">{product.stats.warranty}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    Add to Cart
                    <ShoppingCart className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reviews Section */}
      <section className="py-12 bg-muted/30" itemScope itemType="https://schema.org/VideoObject">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Customer Video Reviews</h2>
            <p className="text-muted-foreground">Real experiences from verified buyers</p>
          </div>
          <Carousel>
            <CarouselContent>
              {[
                {
                  id: 1,
                  title: "Amazing Product Experience",
                  video: "/videos/review1.mp4",
                  thumbnail: "/images/review1-thumb.jpg",
                  reviewer: "Sarah Johnson",
                  rating: 5,
                  date: "2024-01-15"
                },
                {
                  id: 2,
                  title: "Best Purchase Ever",
                  video: "/videos/review2.mp4",
                  thumbnail: "/images/review2-thumb.jpg",
                  reviewer: "Mike Thompson",
                  rating: 5,
                  date: "2024-01-14"
                },
                {
                  id: 3,
                  title: "Exceeded Expectations",
                  video: "/videos/review3.mp4",
                  thumbnail: "/images/review3-thumb.jpg",
                  reviewer: "Emily Davis",
                  rating: 4,
                  date: "2024-01-13"
                }
              ].map((review) => (
                <CarouselItem
                  key={review.id}
                  className="md:basis-1/2 lg:basis-1/3"
                  itemScope
                  itemType="https://schema.org/VideoObject"
                >
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                           src={review.thumbnail}
                           alt={`${review.reviewer}'s video review of ${category.title} products`}
                           fill
                           className="object-cover"
                           itemProp="thumbnailUrl"
                         />
                         <meta itemProp="name" content={review.title} />
                         <meta itemProp="description" content={`Video review by ${review.reviewer}`} />
                         <meta itemProp="uploadDate" content={review.date} />
                         <meta itemProp="contentUrl" content={review.video} />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          aria-label="Play video review"
                        >
                          <Play className="w-8 h-8" />
                        </Button>
                      </div>
                      <CardTitle className="text-lg">{review.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center justify-between">
                          <span>{review.reviewer}</span>
                          <div className="flex items-center">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Related Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                slug: "lifestyle",
                title: "Lifestyle",
                image: "/images/lifestyle-category.jpg",
                description: "Products for modern living"
              },
              {
                slug: "wellness",
                title: "Wellness",
                image: "/images/wellness-category.jpg",
                description: "Health and wellness solutions"
              },
              {
                slug: "home",
                title: "Smart Home",
                image: "/images/smart-home-category.jpg",
                description: "Connected home devices"
              },
              {
                slug: "accessories",
                title: "Accessories",
                image: "/images/accessories-category.jpg",
                description: "Essential add-ons"
              }
            ].map((relatedCategory) => (
              <Card
                key={relatedCategory.slug}
                className="card-hover cursor-pointer"
                onClick={() => router.push(`/category/${relatedCategory.slug}`)}
              >
                <div className="relative aspect-video">
                  <Image
                    src={relatedCategory.image}
                    alt={`${relatedCategory.title} category - Browse our ${relatedCategory.title.toLowerCase()} collection`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{relatedCategory.title}</CardTitle>
                  <CardDescription>{relatedCategory.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
