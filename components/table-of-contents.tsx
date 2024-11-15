import type { TableOfContents } from '@/lib/markdown';

type TableOfContentsProps = {
	contents: TableOfContents;
};

const headerMarginMap: Record<number, string> = {
	2: 'ml-0',
	3: 'ml-4',
	4: 'ml-4',
};

export default function TableOfContentsLinks({
	contents,
}: TableOfContentsProps) {
	return (
		<div className="flex flex-col gap-2 pr-6">
			{contents.map((content) => (
				<a
					key={content.title}
					className="hover:opacity-100 opacity-70"
					href={`#${content.anchor}`}
				>
					<div
						className={`${headerMarginMap[content.level]} font-semibold text-sm text-zinc-800 dark:text-zinc-300`}
					>
						{content.title}
					</div>
				</a>
			))}
		</div>
	);
}
