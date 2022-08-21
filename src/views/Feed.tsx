import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { GET_ALL_BETS } from '../API/query/bets';
import { GetAllbets } from '../API/types/GetAllbets';
import ListBets from '../components/feed/ListBets';
import ListTutos from '../components/tuto/ListTutos';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';

function Feed(): JSX.Element {
  const { colorText, isDarkMode } = useContext(DarkModeContext);

  // FETCH THE BETS LIST
  const { loading, error, data } = useQuery<GetAllbets>(GET_ALL_BETS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }
  const scrollbarColor = isDarkMode
    ? 'scrollbar-darkMode'
    : 'scrollbar-lightMode';
  return (
    <Layout>
      <div className={`${colorText} flex justify-between px-5 pt-5`}>
        <div
          className={`${scrollbarColor} w-8/12 overflow-y-scroll  max-h-[90vh]`}
        >
          <ListBets datas={data.getAllBets} />
        </div>
        <div className="w-4/12 pl-5">
          <p>Derniers articles</p>
          <ListTutos />
        </div>
      </div>
    </Layout>
  );
}

export default Feed;
