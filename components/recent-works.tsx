import markdown from '@/lib/markdown';
import Link from 'next/link';
import Works from './works';

export default async function RecentWorks() {
	const { posts } = await markdown.getAllProjects({
		limit: 4,
	});

	return (
		<section className="">
			<div className="px-8 sm:px-0 my-10">
				<h2 className="font-bold mb-2">Recent Works</h2>
				<div className="text-zinc-700 dark:text-zinc-400">
					View projects I've built which tools that interest me and cultivated
					growth.
				</div>
			</div>
			<Works works={posts} />
			<div className="px-8 sm:px-0 mt-8">
				<Link href="/works">
					<span className="hover:opacity-75 font-semibold">
						See all works...
					</span>
				</Link>
			</div>
		</section>
	);
}
