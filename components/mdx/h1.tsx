const H1 = ({ children, ...props }: any) => {
	const anchor =
		typeof children === 'string'
			? children
					.toLowerCase()
					.replace(/\s+/g, '-')
					.replace(/[^\w-]+/g, '')
			: '';

	return (
		<h1 className="font-bold" {...props} id={anchor}>
			{children}
		</h1>
	);
};

export default H1;
