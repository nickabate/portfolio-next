const Paragraph = ({ children, ...props }: any) => {
	return (
		<p
			className="mt-2 lg:mt-4 text-zinc-700 dark:text-zinc-400 lg:text-lg"
			{...props}
		>
			{children}
		</p>
	);
};

export default Paragraph;
