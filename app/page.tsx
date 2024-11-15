import Hero from '@/components/hero';
import RecentPosts from '@/components/recent-posts';
import RecentWorks from '@/components/recent-works';

export default function Home() {
	return (
		<section className="pt-28 sm:container">
			<div className="max-w-3xl mx-auto">
				<Hero />
				<RecentPosts />
				<RecentWorks />
			</div>
		</section>
	);
}
