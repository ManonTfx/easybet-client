import { useQuery } from '@apollo/client';
import { v4 } from 'uuid';
import { useContext } from 'react';
import OneUserBet from './OneUserBet';
import { GET_ALL_USERBETS } from '../../API/query/userBets';
import { GetAllUserBets } from '../../API/types/GetAllUserBets';
import { AdminContext } from '../../context/adminContext';
import { DarkModeContext } from '../../context/darkModeContext';

function ListUserBets(): JSX.Element {
  const { userActiv } = useContext(AdminContext);
  const { isDarkMode } = useContext(DarkModeContext);

  // FETCH THE USERBETS LIST
  const { loading, error, data } = useQuery<GetAllUserBets>(GET_ALL_USERBETS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }
  const scrollbarColor = isDarkMode
    ? 'scrollbar-darkMode'
    : 'scrollbar-lightMode';
  const datasFilter = data.getAllUserBets.filter(
    (el) => el.userId === userActiv?.id
  );
  return (
    <div className={`${scrollbarColor} overflow-y-scroll max-h-[85vh]`}>
      {datasFilter.map((el) => {
        return (
          <div className="mt-4 pr-4 " key={v4()}>
            <OneUserBet datas={el} />
          </div>
        );
      })}
    </div>
  );
}

export default ListUserBets;
