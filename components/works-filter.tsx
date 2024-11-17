'use client';
import Works from '@/components/works';
import type { MarkdownMetadata } from '@/lib/markdown';
import { useEffect, useState } from 'react';

interface WorksFilterProps {
	posts: MarkdownMetadata[];
	tags: string[];
}

export default function WorksFilter({ posts, tags }: WorksFilterProps) {
	const [works, setWorks] = useState<MarkdownMetadata[]>(posts);
	const [filteredWorks, setFilteredWorks] = useState<string[]>([]);

	useEffect(() => {
		setWorks(posts);
	}, [posts]);

	const handleClearFilter = () => {
		if (!filteredWorks.length) {
			return;
		}

		setFilteredWorks([]);
	};

	const handleTagClick = (tag: string) => {
		if (filteredWorks.includes(tag)) {
			setFilteredWorks(filteredWorks.filter((t) => t !== tag));
			return;
		}

		setFilteredWorks([...filteredWorks, tag]);
	};

	const filteredWorksDisplay = filteredWorks.length
		? works.filter((work) =>
				work.tags?.some((tag) => filteredWorks.includes(tag)),
			)
		: works;

	return (
		<div>
			<div className="hidden sm:flex gap-4 flex-wrap mb-8 text-sm text-zinc-800 dark:text-zinc-300">
				{/* <span className="text-base font-bold">TAGS</span> */}
				<button
					type="button"
					onClick={handleClearFilter}
					className={`${!filteredWorks.length ? 'font-bold' : ''} flex items-start`}
				>
					ALL
				</button>
				<div className="flex gap-4 flex-wrap">
					{tags?.map((tag) => (
						<button
							type="button"
							key={tag}
							onClick={() => handleTagClick(tag)}
							className={`hover:opacity-70 ${filteredWorks.includes(tag) ? 'font-bold' : ''}`}
						>
							#{tag}
						</button>
					))}
				</div>
			</div>
			<div className="px-8 sm:px-0 flex flex-col gap-3 mb-10">
				<h1 className="font-bold border-b">Recent Works</h1>
				<div className="text-zinc-800 dark:text-zinc-300">
					Check out a project below to learn more about the tools I used and
					lessons learned.
				</div>
			</div>
			<Works works={filteredWorksDisplay} />
		</div>
	);
}
