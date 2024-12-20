const Code = (props: JSX.IntrinsicAttributes) => {
	return (
		<pre
			className="bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white text-sm rounded-lg p-4 w-full my-4 drop-shadow-lg dark:shadow-[0_4px_8px_-2px_rgba(255,255,255,0.3)] overflow-auto"
			{...props}
		/>
	);
};

export default Code;
