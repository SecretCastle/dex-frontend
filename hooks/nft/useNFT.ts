import { useAccount, useWriteContract } from 'wagmi';
import NFT_ABI from '../../contracts/nft-abi/MyNFT-abi';
import { NFT_ADDRESS } from '../../contracts/address';

const useNFT = () => {
	const { address } = useAccount();
	const { writeContract } = useWriteContract();

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
			args: [address as `0x${string}`, tokenURI]
		});
	};

	const publishNFT = () => {};

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
	const buyNFT = (nftAddress: string, tokenId: number | string) => {};

	return { createNFT, publishNFT, getNFTList, buyNFT };
};

export default useNFT;
