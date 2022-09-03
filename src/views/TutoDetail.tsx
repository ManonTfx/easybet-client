import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { GET_ONE_ARTICLE } from '../API/query/articles';
import Layout from './LayoutDashboard';
import { GetOneArticle } from '../API/types/GetOneArticle';
import { DarkModeContext } from '../context/darkModeContext';
import arrow_right from '../assets/arrow_right.svg';

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
  return (
    <Layout>
      <div
        className={`${colorText} ${scrollbarColor} px-11 py-8 overflow-y-scroll max-h-[90vh]`}
      >
        <Link to="/articles">
          <button type="button" className="flex items-center mb-4">
            <img className="rotate-180" src={arrow_right} alt="back" />
            <p className="text-sm ml-4">Revenir aux articles</p>
          </button>
        </Link>
        <p className="text-xl">{dataArticle?.getArticleByID.title}</p>
        <img
          className="w-full mt-5"
          src={dataArticle?.getArticleByID.img}
          alt="toto"
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
    </Layout>
  );
}

export default TutoDetail;
