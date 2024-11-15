'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { useState } from 'react';
import ToggleTheme from './toggle-theme';

export default function NavBar() {
	const [open, setOpen] = useState(false);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Works', href: '/works' },
		{ name: 'About', href: '/about' },
	];

	const links = ['blog', 'works', 'about'];

	return (
		<div className="fixed top-0 backdrop-blur-2xl z-50 py-6 inset-x-0 shadow-sm dark:shadow-zinc-800">
			{/* Regular navigation for larger screens */}
			<nav className="container hidden md:flex justify-between max-w-5xl">
				<Link href="/">
					<span className="font-extrabold text-xl hover:opacity-75">
						nick abate
					</span>
				</Link>
				<ul className="flex gap-5">
					{links.map((link) => (
						<li key={link}>
							<Link
								href={`/${link}`}
								className="text-base font-medium hover:opacity-75"
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
				<ToggleTheme />
			</nav>

			{/* Mobile navigation button and sheet */}
			<div className="w-full px-8 mx-auto md:hidden flex justify-between">
				<Link href="/">
					<span className="font-extrabold hover:opacity-75 text-xl">
						nick abate
					</span>
				</Link>
				<div className="mr-10">
					<ToggleTheme />
				</div>

				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<Button
							variant="outline"
							size="icon"
							className="fixed top-4 right-4 z-50 dark:bg-foreground/90"
							aria-label="Open mobile menu"
						>
							<img
								src="/icons/hamburger-menu.svg"
								alt="mobile nav"
								className="w-4 h-4"
							/>
							<span className="sr-only">Open menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="top" className="w-full h-full">
						<SheetTitle hidden={true}>Menu</SheetTitle>
						<SheetDescription hidden={true}>
							Links in mobile menu
						</SheetDescription>
						<nav className="flex flex-col items-center justify-center h-full space-y-6">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-2xl font-bold hover:opacity-75"
									onClick={() => setOpen(false)}
								>
									{item.name}
								</a>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
