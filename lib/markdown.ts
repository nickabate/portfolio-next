import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { cache } from 'react';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');
const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export type Post = {
	metadata: MarkdownMetadata;
	content: string;
};

export type MarkdownMetadata = {
	title?: string;
	summary?: string;
	image?: string;
	author?: string;
	publishedAt?: string;
	slug: string;
	deployedLink?: string;
	githubURL?: string;
	tags?: string[];
};

type AllContentFilters = {
	limit?: number;
	tag?: string;
};

type AllContentFormatting = AllContentFilters & {
	files: string[];
	type: 'posts' | 'projects';
};

export type TableOfContents = {
	level: number;
	title: string;
	anchor: string;
}[];

type ContentWithToC = Post & {
	tableOfContents: TableOfContents;
};

const getPostBySlug = cache(
	async (slug: string): Promise<ContentWithToC | null> => {
		try {
			const filePath = path.join(postsDirectory, `${slug}.mdx`);

			const fileContents = fs.readFileSync(filePath, 'utf-8');

			if (!fileContents) {
				return null;
			}

			const content = await formatContent(slug, fileContents);

			return content;
		} catch (error) {
			console.log(error);
			return null;
		}
	},
);

const getProjectBySlug = cache(
	async (slug: string): Promise<ContentWithToC | null> => {
		try {
			const filePath = path.join(projectsDirectory, `${slug}.mdx`);

			const fileContents = fs.readFileSync(filePath, 'utf-8');

			if (!fileContents) {
				return null;
			}

			const content = await formatContent(slug, fileContents);

			return content;
		} catch (error) {
			console.log(error);
			return null;
		}
	},
);

const formatContent = async (
	slug: string,
	fileContents: string,
): Promise<ContentWithToC | null> => {
	try {
		const { data, content } = matter(fileContents);

		const tableOfContents = generateTableOfContents(content);

		return {
			metadata: { ...data, slug },
			content,
			tableOfContents,
		};
	} catch (error) {
		console.log(error);
		return null;
	}
};

const getAllPosts = async ({ limit, tag }: AllContentFilters) => {
	const files = fs.readdirSync(postsDirectory);

	const formattedFiles = await formatAllContent({
		files,
		limit,
		tag,
		type: 'posts',
	});

	return formattedFiles;
};

const getAllProjects = async ({ limit, tag }: AllContentFilters) => {
	const files = fs.readdirSync(projectsDirectory);

	const formattedFiles = await formatAllContent({
		files,
		limit,
		tag,
		type: 'projects',
	});

	return formattedFiles;
};

const formatAllContent = async ({
	files,
	limit,
	tag,
	type,
}: AllContentFormatting): Promise<{
	posts: MarkdownMetadata[];
	tags: string[];
}> => {
	const allPosts = files.map((file) => getContentMetadata(file, type));

	const posts = allPosts
		.filter((post) => !tag || post.tags?.includes(tag))
		.sort((a, b) => {
			if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
				return 1;
			}

			return -1;
		});

	const consolidatedTags = new Set<string>();

	for (const { tags } of allPosts) {
		if (tags?.length) {
			for (const tag of tags) {
				consolidatedTags.add(tag);
			}
		}
	}

	const tags = Array.from(consolidatedTags);

	if (limit) {
		return { posts: posts.slice(0, limit), tags };
	}

	return { posts, tags };
};

const getContentMetadata = (
	filepath: string,
	type: 'posts' | 'projects',
): MarkdownMetadata => {
	const slug = filepath.replace(/\.mdx$/, '');
	const filePath =
		type === 'posts'
			? path.join(postsDirectory, filepath)
			: path.join(projectsDirectory, filepath);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
	const { data } = matter(fileContent);
	return { ...data, slug };
};

const getTagList = (allContent: MarkdownMetadata[]) => {
	const consolidatedTags = new Set<string>();

	for (const { tags } of allContent) {
		if (tags?.length) {
			for (const tag of tags) {
				consolidatedTags.add(tag);
			}
		}
	}

	return Array.from(consolidatedTags);
};

const generateTableOfContents = (markdown: string) => {
	const toc: TableOfContents = [];
	const headingRegex = /^(#{1,6})\s+(.*)$/gm; // Matches headings

	let match = headingRegex.exec(markdown); // Initial match

	while (match !== null) {
		const level = match[1].length; // Heading level
		const title = match[2];
		const anchor = title
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]+/g, ''); // Create anchor

		toc.push({ level, title, anchor });

		match = headingRegex.exec(markdown); // Get next match
	}

	return toc;
};

export default {
	getPostBySlug,
	getProjectBySlug,
	getAllPosts,
	getAllProjects,
	getContentMetadata,
	getTagList,
};
