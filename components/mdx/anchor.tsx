const Anchor = ({ children, ...props }: any) => {
	return (
		<a
			className="font-bold underline hover:no-underline hover:opacity-80 text-zinc-700 dark:text-zinc-400 lg:text-lg"
			{...props}
		>
			{children}
		</a>
	);
};

export default Anchor;
