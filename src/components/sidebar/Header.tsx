import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { LOGOUT_MUTATION } from '../../API/mutation/logout';
import { Logout } from '../../API/types/Logout';
import menu from '../../assets/icons/menu.svg';
import { AuthContext } from '../../context/authContext';
import { DashboardContext } from '../../context/dashboardContext';

function Header(): JSX.Element {
  const { isSidebar, updateIsSidebar } = useContext(DashboardContext);
  const { updateToken } = useContext(AuthContext);

  const [logoutMutation] = useMutation<Logout>(LOGOUT_MUTATION, {
    onCompleted: () => {
      updateToken('');
    },
  });
  return (
    <div className="flex items-center w-[99%] justify-between bg-darkBlue py-7 px-2">
      <button type="button" onClick={() => updateIsSidebar(!isSidebar)}>
        <img src={menu} alt="menu" className="h-7" />
      </button>
      <button
        type="button"
        className="bg-primary p-2 rounded-lg mr-2"
        onClick={() => {
          logoutMutation();
        }}
      >
        Deconnexion
      </button>
    </div>
  );
}

export default Header;
