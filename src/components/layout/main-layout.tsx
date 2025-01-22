import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

interface MainLayoutProps {
  children: ReactNode;
  metaDescription?: string;
  pageTitle?: string;
}

export default function MainLayout({
  children,
  metaDescription = 'LyveCom - Next-generation video commerce platform transforming content into shoppable experiences',
  pageTitle = 'LyveCom | Video Commerce Platform & Live Shopping Solutions'
 }: MainLayoutProps) {
  const router = useRouter();

  // Track performance metrics
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.performance) {
        const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page load time:', navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "LyveCom",
          "url": "https://www.lyvecom.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      <div className="min-h-screen flex flex-col bg-background relative">
        {/* Skip navigation link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-primary"
          aria-label="Skip to main content"
        >
          Skip to content
        </a>
        
        <Header />
        <main
          id="main-content"
          className="flex-grow container mx-auto px-[var(--page-gutter)] py-[var(--spacing-2xl)]"
          role="main"
          itemScope
          itemType="https://schema.org/WebPage"
          style={{
            fontSize: 'var(--step-0)',
            containerType: 'inline-size',
            maxWidth: 'min(90rem, 100% - var(--page-gutter) * 2)'
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
