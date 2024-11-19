import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer';
import NavBar from '@/components/nav';
import Providers from '@/components/providers';
import { HOMEPAGE_METADATA } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: HOMEPAGE_METADATA.title,
	description: HOMEPAGE_METADATA.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'antialiased flex flex-col min-h-screen selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white',
					inter.className,
				)}
			>
				<Providers>
					<NavBar />
					<main className="grow">
						{children}
						<Analytics />
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
