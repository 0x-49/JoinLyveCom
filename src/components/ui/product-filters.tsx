import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Slider } from "./slider";
import { useState } from "react";

interface FilterProps {
	onFilterChange: (filters: FilterState) => void;
	onSortChange: (sort: string) => void;
	minPrice: number;
	maxPrice: number;
}

interface FilterState {
	priceRange: [number, number];
	rating: number | null;
}

export function ProductFilters({ onFilterChange, onSortChange, minPrice, maxPrice }: FilterProps) {
	const [filters, setFilters] = useState<FilterState>({
		priceRange: [minPrice, maxPrice],
		rating: null
	});

	const handlePriceChange = (value: [number, number]) => {
		const newFilters = { ...filters, priceRange: value };
		setFilters(newFilters);
		onFilterChange(newFilters);
	};

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h3 className="font-semibold">Filters</h3>
				<Button 
					variant="ghost" 
					size="sm"
					onClick={() => {
						setFilters({ priceRange: [minPrice, maxPrice], rating: null });
						onFilterChange({ priceRange: [minPrice, maxPrice], rating: null });
					}}
				>
					Reset
				</Button>
			</div>

			<div className="space-y-2">
				<label className="text-sm font-medium">Price Range</label>
				<Slider
					min={minPrice}
					max={maxPrice}
					step={1}
					value={filters.priceRange}
					onValueChange={handlePriceChange}
					className="my-4"
				/>
				<div className="flex justify-between text-sm text-muted-foreground">
					<span>${filters.priceRange[0]}</span>
					<span>${filters.priceRange[1]}</span>
				</div>
			</div>

			<div className="space-y-2">
				<label className="text-sm font-medium">Sort By</label>
				<Select onValueChange={onSortChange}>
					<SelectTrigger>
						<SelectValue placeholder="Select order" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="price-asc">Price: Low to High</SelectItem>
						<SelectItem value="price-desc">Price: High to Low</SelectItem>
						<SelectItem value="rating-desc">Highest Rated</SelectItem>
						<SelectItem value="newest">Newest First</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}