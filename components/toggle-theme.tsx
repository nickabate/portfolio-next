'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ToggleTheme() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;
	return (
		<button
			type="button"
			className="hover:rotate-[30deg] hover:opacity-75 transition-transform duration-200 opacity-85"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<img src="/icons/sun.svg" alt="moon icon" className="w-5 h-5" />
			) : (
				<img src="/icons/moon.svg" alt="sun icon" className="w-5 h-5" />
			)}

			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
