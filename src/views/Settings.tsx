import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DELETE_USER } from '../API/mutation/settings';
import UpdatePassword from '../components/settings/UpdatePassword';
import UpdateProfil from '../components/settings/updateProfil';
import { AuthContext } from '../context/authContext';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';

function Settings(): JSX.Element {
  const { user } = useContext(AuthContext);
  const { colorCards, colorText } = useContext(DarkModeContext);
  const router = useNavigate();
  const [deleteUser, { loading, error }] = useMutation(DELETE_USER, {
    onCompleted: () => {
      router('/', { replace: true });
    },
  });

  if (loading) {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    );
  }
  if (error) {
    toast('Une erreur est survenue.');
  }
  return (
    <Layout>
      <div className={`${colorText}  py-4 px-5 text-2xl`}>
        <UpdateProfil />
        <div className="w-full lg:flex">
          <UpdatePassword />
          <div className={` lg:w-1/2 my-6 lg:ml-4 w-full`}>
            <div className={`bg-[${colorCards}] py-2 pb-5 px-6`}>
              <div className="flex w-full justify-between items-center">
                <h1> Supprimer mon compte</h1>
                <button
                  onClick={() =>
                    deleteUser({
                      variables: { deleteUserByIdId: user?.login.id },
                    })
                  }
                  className="w-auto px-3 py-2 bg-[#5D6AD2] rounded-lg text-lg"
                  type="button"
                >
                  Supprimer
                </button>
              </div>
              <p className="text-sm mt-2">
                Une fois que votre compte est supprimé il ne peut pas y avoir de
                retour en arrière possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
