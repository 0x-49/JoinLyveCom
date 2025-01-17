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
	}
];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { id } = req.query;

		if (req.method === 'GET') {
			const product = MOCK_PRODUCTS.find(p => p.id === id);
			
			if (!product) {
				return res.status(404).json({ message: 'Product not found' });
			}
			
			return res.status(200).json(product);
		}
		
		return res.status(405).json({ message: 'Method not allowed' });
	} catch (error) {
		console.error('Product API Error:', error);
		return res.status(500).json({ message: 'Internal server error' });
	}
}