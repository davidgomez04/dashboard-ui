import { Card } from '@/components/ui/card';
import yahooFinance from 'yahoo-finance2';
import { Suspense } from 'react';
import { DataTable } from '@/components/stocks/markets/data-table';
import { columns } from '@/components/stocks/markets/columns';

function isMarketOpen() {
  const now = new Date();

  // Convert to New York time
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  const formatter = new Intl.DateTimeFormat([], options);

  const timeString = formatter.format(now);
  const [hour, minute] = timeString.split(':').map(Number);
  const timeInET = hour + minute / 60;

  // Get the day of the week in New York time
  const dayInET = new Date(
    now.toLocaleString('en-US', { timeZone: 'America/New_York' })
  ).getDay();

  // Check if the current time is between 9:30 AM and 4:00 PM ET on a weekday
  if (dayInET >= 1 && dayInET <= 5 && timeInET >= 9.5 && timeInET < 16) {
    return true;
  } else {
    return false;
  }
}

const tickersFutures = [
  { symbol: 'ES=F', shortName: 'S&P 500 Futures' },
  { symbol: 'NQ=F', shortName: 'NASDAQ Futures' },
  { symbol: 'YM=F', shortName: 'Dow Jones Futures' },
  { symbol: 'RTY=F', shortName: 'Russell 2000 Futures' },
  { symbol: 'CL=F', shortName: 'Crude Oil' },
  { symbol: 'GC=F', shortName: 'Gold' },
  { symbol: 'SI=F', shortName: 'Silver' },
  { symbol: 'EURUSD=X', shortName: 'EUR/USD' },
  { symbol: '^TNX', shortName: '10 Year Bond' },
  { symbol: 'BTC-USD', shortName: 'Bitcoin' },
];

const tickerAfterOpen = [
  { symbol: '^GSPC', shortName: 'S&P 500' },
  { symbol: '^IXIC', shortName: 'NASDAQ' },
  { symbol: '^DJI', shortName: 'Dow Jones' },
  { symbol: '^RUT', shortName: 'Russell 2000' },
  { symbol: 'CL=F', shortName: 'Crude Oil' },
  { symbol: 'GC=F', shortName: 'Gold' },
  { symbol: 'SI=F', shortName: 'Silver' },
  { symbol: 'EURUSD=X', shortName: 'EUR/USD' },
  { symbol: '^TNX', shortName: '10 Year Bond' },
  { symbol: 'BTC-USD', shortName: 'Bitcoin' },
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
  const tickers = isMarketOpen() ? tickerAfterOpen : tickersFutures;

  const promises = tickers.map(({ symbol }) =>
    yahooFinance.quoteCombine(symbol)
  );

  const results = await Promise.all(promises);

  const resultsWithTitles = results.map((result, index) => ({
    ...result,
    shortName: tickers[index].shortName,
  }));

  return (
    <div>
      <h2 className='py-4 text-xl font-medium'>Markets</h2>
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
