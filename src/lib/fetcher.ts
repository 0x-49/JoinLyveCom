export const fetcher = async <T>(url: string): Promise<T> => {
	const res = await fetch(url);
	
	if (!res.ok) {
		const error = new Error('An error occurred while fetching the data.');
		error.message = await res.json();
		throw error;
	}

	return res.json();
};

export const API_ENDPOINTS = {
	products: '/api/products',
	product: (id: string) => `/api/products/${id}`,
	categories: '/api/categories',
	category: (slug: string) => `/api/categories/${slug}`,
	posts: '/api/posts',
	post: (slug: string) => `/api/posts/${slug}`,
};