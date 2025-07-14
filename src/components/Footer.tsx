import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="bg-section-bg border-t border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
				<div className="flex flex-col items-center space-y-4 sm:space-y-6">
					{/* Back to Top Button */}
					<Button
						onClick={scrollToTop}
						variant="outline"
						size="icon"
						className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow w-10 h-10 sm:w-12 sm:h-12"
					>
						<ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
					</Button>

					{/* Logo */}
					<div className="flex items-center space-x-2">
						<img
							src="/logo.png"
							alt="Logo"
							className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
						/>
						<span className="text-primary font-semibold text-base sm:text-lg">
							Vaishnavi Gupta
						</span>
					</div>

					{/* Navigation Links */}
					<nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
						{['Home', 'About', 'Projects', 'Certifications', 'Contact'].map(
							(item) => (
								<button
									key={item}
									onClick={() => {
										const element = document.querySelector(
											`#${item.toLowerCase()}`
										);
										element?.scrollIntoView({ behavior: 'smooth' });
									}}
									className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base"
								>
									{item}
								</button>
							)
						)}
					</nav>

					{/* Divider */}
					<div className="w-full max-w-xs sm:max-w-md h-px bg-border" />

					{/* Copyright */}
					<div className="text-center space-y-2">
						<p className="text-muted-foreground flex items-center justify-center text-sm sm:text-base">
							Made with{' '}
							<Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500" /> by
							Vaishnavi Gupta
						</p>
						<p className="text-xs sm:text-sm text-muted-foreground">
							© {currentYear} Vaishnavi Gupta. All rights reserved.
						</p>
					</div>

					{/* Quote */}
					<div className="text-center max-w-xs sm:max-w-2xl px-4">
						<p className="text-xs sm:text-sm text-muted-foreground italic">
							"Data is not just numbers; it's the story waiting to be told."
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;