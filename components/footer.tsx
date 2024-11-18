import Socials from './socials';

export default function Footer() {
	return (
		<footer className="my-10">
			<div className="container max-w-5xl border-t">
				<Socials alignment="justify-center" />
				<div className="text-center flex flex-col gap-2">
					<span className="font-semibold">
						Nick Abate &copy; Copyright {new Date().getFullYear()}
					</span>
					<span className="text-zinc-700 dark:text-zinc-400 text-sm">
						Powered by Next.js, TypeScript, Tailwind, MDX and Vercel
					</span>
				</div>
			</div>
		</footer>
	);
}
