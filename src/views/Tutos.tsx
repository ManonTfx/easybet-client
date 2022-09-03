import React, { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';
import { AuthContext } from '../context/authContext';
import CreateUpdateTuto from '../components/tuto/CreateOrUpdateTuto';
import ListTutos from '../components/tuto/ListTutos';
import { GET_ALL_ARTICLES } from '../API/query/articles';

function Tutos(): JSX.Element {
  const [isForm, setIsForm] = useState(false);
  const { colorText } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  // FETCH THE ARTICLES LIST
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES);

  if (loading) {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    );
  }
  if (error || !data) {
    toast('Une erreur est survenue.');
  }
  return (
    <Layout>
      <div className={`${colorText} px-5 py-5 w-full flex`}>
        {!isForm ? (
          <div>
            {user?.login.role !== 'USER' && (
              <div>
                <button
                  onClick={() => setIsForm(true)}
                  className="bg-primary p-2 rounded-[5px] !text-white"
                  type="button"
                >
                  Creer un nouveau tuto/article
                </button>
              </div>
            )}
            <ListTutos data={data.getAllArticles} />
          </div>
        ) : (
          <CreateUpdateTuto setIsForm={setIsForm} />
        )}
      </div>
    </Layout>
  );
}

export default Tutos;
