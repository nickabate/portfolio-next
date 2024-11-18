const LI = ({ children, ...props }: any) => {
	return (
		<li
			className="mt-1 lg:mt-2 ml-6 text-zinc-700 dark:text-zinc-400 lg:text-lg list-disc"
			{...props}
		>
			{children}
		</li>
	);
};

export default LI;
