import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import NFTGrid from '@/components/common/nft-grid/grid';
import NFTGridItem from '@/components/common/nft-grid/item';
import CreateNFT from '@/components/common/nft-create';
import { useEffect, useState } from 'react';
import { _readMarketContract, _readNFTContract } from '@/contracts/utils/read';
import { useAccount } from 'wagmi';
import { NFTType } from '@/types/type';
import useNFT from '@/hooks/nft/useNFT';

const NFTMarket = () => {
	const [state, setState] = useState<{
		type: 'all' | 'my-nfts';
		list: NFTType[];
	}>({
		type: 'all',
		list: []
	});
	const { address } = useAccount();
	const { publishNFT, buyNFT } = useNFT(address);

	const onTabChange = (value: string) => {
		setState({
			type: value as 'all' | 'my-nfts',
			list: []
		});
	};

	useEffect(() => {
		const fetch = async () => {
			switch (state.type) {
				case 'all': {
					const data = await _readMarketContract(
						'getListNotForMe',
						address!
					);

					if (data && Array.isArray(data)) {
						setState({
							type: 'all',
							list: data
						});
					}
					break;
				}
				case 'my-nfts': {
					const data = await _readNFTContract('NFTLists', address!, [
						address as `0x${string}`
					]);
					const data2 = await _readMarketContract(
						'getListBelongToMe',
						address!
					);
					if (data && Array.isArray(data)) {
						const result = data.map((item: NFTType) => {
							const hasThis = data2.find(
								(i: NFTType) => i.tokenId === item.tokenId
							);
							if (hasThis) {
								return {
									...item,
									hasPublished: true
								};
							} else {
								return item;
							}
						});
						setState({
							type: 'my-nfts',
							list: result
						});
					}
					break;
				}
				default:
					break;
			}
		};
		fetch();
	}, [state.type, address]);

	const onCreated = () => {};

	return (
		<div className="container mx-auto">
			<div className="pt-[15px]">
				<Tabs defaultValue={state.type} onValueChange={onTabChange}>
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="my-nfts">My NFTs</TabsTrigger>
					</TabsList>
					{state.type === 'my-nfts' && (
						<div className="publish-area mb-[10px] flex items-center justify-end">
							<CreateNFT onCreated={onCreated} />
						</div>
					)}
					<TabsContent value="all">
						<NFTGrid>
							{state.list.map((item: NFTType) => {
								return (
									<NFTGridItem
										showBuyButton={true}
										NFT={item}
										key={`${state.type}-${item.tokenId.toString()}`}
										onBuyNFT={buyNFT}
									/>
								);
							})}
						</NFTGrid>
					</TabsContent>
					<TabsContent value="my-nfts">
						<NFTGrid>
							{state.list.map((item: NFTType) => {
								return (
									<NFTGridItem
										NFT={item}
										key={`${state.type}-${item.tokenId.toString()}`}
										onPublishNFT={publishNFT}
									/>
								);
							})}
						</NFTGrid>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default NFTMarket;
