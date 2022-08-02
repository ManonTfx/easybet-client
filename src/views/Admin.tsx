import { useContext } from 'react';
import SearchInput from '../components/formInputs/SearchInput';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';
import ListUsers from '../components/admin/ListUsers';

function Admin(): JSX.Element {
  const { colorText } = useContext(DarkModeContext);
  return (
    <Layout>
      <div className={`${colorText} px-5 py-5 w-full flex`}>
        <div className="w-8/12  border-r-4 ">
          <SearchInput placeholder="Rechercher un utilisateur" />
          <ListUsers />
        </div>
        <div className="bg-red-400 w-4/12">
          <h1>liste tracks de lutilisateur</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
