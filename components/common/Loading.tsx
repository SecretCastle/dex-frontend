'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Loading = () => {
	const router = useRouter();
	useEffect(() => {
		router.replace('/swap');
	}, []);
	return <span>Loading</span>;
};

export default Loading;
