import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "./button";

interface CaseStudyMetric {
	label: string;
	value: string;
	trend?: number;
}

interface CaseStudyProps {
	title: string;
	company: string;
	description: string;
	metrics: CaseStudyMetric[];
	image: string;
	testimonial?: {
		quote: string;
		author: string;
		role: string;
	};
}

export function CaseStudyCard({
	title,
	company,
	description,
	metrics,
	image,
	testimonial,
}: CaseStudyProps) {
	return (
		<Card className="overflow-hidden transition-all hover:shadow-lg">
			<CardHeader className="border-b bg-muted/40 p-6">
				<Badge className="w-fit mb-2">{company}</Badge>
				<CardTitle className="text-2xl">{title}</CardTitle>
				<CardDescription className="mt-2">{description}</CardDescription>
			</CardHeader>
			<CardContent className="p-6">
				<div className="grid grid-cols-2 gap-4 mb-6">
					{metrics.map((metric) => (
						<div key={metric.label} className="space-y-1">
							<p className="text-sm text-muted-foreground">{metric.label}</p>
							<p className="text-2xl font-bold">{metric.value}</p>
							{metric.trend && (
								<div className="flex items-center text-sm text-green-500">
									<TrendingUp className="w-4 h-4 mr-1" />
									+{metric.trend}%
								</div>
							)}
						</div>
					))}
				</div>
				{testimonial && (
					<blockquote className="border-l-4 border-primary pl-4 italic mb-6">
						"{testimonial.quote}"
						<footer className="mt-2 text-sm">
							<strong>{testimonial.author}</strong>
							<span className="text-muted-foreground"> - {testimonial.role}</span>
						</footer>
					</blockquote>
				)}
				<Button variant="outline" className="w-full">
					Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
				</Button>
			</CardContent>
		</Card>
	);
}