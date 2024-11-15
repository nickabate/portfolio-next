import H1 from '@/components/mdx/h1';
import H2 from '@/components/mdx/h2';
import H3 from '@/components/mdx/h3';
import dynamic from 'next/dynamic';
import Paragraph from './paragraph';

const Code = dynamic(() => import('@/components/mdx/code'));

const COMPONENT_MAP = {
	pre: Code,
	h1: H1,
	h2: H2,
	h3: H3,
	p: Paragraph,
};

export default COMPONENT_MAP;
