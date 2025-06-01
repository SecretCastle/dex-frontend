import { createClient, gql } from 'urql';
import { cacheExchange, fetchExchange } from 'urql/core';
const client = createClient({
	url: 'https://gateway.thegraph.com/api/subgraphs/id/3jvHtoo6eaGUPZS8XZETeU485iv3C5y7jK9VAjUFaWRe',
	fetchOptions: {
		headers: {
			Authorization: 'Bearer 0e660c0d8b5f98e93bcd467c9457c97c'
		}
	},
	exchanges: [cacheExchange, fetchExchange]
});
const fetchDemo = async () => {
	const DATA_QUERY = gql`
		{
			users(first: 5) {
				id
				stakingPower
				superiorSP
				superior
			}
			userOperationHistories(first: 5) {
				id
				type
				user {
					id
				}
				amount
			}
		}
	`;
	const result = await client.query(DATA_QUERY, { id: 5 }).toPromise();
	console.log(result.data);
};

export { fetchDemo };
