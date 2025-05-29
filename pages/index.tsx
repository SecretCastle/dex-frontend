import { NextPage } from 'next';
import Loading from '@/components/common/Loading';

const Home: NextPage = () => {
	return (
		<div className="flex h-full w-full items-center justify-center py-[200px]">
			<Loading />
		</div>
	);
};

export default Home;
