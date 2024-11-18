import ArticleMetadata from '@/components/article-metadata';
import MDXContent from '@/components/mdx-content';
import TableOfContentsLinks from '@/components/table-of-contents';
import markdown from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string }>;

export const generateMetadata = async (props: {
	params: Params;
}) => {
	const params = await props.params;
	const slug = params.slug;

	const post = await markdown.getPostBySlug(slug);

	if (!post) {
		return null;
	}

	const { metadata } = post;

	return {
		title: `Nick Abate | ${metadata.title}`,
		description: metadata.summary,
	};
};

export default async function Page(props: {
	params: Params;
}) {
	const params = await props.params;
	const slug = params.slug;

	const work = await markdown.getProjectBySlug(slug);

	if (!work) {
		notFound();
	}

	const { content, metadata, tableOfContents } = work;

	return (
		<section className="pt-28">
			<div className="container max-w-4xl space-y-8">
				<div className="mb-6 md:hidden">
					<Link
						href="/works"
						className="flex gap-2 items-center hover:opacity-70"
					>
						<img
							src="/icons/arrow-left.svg"
							alt="back icon"
							className="w-5 h-5 dark:invert"
						/>{' '}
						<span className="font-semibold">All Works</span>
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-2">
					<div className="hidden md:block md:col-span-1 sticky max-h-[70vh] top-28 overflow-y-auto">
						<div className="mb-6">
							<Link
								href="/works"
								className="flex gap-2 items-center hover:opacity-70"
							>
								<img
									src="/icons/arrow-left.svg"
									alt="back icon"
									className="w-5 h-5 dark:invert"
								/>{' '}
								<span className="font-semibold hover:opacity-70">
									All Works
								</span>
							</Link>
						</div>
						{<TableOfContentsLinks contents={tableOfContents} />}
					</div>
					<div className="md:col-span-4">
						<ArticleMetadata metadata={metadata} />
						<MDXContent source={content} />
					</div>
				</div>
			</div>
		</section>
	);
}
