import Posts from '@/components/posts';
import BlogData from '@/lib/markdown';
import { BLOGPAGE_METADATA } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: BLOGPAGE_METADATA.title,
	description: BLOGPAGE_METADATA.description,
};

export default async function Blog() {
	const { posts, tags } = await BlogData.getAllPosts({});

	if (!posts.length) {
		return notFound();
	}

	return (
		<section className="pt-28 sm:container">
			<div className="mx-auto max-w-3xl space-y-8">
				<div className="grid grid-cols-1 sm:grid-cols-4">
					<aside className="hidden sm:block sm:col-span-1 sm:sticky sm:top-24 sm:h-fit flex-wrap gap-4 text-zinc-800 dark:text-zinc-300 text-sm">
						<Link href="/blog">
							<div className="font-bold sm:mt-2 flex items-center">All</div>
						</Link>
						<ol className="flex gap-2 sm:block sm:mt-2 flex-wrap max-w-72">
							{tags?.map((tag) => (
								<Link key={tag} href={`/tag/${tag}`}>
									<li className="mt-2 hover:opacity-70">#{tag}</li>
								</Link>
							))}
						</ol>
					</aside>
					<section className="sm:col-span-3">
						<div className="flex flex-col gap-3 mb-10 px-8 sm:px-0">
							<h1 className="font-bold mt-4 sm:m-0">Blog Posts</h1>
							<div className="text-zinc-700 dark:text-zinc-400">
								View all my posts or filter for what you find interesting.
							</div>
						</div>
						<Posts posts={posts} />
					</section>
				</div>
			</div>
		</section>
	);
}
