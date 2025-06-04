import React from 'react';

export type ChildrenProps = {
	children?: Readonly<React.ReactNode>;
};

export type NFTType = {
	tokenId: bigint;
	price: bigint;
	tokenURI: string;
	seller: string;
	hasPublished?: boolean;
};
