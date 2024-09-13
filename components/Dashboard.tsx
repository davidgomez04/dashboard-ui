import Todo from '@/components/Todo';
import StockMarket from '@/components/StockMarket';
import CryptoMarket from '@/components/CryptoMarket';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-5 items-start'>
      <div className='flex flex-row items-center w-full justify-between'>
        <StockMarket />
        <CryptoMarket />
        <Todo />
      </div>
    </div>
  );
};

export default Dashboard;
