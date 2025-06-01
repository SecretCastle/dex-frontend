'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const GridItem = () => {
	return (
		<div className="linear overflow-hidden rounded-xl shadow transition-shadow duration-300 hover:shadow-md hover:shadow-orange-200">
			<Image
				alt="NFT Image"
				width={300}
				height={300}
				priority={true}
				src="http://qiniu.pic.ineet.cn/image/jpg/blog-bg.jpg"
				style={{ width: '100%' }}
			/>
			<div className="p-[15px]">
				<div className="flex items-center justify-between">
					<span className="text-[18px] font-semibold">名词</span>
					<Button
						size="sm"
						className="cursor-pointer hover:bg-amber-300 hover:text-white"
					>
						Buy Now
					</Button>
				</div>
				<div className="mt-[10px] flex items-center justify-between">
					<span>价格: 10 ETH</span>
					<span>卖家: DarisX</span>
				</div>
			</div>
		</div>
	);
};

export default GridItem;
