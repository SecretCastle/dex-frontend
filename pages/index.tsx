import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const router = useRouter();
	setTimeout(async () => {
		await router.replace('/swap');
	}, 1000);
	return (
		<div className="flex h-full w-full items-center justify-center py-[200px]">
			<span>Loading</span>
		</div>
	);
};

export default Home;
