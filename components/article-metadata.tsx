import type { MarkdownMetadata } from '@/lib/markdown';
import { formatDate } from '@/lib/utils';

type ArticleMetadataProps = {
	metadata: MarkdownMetadata;
};

export default function ArticleMetadata({ metadata }: ArticleMetadataProps) {
	const {
		author,
		publishedAt,
		summary,
		image,
		title,
		tags,
		deployedLink,
		githubURL,
	} = metadata;

	return (
		<div className="border-b mb-6">
			<div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
				<h1 className="font-bold lg:text-5xl">{title}</h1>

				{(deployedLink || githubURL) && (
					<div className="flex gap-4 flex-wrap">
						{githubURL && (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={githubURL}
								className="bg-foreground/80 text-background rounded-md p-1 hover:bg-foreground font-bold w-24 sm:flex-grow flex justify-center items-center gap-2 grow-0 h-fit"
							>
								GitHub
								<img
									className="w-4 h-4 inline-block invert dark:invert-0"
									src="/icons/github.svg"
									alt="visit github"
								/>
							</a>
						)}
						{deployedLink && (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={deployedLink}
								className="bg-foreground/80 text-background rounded-md p-1 hover:bg-foreground font-bold w-24 sm:flex-grow flex justify-center items-center gap-2 grow-0 h-fit"
							>
								Live
								<img
									className="w-4 h-4 inline-block invert dark:invert-0"
									src="/icons/external-link.svg"
									alt="visit link"
								/>
							</a>
						)}
					</div>
				)}
			</div>
			{image && (
				<div className="mt-4 shadow-lg dark:shadow-zinc-700 rounded-lg overflow-hidden">
					<img
						src={image}
						alt="article"
						className="w-full h-auto max-h-[200px] object-cover object-top grayscale"
					/>
				</div>
			)}
			<p className="text-zinc-800 dark:text-zinc-300 my-6 lg:text-lg">
				{summary}
			</p>
			{publishedAt && (
				<div className="text-zinc-700 dark:text-zinc-400">{`${author} / ${formatDate(publishedAt)}`}</div>
			)}
			<div className="flex flex-wrap text-zinc-500 mt-2 dark:text-zinc-600 mb-6">
				{tags?.map((tag) => (
					<span className="mr-2 text-sm" key={tag}>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
}
