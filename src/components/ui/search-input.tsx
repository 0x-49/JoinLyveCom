import { Input } from "./input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchInputProps {
	onSearch: (value: string) => void;
	placeholder?: string;
}

export function SearchInput({ onSearch, placeholder = "Search..." }: SearchInputProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	useEffect(() => {
		onSearch(debouncedSearchTerm);
	}, [debouncedSearchTerm, onSearch]);

	return (
		<div className="relative">
			<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<Input
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder={placeholder}
				className="pl-10 pr-4"
			/>
		</div>
	);
}