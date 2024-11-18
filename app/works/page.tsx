import WorksFilter from '@/components/works-filter';
import markdown from '@/lib/markdown';
import { WORKSPAGE_METADATA } from '@/lib/metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: WORKSPAGE_METADATA.title,
	description: WORKSPAGE_METADATA.description,
};

export default async function Works() {
	const { posts, tags } = await markdown.getAllProjects({});

	if (!posts.length) {
		return notFound();
	}

	return (
		<section className="pt-28 sm:container">
			<div className="mx-auto max-w-3xl">
				<WorksFilter posts={posts} tags={tags} />
			</div>
		</section>
	);
}
