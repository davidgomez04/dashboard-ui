import { ProductData } from '@/app/page';

const now = new Date();
export enum Product {
  PERSONAL = 'Personal',
  WORK = 'Work',
  CHILL = 'Chill',
}

export const mockProductData: ProductData[] = [
  {
    type: Product.PERSONAL,
    name: 'Shoe',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    description: 'SOMMMEE',
    auctionTime: now,
    currentBid: { amount: 0.034, denom: 'BTC' },
    maxBid: '',
  },
  {
    type: Product.PERSONAL,
    name: 'Shoe',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    description: 'SOMMMEE',
    auctionTime: now,
    currentBid: { amount: 0.02, denom: 'ETH' },
    maxBid: '',
  },
  {
    type: Product.WORK,
    name: 'Shoe',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    description: 'SOMMMEE',
    auctionTime: now,
    currentBid: { amount: 0.034, denom: 'BTC' },
    maxBid: '',
  },
  {
    type: Product.CHILL,
    name: 'Shoe',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    description: 'SOMMMEE',
    auctionTime: now,
    currentBid: { amount: 0.034, denom: 'BTC' },
    maxBid: '',
  },
  {
    type: Product.PERSONAL,
    name: 'Shoe',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    description: 'SOMMMEE',
    auctionTime: now,
    currentBid: { amount: 0.034, denom: 'BTC' },
    maxBid: '',
  },
  {
    type: Product.WORK,
    name: 'Shoe',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    description: 'SOMMMEE',
    auctionTime: now,
    currentBid: { amount: 0.034, denom: 'BTC' },
    maxBid: '',
  },
];
