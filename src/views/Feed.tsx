import { useContext } from 'react';
import FeedStats from '../components/feed/FeedStats';
import ListBets from '../components/feed/ListBets';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';

function Feed(): JSX.Element {
  const { colorText } = useContext(DarkModeContext);
  return (
    <Layout>
      <div className={`${colorText} flex justify-between px-5 pt-5`}>
        <div className="w-8/12 overflow-y-scroll max-h-[90vh]">
          <ListBets />
        </div>
        <div className="w-4/12">
          <FeedStats />
        </div>
      </div>
    </Layout>
  );
}

export default Feed;
