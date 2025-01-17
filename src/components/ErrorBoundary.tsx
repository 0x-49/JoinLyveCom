import React from 'react';
import { Button } from './ui/button';

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo);
		// Here you would typically log to an error reporting service
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center bg-background">
					<div className="text-center p-8">
						<h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
						<p className="text-muted-foreground mb-8">
							We apologize for the inconvenience. Please try refreshing the page.
						</p>
						<Button onClick={() => window.location.reload()}>
							Refresh Page
						</Button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}