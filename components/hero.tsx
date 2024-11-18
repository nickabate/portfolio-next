import Socials from './socials';

export default function Hero() {
	return (
		<section className="flex flex-col px-8 sm:px-0 max-w-3xl">
			<div className="">
				<img
					src="/images/author/nick-abate.jpg"
					alt="Nick Abate"
					className="w-20 h-20 rounded-full"
				/>
			</div>
			<div className="mt-8 max-w-2xl">
				<h1 className="font-bold lg:text-5xl">
					Software engineer, tech enthusiast, lifelong learner.
				</h1>
				<p className="mt-6 text-zinc-800 dark:text-zinc-300 lg:text-xl">
					I'm Nick, a software engineer based outside of Toronto. Currently, I
					build scalable high performance web solutions. I love all things
					learning and the pursuit of growth as a developer.
				</p>
				<Socials />
			</div>
		</section>
	);
}
