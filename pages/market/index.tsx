import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import NFTGrid from '@/components/common/nft-grid/grid';
import NFTGridItem from '@/components/common/nft-grid/item';
import CreateNFT from '@/components/common/nft-create';
import { useEffect, useState } from 'react';

const NFTMarket = () => {
	const [tabActive, setTabActive] = useState('all');

	useEffect(() => {
		switch (tabActive) {
			case 'all':
				// Fetch all NFTs logic here
				break;
			case 'my-nfts':
				// Fetch user's NFTs logic here
				break;
			default:
				break;
		}
	}, [tabActive]);

	return (
		<div className="container mx-auto">
			<div className="pt-[15px]">
				<Tabs defaultValue={tabActive} onValueChange={setTabActive}>
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="my-nfts">My NFTs</TabsTrigger>
					</TabsList>
					{tabActive === 'my-nfts' && (
						<div className="publish-area mb-[10px] flex items-center justify-end">
							<CreateNFT />
						</div>
					)}
					<TabsContent value="all">
						<NFTGrid>
							{Array.from({ length: 10 }).map(() => {
								return (
									<NFTGridItem
										key={Math.random()
											.toString(36)
											.substring(2, 15)}
									/>
								);
							})}
						</NFTGrid>
					</TabsContent>
					<TabsContent value="my-nfts">My NFTs</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default NFTMarket;
