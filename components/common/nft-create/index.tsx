'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { NFT_ADDRESS } from '@/contracts/address';
import React, { useEffect } from 'react';
import { useAccount, useBalance, useWriteContract } from 'wagmi';
import NFT_ABI from '@/contracts/nft-abi/MyNFT-abi';

const CreateNFT = ({
	children
}: Readonly<{ children?: React.ReactNode; onCreated?: () => void }>) => {
	const [open, setOpen] = React.useState(false);
	const [tokenURI, setTokenURI] = React.useState(
		'http://qiniu.pic.ineet.cn/image/jpg/blog-bg.jpg'
	);
	const { address } = useAccount();
	const { isPending } = useBalance();
	const { writeContractAsync, error } = useWriteContract();

	const onClickHandler = async () => {
		if (!tokenURI) {
			alert('Please enter a valid Token URI');
			return;
		}
		await writeContractAsync({
			abi: NFT_ABI,
			address: NFT_ADDRESS,
			functionName: 'mintNFT',
			args: [address as `0x${string}`, tokenURI]
		});
	};

	useEffect(() => {
		if (error && error.name === 'ContractFunctionExecutionError') {
			alert('Transaction cancelled by user.');
		}
		return () => {
			setOpen(false);
			setTokenURI('http://qiniu.pic.ineet.cn/image/jpg/blog-bg.jpg');
		};
	}, [error]);

	const onOpenChange = (isOpen: boolean) => {
		setOpen(isOpen);
		if (!isOpen) {
			setTokenURI('http://qiniu.pic.ineet.cn/image/jpg/blog-bg.jpg');
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>
				{children ?? (
					<Button className="cursor-pointer hover:bg-amber-500 hover:text-white">
						Create NFT
					</Button>
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create NFT</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-y-[8px]">
					<label>Token URI</label>
					<Input
						value={tokenURI}
						onChange={(e) => setTokenURI(e.currentTarget.value)}
					/>
				</div>
				<Button
					className="w-full cursor-pointer hover:bg-amber-300"
					onClick={onClickHandler}
				>
					Publish {isPending.toString()}
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default CreateNFT;
