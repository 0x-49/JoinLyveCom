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
        <title>{category.title} | LyveCom</title>
        <meta name="description" content={category.description} />
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
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <Card key={product.id} className="card-hover">
                <CardHeader>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-2 right-2"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">{product.rating}</span>
                      </div>
                      <span className="text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <p className="font-bold text-lg">${product.price}</p>
                  </CardDescription>
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
                      <TrendingUp className="w-4 h-4 mx-auto mb-1" />
                      <span className="text-sm font-medium">{product.stats.satisfaction}</span>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <Clock className="w-4 h-4 mx-auto mb-1" />
                      <span className="text-sm font-medium">{product.stats.delivery}</span>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <CheckCircle className="w-4 h-4 mx-auto mb-1" />
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
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Customer Video Reviews</h2>
            <p className="text-muted-foreground">See what our customers are saying</p>
          </div>
          <Carousel>
            <CarouselContent>
              {/* Add video review carousel items */}
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
            {/* Add related category cards */}
          </div>
        </div>
      </section>
    </>
  );
}
