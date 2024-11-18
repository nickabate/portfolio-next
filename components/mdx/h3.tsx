const H3 = ({ children, ...props }: any) => {
	const anchor =
		typeof children === 'string'
			? children
					.toLowerCase()
					.replace(/\s+/g, '-')
					.replace(/[^\w-]+/g, '')
			: '';

	return (
		<h3 className="font-bold mt-4 lg:text-2xl lg:mt-6" {...props} id={anchor}>
			{children}
		</h3>
	);
};

export default H3;
