import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const solutions = [
  {
    title: "Video Commerce",
    href: "/video-commerce",
    description: "Transform your content into shoppable experiences",
  },
  {
    title: "Live Shopping",
    href: "/live-shopping",
    description: "Engage with your audience in real-time shopping events",
  },
  {
    title: "Analytics",
    href: "/analytics",
    description: "Track and optimize your video commerce performance",
  },
];

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to integrate and use our platform",
  },
  {
    title: "API Reference",
    href: "/api",
    description: "Detailed API documentation for developers",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest updates, tips, and best practices",
  },
];

export default function Header() {
  // SEO: Add structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LyveCom",
    "url": "https://joinlyve.com",
    "logo": "https://joinlyve.com/images/black_logo.png",
    "description": "Next-generation video commerce platform transforming content into shoppable experiences"
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      aria-label="Main website header"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            aria-label="Homepage"
          >
            <Logo />
            <span className="sr-only">LyveCom Home</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {solutions.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {resources.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="hover:bg-accent/90 focus:ring-2 focus:ring-primary"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-foreground/90" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground/90" />
                )}
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="hover:bg-accent/90 focus:ring-2 focus:ring-primary"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-foreground/90" />
              ) : (
                <Moon className="h-5 w-5 text-foreground/90" />
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="hover:bg-accent/90 focus:ring-2 focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-14 px-6 hover:bg-accent/90 focus:ring-2 focus:ring-primary text-base"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                    Solutions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {solutions.map((item) => (
                    <DropdownMenuItem 
                      key={item.title} 
                      asChild
                      className="focus:bg-accent/90 focus:ring-2 focus:ring-primary"
                    >
                      <Link 
                        href={item.href}
                        className="w-full p-2"
                        aria-label={`Learn about ${item.title}`}
                      >
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start hover:bg-accent/90 focus:ring-2 focus:ring-primary"
                  >
                    Resources
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {resources.map((item) => (
                    <DropdownMenuItem 
                      key={item.title} 
                      asChild
                      className="focus:bg-accent/90 focus:ring-2 focus:ring-primary"
                    >
                      <Link 
                        href={item.href}
                        className="w-full p-2"
                        aria-label={`Access ${item.title}`}
                      >
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/pricing" className="block">
                <Button variant="ghost" className="w-full justify-start">Pricing</Button>
              </Link>

              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
