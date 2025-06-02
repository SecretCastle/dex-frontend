import { readContract } from 'wagmi/actions';
import Market_ABI from '@/contracts/nft-abi/NFTMarketplace-abi';
import NFT_ABI from '@/contracts/nft-abi/MyNFT-abi';
import { MARKET_ADDRESS, NFT_ADDRESS } from '../address';
import { config } from '@/config/wagmi.cfg';

type MarketContractArgs = [] | [bigint] | [`0x${string}`, bigint] | undefined;

export const _readMarketContract = async (
	methodName:
		| 'allListings'
		| 'getListBelongToMe'
		| 'getListNotForMe'
		| 'getListing'
		| 'listings'
		| 'paymentToken',
	args?: MarketContractArgs
): Promise<[]> => {
	const result = (await readContract(config, {
		abi: Market_ABI,
		address: MARKET_ADDRESS,
		functionName: methodName,
		args: args,
	})) as unknown as [];
	return result;
};

type NFTContractArgs =
	| []
	| [bigint]
	| [`0x${string}`]
	| [`0x${string}`, `0x${string}`]
	| undefined;

export const _readNFTContract = async (
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
		| 'totalSupply',
	args?: NFTContractArgs
): Promise<[]> => {
	const result = (await readContract(config, {
		abi: NFT_ABI,
		address: NFT_ADDRESS,
		functionName: methodName,
		args: args
	})) as unknown as [];
	return result;
};
