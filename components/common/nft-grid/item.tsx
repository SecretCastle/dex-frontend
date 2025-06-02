'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { formatEther, parseEther } from 'viem';
import useNFT from '@/hooks/nft/useNFT';

const GridItem = ({
	imgUrl,
	tokenId,
	showBuyButton = false,
	seller,
	price
}: Readonly<{
	imgUrl?: string;
	tokenId?: bigint;
	showBuyButton?: boolean;
	price?: bigint;
	seller?: string;
}>) => {
	const { publishNFT, buyNFT } = useNFT();
	const onPublishNFT = async () => {
		if (tokenId !== undefined) {
			await publishNFT(tokenId, parseEther('1000'));
		}
	};

	const onBuyNFT = async () => {
		if (tokenId !== undefined && price !== undefined) {
			await buyNFT(tokenId, price);
		}
	};

	return (
		<div className="linear overflow-hidden rounded-xl shadow transition-shadow duration-300 hover:shadow-md hover:shadow-orange-200">
			<Image
				alt="NFT Image"
				width={300}
				height={300}
				priority={true}
				src={imgUrl || '/image/jpg/blog-bg.jpg'}
				style={{ width: '100%' }}
			/>
			<div className="p-[15px]">
				<div className="flex items-center justify-between">
					<span className="text-[18px] font-semibold">名词</span>
					{showBuyButton && (
						<Button
							size="sm"
							className="cursor-pointer hover:bg-amber-300 hover:text-white"
							onClick={onBuyNFT}
						>
							Buy Now
						</Button>
					)}
					{!showBuyButton && tokenId !== undefined && (
						<Button
							size="sm"
							className="cursor-pointer hover:bg-amber-300 hover:text-white"
							onClick={onPublishNFT}
						>
							Publish NFT
						</Button>
					)}
				</div>
				<div className="mt-[10px] flex items-center justify-between">
					<span>
						价格: {price ? formatEther(price) + 'MTK' : '--'}
					</span>
					<span className="w-[150px] truncate">卖家: {seller}</span>
				</div>
			</div>
		</div>
	);
};

export default GridItem;
