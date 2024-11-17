import Posts from '@/components/posts';
import markdown from '@/lib/markdown';
import { BLOGTAG_METADATA } from '@/lib/metadata';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Params = Promise<{ tag: string }>;

export const generateMetadata = async (props: {
	params: Params;
}) => {
	const params = await props.params;
	const tagName = params.tag;

	if (!tagName) {
		return null;
	}

	return {
		title: `${BLOGTAG_METADATA.title} #${tagName}`,
		description: `${BLOGTAG_METADATA.title} #${tagName}`,
	};
};

export default async function Blog(props: {
	params: Params;
}) {
	const params = await props.params;
	const tagName = params.tag;

	const { posts, tags } = await markdown.getAllPosts({
		tag: tagName,
	});

	if (!posts.length) {
		return notFound();
	}

	return (
		<section className="pt-28 sm:container">
			<div className="mx-auto max-w-3xl space-y-8">
				<div className="grid grid-cols-1 sm:grid-cols-4">
					<aside className="flex sm:block sm:col-span-1 sm:sticky sm:top-24 sm:h-0 gap-4 text-zinc-800 dark:text-zinc-300 text-sm">
						<Link href="/blog">
							<div className="sm:mt-2 hover:opacity-80">All</div>
						</Link>
						<ol className="flex gap-2 sm:block sm:mt-2 flex-wrap max-w-72">
							{tags.map((tag) =>
								tagName !== tag ? (
									<Link key={tag} href={`/tag/${tag}`}>
										<li className="sm:mt-2 hover:opacity-80">#{tag}</li>
									</Link>
								) : (
									<li key={tag} className="font-bold sm:mt-2">
										#{tag}
									</li>
								),
							)}
						</ol>
					</aside>
					<section className="sm:col-span-3">
						<div className="flex flex-col gap-3 mb-8">
							<h1 className="font-bold mt-6 sm:m-0 border-b">Blog Posts</h1>
							<div className="text-zinc-700 dark:text-zinc-400">
								Here's my posts filtered by #{tagName}.
							</div>
						</div>
						<Posts posts={posts} />
					</section>
				</div>
			</div>
		</section>
	);
}
