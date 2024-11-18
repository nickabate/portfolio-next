const H2 = ({ children, ...props }: any) => {
	const anchor =
		typeof children === 'string'
			? children
					.toLowerCase()
					.replace(/\s+/g, '-')
					.replace(/[^\w-]+/g, '')
			: '';

	return (
		<h2 className="font-bold mt-6 lg:text-4xl lg:mt-8" {...props} id={anchor}>
			{children}
		</h2>
	);
};

export default H2;
