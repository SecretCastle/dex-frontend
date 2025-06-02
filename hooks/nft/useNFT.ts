import { useAccount, useWriteContract } from 'wagmi';
import Token_ABI from '../../contracts/nft-abi/MyNFT-abi';
import NFT_ABI from '../../contracts/nft-abi/MyNFT-abi';
import Market_ABI from '../../contracts/nft-abi/NFTMarketplace-abi';
import {
	NFT_ADDRESS,
	MARKET_ADDRESS,
	TOKEN_ADDRESS
} from '../../contracts/address';
import { readContract } from 'wagmi/actions';
import { config } from '@/config/wagmi.cfg';

const useNFT = () => {
	const { address } = useAccount();
	const { writeContract, writeContractAsync } = useWriteContract();

	const approval = async () => {
		// 检查NFT是否授权Market
		const isApproval = await readContract(config, {
			abi: NFT_ABI,
			address: NFT_ADDRESS,
			functionName: 'isApprovedForAll',
			args: [address as `0x${string}`, MARKET_ADDRESS],
			account: address
		});
		if (!isApproval) {
			await writeContractAsync({
				abi: NFT_ABI,
				address: NFT_ADDRESS,
				functionName: 'setApprovalForAll',
				args: [MARKET_ADDRESS, true],
				account: address
			});
		} else {
			console.log('NFT already approved for marketplace');
		}
	};

	const approvalToken = async (price: bigint) => {
		await writeContractAsync({
			abi: Token_ABI,
			address: TOKEN_ADDRESS,
			functionName: 'approve',
			args: [MARKET_ADDRESS, price], // 授权 10 个代币
			account: address
		});
	};

	/**
	 * @name createNFT
	 * @description create a new NFT
	 * @param tokenURI ipfs URI of the NFT metadata
	 */
	const createNFT = (tokenURI: string) => {
		writeContract({
			abi: NFT_ABI,
			address: NFT_ADDRESS,
			functionName: 'mintNFT',
			args: [address as `0x${string}`, tokenURI],
			account: address
		});
	};

	const publishNFT = async (tokenId: bigint, price: bigint) => {
		await approval();
		const res = await writeContractAsync({
			abi: Market_ABI,
			address: MARKET_ADDRESS,
			functionName: 'listNFT',
			args: [NFT_ADDRESS, tokenId, price, TOKEN_ADDRESS],
			account: address
		});
		return res;
	};

	/**
	 * @name getNFTs
	 * @description Retrieves the NFTs
	 * @param address owner address
	 */
	const getNFTList = async () => {};

	/**
	 * @name buyNFT
	 * @description Allows a user to buy an NFT.
	 * @param nftAddress
	 * @param tokenId
	 */
	const buyNFT = async (tokenId: bigint, price: bigint) => {
		await approvalToken(price);
		const res = writeContractAsync({
			abi: Market_ABI,
			address: MARKET_ADDRESS,
			functionName: 'buyNFT',
			args: [NFT_ADDRESS, tokenId],
			account: address
		});
		return res;
	};

	return { createNFT, publishNFT, getNFTList, buyNFT };
};

export default useNFT;
