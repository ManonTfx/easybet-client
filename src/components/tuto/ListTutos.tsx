/* eslint-disable react/no-danger */
import { useQuery } from '@apollo/client';
import { v4 } from 'uuid';
import { useContext } from 'react';
import { GET_ALL_ARTICLES } from '../../API/query/articles';
import OneTuto from './OneTuto';
import { GetOneArticle_getArticleByID } from '../../API/types/GetOneArticle';
import { DarkModeContext } from '../../context/darkModeContext';

function ListTutos(): JSX.Element {
  const { isDarkMode } = useContext(DarkModeContext);
  // FETCH THE ARTICLES LIST
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES);

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
    <div>
      <div
        className={`${scrollbarColor} overflow-y-scroll  max-h-[90vh] pr-5 mt-5`}
      >
        {data.getAllArticles.map((el: GetOneArticle_getArticleByID) => {
          return (
            <div key={v4()}>
              <OneTuto data={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListTutos;
