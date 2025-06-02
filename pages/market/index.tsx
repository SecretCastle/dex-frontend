import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import NFTGrid from '@/components/common/nft-grid/grid';
import NFTGridItem from '@/components/common/nft-grid/item';
import CreateNFT from '@/components/common/nft-create';
import { useEffect, useState } from 'react';
import { _readMarketContract, _readNFTContract } from '@/contracts/utils/read';
import { useAccount, useReadContract } from 'wagmi';

import Token_ABI from '@/contracts/nft-abi/MyToken-abi';
import { TOKEN_ADDRESS } from '@/contracts/address';

const NFTMarket = () => {
	const [tabActive, setTabActive] = useState('all');
	const { address, chain, chainId } = useAccount();
	const [list, setList] = useState([]);
	const { data: balance } = useReadContract({
		abi: Token_ABI,
		address: TOKEN_ADDRESS,
		functionName: 'balanceOf',
		args: [address as `0x${string}`]
	});
	console.log('Token balance:', balance);
	console.log('当前地址：', address);
	console.log('当前链ID：', chainId);
	console.log('当前链信息：', chain);

	const fetchData = async (
		methodName:
			| 'allListings'
			| 'getListBelongToMe'
			| 'getListNotForMe'
			| 'getListing'
			| 'listings'
			| 'paymentToken'
	) => {
		try {
			const data = await _readMarketContract(methodName);
			console.log('Fetched data:', data);
			if (data && Array.isArray(data)) {
				setList(data);
			}
			// Process and set the data as needed
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const fetchData2 = async (
		methodName:
			| 'symbol'
			| 'name'
			| 'tokenURI'
			| 'NFTLists'
			| 'balanceOf'
			| 'getApproved'
			| 'isApprovedForAll'
			| 'ownerOf'
			| 'supportsInterface'
			| 'tokenCounter'
			| 'totalSupply'
	) => {
		try {
			const data = await _readNFTContract(methodName, [
				address as `0x${string}`
			]);
			if (data && Array.isArray(data)) {
				setList(data);
			}
			const data2 = await _readMarketContract('getListBelongToMe');
			console.log('Fetched data:', data2);

			// Process and set the data as needed
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		switch (tabActive) {
			case 'all':
				fetchData('getListing');
				break;
			case 'my-nfts':
				fetchData2('NFTLists');
				break;
			default:
				break;
		}
		return () => {
			setList([]);
		};
	}, [tabActive]);

	const onCreated = () => {};

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
							<CreateNFT onCreated={onCreated} />
						</div>
					)}
					<TabsContent value="all">
						<NFTGrid>
							{list.map(
								(item: {
									tokenURI: string;
									tokenId: bigint;
									price: bigint;
									seller: string;
								}) => {
									return (
										<NFTGridItem
											showBuyButton={true}
											imgUrl="http://qiniu.pic.ineet.cn/image/jpg/blog-bg.jpg"
											tokenId={item.tokenId}
											price={item.price}
											seller={item.seller}
											key={Math.random()
												.toString(36)
												.substring(2, 15)}
										/>
									);
								}
							)}
						</NFTGrid>
					</TabsContent>
					<TabsContent value="my-nfts">
						<NFTGrid>
							{list.map(
								(item: {
									tokenURI: string;
									tokenId: bigint;
								}) => {
									return (
										<NFTGridItem
											imgUrl={item?.tokenURI}
											tokenId={item?.tokenId as bigint}
											key={item.tokenId}
										/>
									);
								}
							)}
						</NFTGrid>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default NFTMarket;
