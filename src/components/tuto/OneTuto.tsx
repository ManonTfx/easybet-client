/* eslint-disable react/no-danger */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GetOneArticle_getArticleByID } from '../../API/types/GetOneArticle';
import { DarkModeContext } from '../../context/darkModeContext';

interface IProps {
  data: GetOneArticle_getArticleByID;
}

function OneTuto({ data }: IProps): JSX.Element {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <Link to={`/article/${data.id}`}>
      <div
        style={{ backgroundColor: isDarkMode ? '#221D2C' : '#DDDFF2' }}
        className="bg-[#221D2C] w-full px-11 my-6 rounded-[5px]"
      >
        <p className="text-lg font-bold mb-2 pt-6">{data.title}</p>
        <img className="w-full" src={data.img} alt="toto" />
        <div
          className="pb-4 mt-4"
          dangerouslySetInnerHTML={{ __html: data.contents.substr(0, 50) }}
        />
      </div>
    </Link>
  );
}

export default OneTuto;
