interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export const DEFAULT_SEO = {
  title: 'Premium Lifestyle Products | Your Trusted Shopping Guide',
  description: 'Discover curated premium lifestyle products with expert reviews and recommendations for Tech, Lifestyle, and Wellness categories.',
  ogImage: '/images/og-image.jpg', // You'll need to add this image
  canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
};

export const getSEOData = ({
  title,
  description,
  canonical,
  ogImage,
  noindex,
}: SEOProps) => {
  const seoTitle = title ? `${title} | Premium Lifestyle Products` : DEFAULT_SEO.title;
  
  return {
    title: seoTitle,
    description: description || DEFAULT_SEO.description,
    canonical: canonical || DEFAULT_SEO.canonical,
    openGraph: {
      title: seoTitle,
      description: description || DEFAULT_SEO.description,
      images: [{ url: ogImage || DEFAULT_SEO.ogImage }],
      site_name: 'Premium Lifestyle Products',
    },
    noindex: noindex || false,
  };
};