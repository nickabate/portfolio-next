import type { JSX } from 'react';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import COMPONENT_MAP from '@/components/mdx/index';

const MDXContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
	return <MDXRemote {...props} components={COMPONENT_MAP} />;
};

export default MDXContent;
