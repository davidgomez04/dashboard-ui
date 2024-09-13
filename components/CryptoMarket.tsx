import { Card } from '@/components/ui/card';
import yahooFinance from 'yahoo-finance2';
import { Suspense } from 'react';
import { DataTable } from '@/components/stocks/markets/data-table';
import { columns } from '@/components/stocks/markets/columns';

const cryptoCurrencies = [
  { symbol: 'BTC-USD', shortName: 'Bitcoin' },
  { symbol: 'ETH-USD', shortName: 'Ethereum' },
  { symbol: 'BNB-USD', shortName: 'BNB' },
  { symbol: 'SOL-USD', shortName: 'Solana' },
  { symbol: 'BTC-USD', shortName: 'Bitcoin' },
  { symbol: 'ETH-USD', shortName: 'Ethereum' },
  { symbol: 'BNB-USD', shortName: 'BNB' },
  { symbol: 'SOL-USD', shortName: 'Solana' },
  { symbol: 'BTC-USD', shortName: 'Bitcoin' },
  { symbol: 'SOL-USD', shortName: 'Solana' },
];

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    ticker?: string;
    range?: string;
    interval?: string;
  };
}) {

  const promises = cryptoCurrencies.map(({ symbol }) =>
    yahooFinance.quoteCombine(symbol)
  );

  const results = await Promise.all(promises);

  const resultsWithTitles = results.map((result, index) => ({
    ...result,
    shortName: cryptoCurrencies[index].shortName,
  }));

  return (
    <div>
      <h2 className='py-4 text-xl font-medium'>Cryptocurrencies</h2>
      <Card className='flex flex-col gap-4 p-6 lg:flex-row'>
        <div className='w-full'>
          <Suspense fallback={<div>Loading...</div>}>
            <DataTable columns={columns} data={resultsWithTitles} />
          </Suspense>
        </div>
      </Card>
    </div>
  );
}
