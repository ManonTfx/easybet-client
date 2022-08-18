/* eslint-disable camelcase */
import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';
import ListUsers from '../components/admin/ListUsers';
import { AdminContext } from '../context/adminContext';
import { GetOneUser_getUserByID } from '../API/types/GetOneUser';
import ListUserBets from '../components/admin/ListUsersBets';
import { GetListUsers } from '../API/types/GetListUsers';
import { GET_ALL_USERS } from '../API/query/admin';

function Admin(): JSX.Element {
  const [userActiv, setUserActiv] = useState<GetOneUser_getUserByID | null>(
    null
  );
  const { colorText } = useContext(DarkModeContext);

  // FETCH THE USER LIST
  const { loading, error, data } = useQuery<GetListUsers>(GET_ALL_USERS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }

  // ADMIN CONTEXT
  const adminContextValue = {
    userActiv,
    updateUserActiv: setUserActiv,
  };
  return (
    <AdminContext.Provider value={adminContextValue}>
      <Layout>
        <div className={`${colorText} px-5 py-5 w-full flex`}>
          <div className="w-8/12">
            <ListUsers datas={data.getAllUsers} />
          </div>
          <div className="w-4/12 px-5">
            <p>
              Liste des tracks de{' '}
              <span className="text-[#5D6AD2]">{userActiv?.firstName}</span> :
            </p>
            <ListUserBets />
          </div>
        </div>
      </Layout>
    </AdminContext.Provider>
  );
}

export default Admin;
