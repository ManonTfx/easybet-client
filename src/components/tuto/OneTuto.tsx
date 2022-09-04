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
        className="bg-[#221D2C] px-11 my-6 rounded-[5px] w-full "
      >
        <p className="text-lg font-bold mb-2 pt-6">{data.title}</p>
        <div
          className="h-[400px] w-full border-purple mr-3 mt-5 "
          style={{
            backgroundImage: `url(${data.img})`,
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <div
          className="pb-4 mt-4 "
          dangerouslySetInnerHTML={{ __html: data.contents }}
        />
      </div>
    </Link>
  );
}

export default OneTuto;
