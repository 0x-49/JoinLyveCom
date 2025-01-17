import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Badge } from "./badge";

interface ComparisonFeature {
	name: string;
	description?: string;
	competitors: {
		[key: string]: boolean | string;
	};
}

interface ComparisonTableProps {
	features: ComparisonFeature[];
	competitors: string[];
}

export function ComparisonTable({ features, competitors }: ComparisonTableProps) {
	return (
		<div className="rounded-lg border bg-card">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[200px]">Feature</TableHead>
						{competitors.map((competitor) => (
							<TableHead key={competitor} className="text-center">
								{competitor}
								{competitor === "Our Solution" && (
									<Badge className="ml-2" variant="secondary">
										Recommended
									</Badge>
								)}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{features.map((feature) => (
						<TableRow key={feature.name}>
							<TableCell className="font-medium">
								{feature.name}
								{feature.description && (
									<p className="text-sm text-muted-foreground">
										{feature.description}
									</p>
								)}
							</TableCell>
							{competitors.map((competitor) => (
								<TableCell key={competitor} className="text-center">
									{typeof feature.competitors[competitor] === "boolean" ? (
										feature.competitors[competitor] ? (
											<Check className="mx-auto h-5 w-5 text-primary" />
										) : (
											<X className="mx-auto h-5 w-5 text-muted-foreground" />
										)
									) : (
										feature.competitors[competitor]
									)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}