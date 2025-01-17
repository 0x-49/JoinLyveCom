import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/types/product';

// This would typically come from a database
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
	// Add more products as needed
];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method === 'GET') {
			// Add pagination
			const page = Number(req.query.page) || 1;
			const limit = Number(req.query.limit) || 10;
			const category = req.query.category as string;
			
			let filteredProducts = [...MOCK_PRODUCTS];
			
			// Apply category filter if provided
			if (category) {
				filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
			}
			
			// Apply pagination
			const startIndex = (page - 1) * limit;
			const endIndex = page * limit;
			const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
			
			return res.status(200).json({
				products: paginatedProducts,
				pagination: {
					total: filteredProducts.length,
					page,
					limit,
					totalPages: Math.ceil(filteredProducts.length / limit)
				}
			});
		}
		
		return res.status(405).json({ message: 'Method not allowed' });
	} catch (error) {
		console.error('Products API Error:', error);
		return res.status(500).json({ message: 'Internal server error' });
	}
}