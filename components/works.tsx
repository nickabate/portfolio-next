import type { MarkdownMetadata } from '@/lib/markdown';
import Link from 'next/link';

export default function Works({ works }: { works: MarkdownMetadata[] }) {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6">
			{works.map((work) => (
				<div className="group" key={work.slug}>
					<Link href={`/works/${work.slug}`}>
						<div className="relative">
							<div className=" w-full overflow-hidden sm:rounded-lg shadow-lg">
								<img
									src={work.image}
									alt="Project imagery"
									className="w-full h-auto max-h-[200px] object-cover object-top transition-opacity duration-300 group-hover:opacity-20 grayscale"
								/>
							</div>
							<div className="absolute bottom-8 left-6 right-6 opacity-0 group-hover:opacity-100 transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
								<h3 className="font-semibold">{work.title}</h3>
								<div className="flex flex-wrap mt-2">
									{work.tags?.map((tag) => (
										<span key={`${work.slug}-${tag}`} className="mr-2">
											#{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</Link>
				</div>
			))}
		</section>
	);
}
