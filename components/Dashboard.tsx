import Todo from '@/components/Todo';
import StockMarket from '@/components/StockMarket';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-5 items-start'>
      <div className='flex flex-row items-center w-full justify-between'>
        <Todo />
        <StockMarket />
        <StockMarket />
        <Todo />
      </div>
    </div>
  );
};

export default Dashboard;
