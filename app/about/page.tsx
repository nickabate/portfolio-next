import Socials from '@/components/socials';
import { ABOUT_METADATA } from '@/lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: ABOUT_METADATA.title,
	description: ABOUT_METADATA.description,
};

export default function About() {
	return (
		<section className="pt-28">
			<div className="container max-w-3xl mt-4">
				<h1 className="font-bold lg:text-5xl">Hey there, I'm Nick.</h1>
				<h2 className="font-semibold my-4 max-w-[470px] lg:text-4xl lg:max-w-xl">
					I build blazingly fast experiences for the web.
				</h2>
				<p className="mb-4 text-zinc-700 dark:text-zinc-300 lg:text-lg">
					Pursuing software engineering enables me to come up with innovative
					solutions to everyday problems experienced by everyday people.
				</p>
				<Socials />
				<div className="max-w-2xl">
					<section>
						<h3 className="font-bold mt-6 lg:text-2xl border-b">
							From Big Four to Big O Notation
						</h3>
						<p className="mt-4 text-zinc-700 dark:text-zinc-300 lg:text-lg">
							I transitioned from accounting to software engineering, driven by
							a passion for problem-solving and technology. The skills I honed
							in finance — attention to detail, process optimization, and
							understanding business needs — now guide my work in software
							development. This shift taught me the value of perseverance and
							adaptability, and I continue to apply those lessons in every
							project I take on.
						</p>
						<p className="mt-4 text-zinc-700 dark:text-zinc-300 lg:text-lg">
							The analytical mindset I developed in accounting helps me design
							efficient, scalable systems that support business growth. I
							approach each challenge with a growth mindset, always seeking to
							learn and expand my skill set as I build impactful software
							solutions.
						</p>
					</section>
					<section>
						<h3 className="font-bold mt-6 lg:text-2xl border-b">
							Passion for Learning and Building
						</h3>
						<p className="mt-4 text-zinc-700 dark:text-zinc-300 lg:text-lg">
							I work with tools like Node.js, Express, TypeScript, and
							PostgreSQL to build high-performance, scalable systems. I’m
							focused on optimizing APIs and designing solutions that meet
							business needs, contributing to growth through technology.
						</p>
						<p className="mt-4 text-zinc-700 dark:text-zinc-300 lg:text-lg">
							I’m committed to continuous learning, whether through formal
							training or self-study. My goal is to stay current with the latest
							technologies, improve my skills, and create better software every
							day. The pursuit of knowledge is central to how I approach both my
							career and personal development.
						</p>
					</section>
				</div>
			</div>
		</section>
	);
}
