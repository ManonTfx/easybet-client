import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';

import { toast } from 'react-toastify';
import { GET_ALL_ARTICLES } from '../API/query/articles';
import { GET_ALL_BETS } from '../API/query/bets';
import ListBets from '../components/feed/ListBets';

import ListTutos from '../components/tuto/ListTutos';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';

function Feed(): JSX.Element {
  const { colorText, isDarkMode } = useContext(DarkModeContext);

  // FETCH THE ARTICLES LIST
  const {
    loading: loadingArticle,
    error: errorArticle,
    data: dataArticles,
  } = useQuery(GET_ALL_ARTICLES);

  // FETCH THE BETS LIST
  const { loading, error, data } = useQuery(GET_ALL_BETS);

  if (loading || loadingArticle) {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    );
  }
  if (error || !data || errorArticle || !dataArticles) {
    toast('Une erreur est survenue');
  }
  const scrollbarColor = isDarkMode
    ? 'scrollbar-darkMode'
    : 'scrollbar-lightMode';

  return (
    <Layout>
      <div className={`${colorText} lg:flex justify-between px-5 pt-5`}>
        <div
          className={`${scrollbarColor} lg:w-8/12 overflow-y-scroll  max-h-[90vh]`}
        >
          <ListBets datas={data.getAllBets} />
        </div>
        <div className="w-4/12 pl-5 lg:block hidden">
          <p>Derniers articles</p>
          <ListTutos data={dataArticles.getAllArticles} />
        </div>
      </div>
    </Layout>
  );
}

export default Feed;
