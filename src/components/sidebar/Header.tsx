import { useContext } from 'react';
import menu from '../../assets/icons/menu.svg';
import menuDark from '../../assets/icons/menuDark.svg';
import lightDark from '../../assets/lightDark.svg';
import darkLight from '../../assets/darkLight.svg';

import { DashboardContext } from '../../context/dashboardContext';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

function Header(): JSX.Element {
  const { isSidebar, updateIsSidebar } = useContext(DashboardContext);
  const { isDarkMode, updateIsDarkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  return (
    <div
      className={
        isDarkMode
          ? ' w-full bg-darkMode py-3 px-2'
          : 'bg-[#ABB1DF] w-full  py-3 px-2'
      }
    >
      <div className="flex items-center w-full justify-between  ">
        <button type="button" onClick={() => updateIsSidebar(!isSidebar)}>
          {isDarkMode ? (
            <img src={menu} alt="menu" className="h-7" />
          ) : (
            <img src={menuDark} alt="menu" className="h-7" />
          )}
        </button>

        <div className="flex pr-1  mr-2">
          <p style={{ color: isDarkMode ? 'white' : 'black' }} className="mr-2">
            {user?.login.firstName} {user?.login.lastName}
          </p>

          <button
            type="button"
            onClick={
              isDarkMode
                ? () => updateIsDarkMode(false)
                : () => updateIsDarkMode(true)
            }
          >
            {isDarkMode ? (
              <img src={darkLight} alt="darkMode" />
            ) : (
              <img src={lightDark} alt="lightMode" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
