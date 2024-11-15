import Link from 'next/link';
import type { MarkdownMetadata } from '@/lib/markdown';
import { formatDate } from '@/lib/utils';

export default function Posts({ posts }: { posts: MarkdownMetadata[] }) {
	return (
		<div className="grid grid-cols-1 gap-10">
			{posts.map((post) => (
				<Link key={post.slug} href={`/blog/${post.slug}`}>
					<div className="group hover:bg-zinc-200 dark:hover:bg-zinc-800 px-8 sm:px-2 sm:rounded-lg pb-4">
						<div className="w-full overflow-hidden">
							{post.image && (
								<img
									src="/images/author/nick-abate.jpg"
									alt="blog post"
									className="w-full h-auto max-h-[200px] object-cover rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"
								/>
							)}
							{post.publishedAt && (
								<div className="text-sm mt-2 pl-4 border-l-2">
									{formatDate(post.publishedAt)}
								</div>
							)}
							<div className="flex flex-col">
								<h3 className="font-semibold mt-4 mb-1">{post.title}</h3>
								<p className="max-w-2xltext-sm text-zinc-700 dark:text-zinc-400">
									{post.summary}
								</p>
							</div>
						</div>
						<div className="mt-4 text-zinc-900 dark:text-zinc-200 text-sm flex flex-row gap-2 items-center">
							<span>Read article</span>
							<img
								src="/icons/chevron-right.svg"
								alt="chevron right"
								className="w-3 h-3 dark:invert"
							/>
						</div>

						{/* {post.tags && (
						<div className="flex gap-2 flex-wrap">
							{post.tags.map((tag) => (
								<Link href={`/tag/${tag}`} key={tag}>
									<span className=" italic hover:font-bold">#{tag}</span>
								</Link>
							))}
						</div>
					)} */}
					</div>
				</Link>
			))}
		</div>
	);
}
