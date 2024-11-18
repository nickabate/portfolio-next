import Link from 'next/link';

export default function LinkSocial({
	icon: Icon,
	...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
	icon: React.ComponentType<{ className?: string }>;
}) {
	return (
		<Link className="group -m-1 p-1" {...props}>
			<Icon className="h-6 w-6 fill-zinc-700 transition group-hover:fill-zinc-400 dark:fill-zinc-300 dark:group-hover:fill-zinc-500" />
		</Link>
	);
}
