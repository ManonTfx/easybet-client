/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction, useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

interface IProps {
  setIsMyStats: Dispatch<SetStateAction<boolean>>;
  isMyStats: boolean;
}
function HeaderStats({ setIsMyStats, isMyStats }: IProps): JSX.Element {
  const { isDarkMode } = useContext(DarkModeContext);

  const backgroundColor = isDarkMode ? '#19191C' : '#DCDFF1';
  return (
    <div style={{ backgroundColor }} className="pt-4 pl-4 ">
      <button
        className={` ${!isMyStats ? ' border-b border-primary border-b-2' : ''
          } mr-4 pb-2`}
        type="button"
        onClick={() => setIsMyStats(false)}
      >
        Stats globales
      </button>
      <button
        className={` ${isMyStats ? ' border-b border-primary border-b-2' : ''
          } pb-2`}
        type="button"
        onClick={() => setIsMyStats(true)}
      >
        Mes stats
      </button>
    </div>
  );
}

export default HeaderStats;
