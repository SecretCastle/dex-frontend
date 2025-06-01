export default [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_paymentToken',
				type: 'address'
			}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'seller',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'nftAddress',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'price',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'erc20Token',
				type: 'address'
			}
		],
		name: 'NFTListed',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'buyer',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'nftAddress',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'price',
				type: 'uint256'
			}
		],
		name: 'NFTPurchased',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		name: 'allListings',
		outputs: [
			{
				internalType: 'address',
				name: 'seller',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'nftAddress',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: 'erc20Token',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftAddress',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'buyNFT',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getListBelongToMe',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'seller',
						type: 'address'
					},
					{
						internalType: 'address',
						name: 'nftAddress',
						type: 'address'
					},
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256'
					},
					{
						internalType: 'address',
						name: 'erc20Token',
						type: 'address'
					}
				],
				internalType: 'struct NFTMarketplace.Listing[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getListNotForMe',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'seller',
						type: 'address'
					},
					{
						internalType: 'address',
						name: 'nftAddress',
						type: 'address'
					},
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256'
					},
					{
						internalType: 'address',
						name: 'erc20Token',
						type: 'address'
					}
				],
				internalType: 'struct NFTMarketplace.Listing[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getListing',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'seller',
						type: 'address'
					},
					{
						internalType: 'address',
						name: 'nftAddress',
						type: 'address'
					},
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256'
					},
					{
						internalType: 'address',
						name: 'erc20Token',
						type: 'address'
					}
				],
				internalType: 'struct NFTMarketplace.Listing[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftAddress',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: 'erc20Token',
				type: 'address'
			}
		],
		name: 'listNFT',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		name: 'listings',
		outputs: [
			{
				internalType: 'address',
				name: 'seller',
				type: 'address'
			},
			{
				internalType: 'address',
				name: 'nftAddress',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: 'erc20Token',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'paymentToken',
		outputs: [
			{
				internalType: 'contract IERC20',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
] as const;
