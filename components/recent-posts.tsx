import Posts from '@/components/posts';
import markdown from '@/lib/markdown';
import Link from 'next/link';

export default async function RecentPosts() {
	const { posts } = await markdown.getAllPosts({ limit: 4 });

	return (
		<section>
			<div className="px-8 sm:px-0 mt-10 mb-8">
				<h2 className="font-bold mb-2">Recent Blogging</h2>
				<div className="text-zinc-700 dark:text-zinc-400">
					See blog posts where I write about anything and everything tech, life
					and more.
				</div>
			</div>
			<Posts posts={posts} />
			<div className="px-8 sm:px-0 my-8">
				<Link href="/works">
					<span className="hover:opacity-75 font-semibold">
						See all posts...
					</span>
				</Link>
			</div>
		</section>
	);
}
