import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Check } from "lucide-react";

interface ValuePoint {
	title: string;
	description: string;
	benefits: string[];
}

interface ValuePropositionProps {
	title: string;
	subtitle: string;
	points: ValuePoint[];
}

export function ValueProposition({ title, subtitle, points }: ValuePropositionProps) {
	return (
		<div className="space-y-8">
			<div className="text-center">
				<Badge className="mb-4">Value Proposition</Badge>
				<h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
			</div>
			
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{points.map((point, index) => (
					<Card key={index} className="relative overflow-hidden">
						<div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full" />
						<CardHeader>
							<CardTitle>{point.title}</CardTitle>
							<CardDescription>{point.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{point.benefits.map((benefit, i) => (
									<li key={i} className="flex items-start">
										<Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
										<span>{benefit}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}