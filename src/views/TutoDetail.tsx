/* eslint-disable react/no-danger */
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { GET_ONE_ARTICLE } from '../API/query/articles';
import Layout from './LayoutDashboard';
import { GetOneArticle } from '../API/types/GetOneArticle';
import { DarkModeContext } from '../context/darkModeContext';
import arrow_right from '../assets/arrow_right.svg';
import arrow_black from '../assets/arrow_black.svg';

function TutoDetail(): JSX.Element {
  const { id } = useParams();
  const { colorText, isDarkMode } = useContext(DarkModeContext);

  const {
    loading: loadingArticle,
    error: errorArticle,
    data: dataArticle,
  } = useQuery<GetOneArticle>(GET_ONE_ARTICLE, {
    variables: { getArticleByIdId: id },
  });
  if (loadingArticle) {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    );
  }
  if (errorArticle) {
    toast('Une erreur est survenue.');
  }
  const scrollbarColor = isDarkMode
    ? 'scrollbar-darkMode'
    : 'scrollbar-lightMode';

  const srcImg = isDarkMode ? arrow_right : arrow_black;
  const backgroundColor = isDarkMode ? '#221D2C' : '#DCDFF1';
  return (
    <Layout>
      <div
        className={`${colorText} ${scrollbarColor} px-11 py-8 overflow-y-scroll max-h-[90vh]`}
      >
        <Link to="/articles">
          <button type="button" className="flex items-center mb-4">
            <img className="rotate-180" src={srcImg} alt="back" />
            <p className="text-sm ml-4">Revenir aux articles</p>
          </button>
        </Link>
        <div style={{ backgroundColor }} className="p-6 rounded-[8px]">
          <p className="text-2xl font-medium">
            {dataArticle?.getArticleByID.title}
          </p>
          <div
            className="h-[400px] w-1/2 border-purple mr-3 mt-5 "
            style={{
              backgroundImage: `url(${dataArticle?.getArticleByID.img})`,
              backgroundPosition: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
          {dataArticle?.getArticleByID.contents && (
            <div
              className="pb-4 mt-4"
              dangerouslySetInnerHTML={{
                __html: dataArticle.getArticleByID.contents,
              }}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default TutoDetail;
