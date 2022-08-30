/* eslint-disable camelcase */
import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';
import ListUsers from '../components/admin/ListUsers';
import { AdminContext } from '../context/adminContext';
import { GetOneUser_getUserByID } from '../API/types/GetOneUser';
import { GET_ALL_USERS } from '../API/query/admin';

function Admin(): JSX.Element {
  const [userActiv, setUserActiv] = useState<GetOneUser_getUserByID | null>(
    null
  );
  const { colorText } = useContext(DarkModeContext);

  // FETCH THE USER LIST
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    );
  }
  if (error || !data) {
    toast('Une erreur est survenue');
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
          <div className="w-full">
            <ListUsers datas={data.getAllUsers} />
          </div>
        </div>
      </Layout>
    </AdminContext.Provider>
  );
}

export default Admin;
