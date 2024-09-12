'use client';

import { ProductData } from '@/app/page';
import { Product } from '@/mocks';
import { FC, useState } from 'react';

type Props = {
  data?: ProductData[];
};

const TrendingBids: FC<Props> = ({ data }) => {
  const [filter, setFilter] = useState<Product | undefined>(undefined);

  return (
    <div className='flex flex-col gap-5 items-start'>
      <div className='flex flex-row items-center w-full justify-between'>
        <h1 className='text-black text-start w-full text-3xl'></h1>
        {data && data.length > 0 && (
          <div className='flex flex-row items-center gap-5'>
            <span
              className='cursor-pointer hover:scale-105'
              onClick={() => setFilter(undefined)}
            >
              All
            </span>

            <span
              className='cursor-pointer hover:scale-105'
              onClick={() => setFilter(Product.PERSONAL)}
            >
              Personal
            </span>
            <span
              className='cursor-pointer hover:scale-105'
              onClick={() => setFilter(Product.WORK)}
            >
              Work
            </span>
            <span
              className='cursor-pointer hover:scale-105'
              onClick={() => setFilter(Product.CHILL)}
            >
              Chill
            </span>
          </div>
        )}
      </div>
      {data && data.length > 0 ? (
        <div className='grid grid-cols-4 gap-8 w-full'>
          {data
            ?.filter(({ type }) => !filter || type === filter)
            .map(
              (
                { type, name, img, description, auctionTime, currentBid },
                idx
              ) => (
                <div
                  key={name + idx}
                  className='card bg-base-100 w-full shadow-xl'
                >
                  <span className='badge bg-main border-main text-black text-lg absolute right-0'>
                    {type}
                  </span>

                  <figure>
                    <img
                      src={img}
                      alt={name}
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='w-full h-auto rounded-t-[16px]'
                    />
                  </figure>
                  <div className='card-body'>
                    <h1 className='card-title'>{name}</h1>
                    {/* <span className='badge bg-main border-main text-black text-lg absolute right-0'>
                      {type}
                    </span> */}
                    <div className='w-full flex flex-row justify-between items-center'>
                      <span>Auction Time</span>{' '}
                      <span>{auctionTime.toLocaleTimeString()}</span>
                    </div>
                    <div className='w-full flex flex-row justify-between items-center'>
                      <span>Current Bid</span>
                      <span>{`${currentBid.amount} ${currentBid.denom}`}</span>
                    </div>

                    <p>{description}</p>
                    <div className='card-actions justify-end'>
                      <button className='btn btn-primary w-full'>
                        Place Bid
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      ) : (
        <>No Data</>
      )}
    </div>
  );
};

export default TrendingBids;
