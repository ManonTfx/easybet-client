import { useContext, useState } from 'react';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';
import { AuthContext } from '../context/authContext';
import CreateUpdateTuto from '../components/tuto/CreateOrUpdateTuto';
import ListTutos from '../components/tuto/ListTutos';

function Tutos(): JSX.Element {
  const [isForm, setIsForm] = useState(false);
  const { colorText } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <div className={`${colorText} px-5 py-5 w-full flex`}>
        {!isForm ? (
          user?.login.role !== 'USER' && (
            <div>
              <button
                onClick={() => setIsForm(true)}
                className="bg-primary p-2 rounded-[5px] !text-white"
                type="button"
              >
                Creer un nouveau tuto/article
              </button>
              <ListTutos />
            </div>
          )
        ) : (
          <CreateUpdateTuto setIsForm={setIsForm} />
        )}
      </div>
    </Layout>
  );
}

export default Tutos;
