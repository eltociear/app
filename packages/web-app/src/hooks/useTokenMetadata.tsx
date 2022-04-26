import {useEffect, useState} from 'react';
import {useApolloClient} from '@apollo/client';

import {fetchTokenData} from 'services/prices';
import {ASSET_PLATFORMS, CHAIN_METADATA} from 'utils/constants';
import {TokenBalance, TokenWithMetadata} from 'utils/types';
import {useNetwork} from 'context/network';

export const useTokenMetadata = (balances: TokenBalance[]) => {
  const client = useApolloClient();
  const {network} = useNetwork();
  const [data, setData] = useState<TokenWithMetadata[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMetadata = async () => {
      setLoading(true);

      // fetch token metadata from external api
      const metadata = await Promise.all(
        balances?.map(balance => {
          const chainId = CHAIN_METADATA[network].id;
          return fetchTokenData(
            balance.token.id,
            client,
            ASSET_PLATFORMS[chainId]
          );
        })
      );

      // map metadata to token balances
      const tokensWithMetadata = balances?.map((balance, index) => ({
        balance: balance.balance,
        metadata: {
          ...balance.token,
          apiId: metadata[index]?.id,
          imgUrl: metadata[index]?.imgUrl || '',
        },
      }));

      setData(tokensWithMetadata);
      setLoading(false);
    };

    if (balances) fetchMetadata();
  }, [balances, network, client]);

  return {data, loading};
};