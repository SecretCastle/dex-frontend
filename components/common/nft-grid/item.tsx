'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { formatEther, parseEther } from 'viem';
import { NFTType } from '@/types/type';

export type GridItemType = {
	NFT: NFTType;
	showBuyButton?: boolean;
	onPublishNFT?: (tokenId: bigint, price: bigint) => void;
	onBuyNFT?: (tokenId: bigint, price: bigint) => void;
};

const GridItem = ({
	NFT,
	showBuyButton,
	onPublishNFT,
	onBuyNFT
}: Readonly<GridItemType>) => {
	const onPublish = () => {
		if (NFT.tokenId !== undefined && onPublishNFT) {
			onPublishNFT(NFT.tokenId, parseEther('1000'));
		}
	};

	const onBuy = async () => {
		if (NFT.tokenId !== undefined && NFT.price !== undefined && onBuyNFT) {
			onBuyNFT(NFT.tokenId, NFT.price);
		}
	};

	return (
		<div className="linear overflow-hidden rounded-xl shadow transition-shadow duration-300 hover:shadow-md hover:shadow-orange-200">
			<Image
				alt="NFT Image"
				width={300}
				height={300}
				priority={true}
				src={NFT.tokenURI || '/image/jpg/blog-bg.jpg'}
				style={{ width: '100%' }}
			/>
			<div className="p-[15px]">
				<div className="flex items-center justify-between">
					<span className="text-[18px] font-semibold">名词</span>
					{showBuyButton && (
						<Button
							size="sm"
							className="cursor-pointer hover:bg-amber-300 hover:text-white"
							onClick={onBuy}
						>
							Buy Now
						</Button>
					)}
					{!showBuyButton &&
						!NFT.hasPublished &&
						NFT.tokenId !== undefined && (
							<Button
								size="sm"
								className="cursor-pointer hover:bg-amber-300 hover:text-white"
								onClick={onPublish}
							>
								Publish NFT
							</Button>
						)}
				</div>
				<div className="mt-[10px] flex items-center justify-between">
					<span>
						价格:
						{NFT.price ? formatEther(NFT.price) + 'MTK' : '--'}
					</span>
					<span className="w-[150px] truncate">
						卖家: {NFT.seller}
					</span>
				</div>
			</div>
		</div>
	);
};

export default GridItem;
