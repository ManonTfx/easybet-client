/* eslint-disable camelcase */
import { useContext, useState } from 'react';
import SearchInput from '../components/formInputs/SearchInput';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';
import ListUsers from '../components/admin/ListUsers';
import { AdminContext } from '../context/adminContext';
import { GetOneUser_getUserByID } from '../API/types/GetOneUser';

function Admin(): JSX.Element {
  const [userActiv, setUserActiv] = useState<GetOneUser_getUserByID | null>(
    null
  );
  const { colorText } = useContext(DarkModeContext);

  const adminContextValue = {
    userActiv,
    updateUserActiv: setUserActiv,
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      <Layout>
        <div className={`${colorText} px-5 py-5 w-full flex`}>
          <div className="w-8/12  border-r-4 ">
            <SearchInput placeholder="Rechercher un utilisateur" />
            <ListUsers />
          </div>
          <div className="w-4/12 px-5">
            <p>
              Liste des tracks de{' '}
              <span className="text-[#5D6AD2]">{userActiv?.firstName}</span> :
            </p>
          </div>
        </div>
      </Layout>
    </AdminContext.Provider>
  );
}

export default Admin;
