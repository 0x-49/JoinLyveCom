interface ProductStructuredData {
	id: string;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
	rating?: number;
	reviews?: number;
}

interface ArticleStructuredData {
	title: string;
	description: string;
	image?: string;
	datePublished: string;
	author: string;
	category?: string;
}

export const generateProductSchema = (product: ProductStructuredData) => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		productID: product.id,
		name: product.title,
		description: product.description,
		image: product.image,
		offers: {
			'@type': 'Offer',
			price: product.price,
			priceCurrency: 'USD',
			availability: 'https://schema.org/InStock'
		},
		...(product.rating && {
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: product.rating,
				reviewCount: product.reviews || 0
			}
		}),
		category: product.category
	};
};

export const generateArticleSchema = (article: ArticleStructuredData) => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: article.title,
		description: article.description,
		image: article.image,
		datePublished: article.datePublished,
		author: {
			'@type': 'Person',
			name: article.author
		},
		...(article.category && {
			articleSection: article.category
		})
	};
};