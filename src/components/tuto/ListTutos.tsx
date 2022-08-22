/* eslint-disable react/no-danger */
import { v4 } from 'uuid';
import { useContext } from 'react';
import OneTuto from './OneTuto';
import { GetOneArticle_getArticleByID } from '../../API/types/GetOneArticle';
import { DarkModeContext } from '../../context/darkModeContext';

interface IProps {
  data: GetOneArticle_getArticleByID[];
}
function ListTutos({ data }: IProps): JSX.Element {
  const { isDarkMode } = useContext(DarkModeContext);

  const scrollbarColor = isDarkMode
    ? 'scrollbar-darkMode'
    : 'scrollbar-lightMode';
  return (
    <div>
      <div
        className={`${scrollbarColor} overflow-y-scroll flex flex-row space-x-5  max-h-[85vh] pr-5 mt-5`}
      >
        {data.map((el: GetOneArticle_getArticleByID) => {
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
