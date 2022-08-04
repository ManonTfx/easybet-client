import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { LOGOUT_MUTATION } from '../../API/mutation/logout';
import { Logout } from '../../API/types/Logout';
import menu from '../../assets/icons/menu.svg';
import menuDark from '../../assets/icons/menuDark.svg';
import lightDark from '../../assets/lightDark.svg';
import darkLight from '../../assets/darkLight.svg';

import { AuthContext } from '../../context/authContext';
import { DashboardContext } from '../../context/dashboardContext';
import { DarkModeContext } from '../../context/darkModeContext';

function Header(): JSX.Element {
  const { isSidebar, updateIsSidebar } = useContext(DashboardContext);
  const { isDarkMode, updateIsDarkMode } = useContext(DarkModeContext);

  const { updateUser } = useContext(AuthContext);

  const [logoutMutation] = useMutation<Logout>(LOGOUT_MUTATION, {
    onCompleted: () => {
      updateUser(null);
    },
  });

  return (
    <div
      className={
        isDarkMode
          ? 'bg-darkMode bg-darkMode flex items-center w-[99%] justify-between bg-darkMode py-3 px-2'
          : 'bg-[#DDDFF2] bg-darkMode flex items-center w-[99%] justify-between bg-darkMode py-3 px-2'
      }
    >
      <button type="button" onClick={() => updateIsSidebar(!isSidebar)}>
        {isDarkMode ? (
          <img src={menu} alt="menu" className="h-7" />
        ) : (
          <img src={menuDark} alt="menu" className="h-7" />
        )}
      </button>
      <div className="flex pr-1">
        <button
          type="button"
          className="bg-primary p-2 rounded-lg mr-4 !text-white"
          onClick={() => {
            logoutMutation();
          }}
        >
          Deconnexion
        </button>

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
  );
}

export default Header;
