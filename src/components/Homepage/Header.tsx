import { useMutation } from '@apollo/client';
import { Dispatch, SetStateAction, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT_MUTATION } from '../../API/mutation/logout';
import { Logout } from '../../API/types/Logout';
import logoEasybet from '../../assets/logos/logoEasybet.svg';
import { AuthContext } from '../../context/authContext';

interface IProps {
  setIsLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsSignUpModal: Dispatch<SetStateAction<boolean>>;
}

function Header({ setIsLoginModal, setIsSignUpModal }: IProps): JSX.Element {
  const { user, updateUser } = useContext(AuthContext);
  const router = useNavigate();

  const [logoutMutation] = useMutation<Logout>(LOGOUT_MUTATION, {
    onCompleted: () => {
      updateUser(null);
      router('/', { replace: true });
      setIsSignUpModal(false);
      setIsLoginModal(false);
    },
  });

  return (
    <div
      style={{ zIndex: 20 }}
      className="bg-black flex px-4 justify-between fixed bg-opacity-50 w-full p-4"
    >
      <img className="h-8" src={logoEasybet} alt="easybet" />
      {!user ? (
        <div>
          <button
            type="button"
            className="bg-transparent mr-4 border border-primary p-2 rounded-lg"
            onClick={() => setIsLoginModal(true)}
          >
            Connexion
          </button>
          <button
            type="button"
            className="bg-primary p-2 rounded-lg"
            onClick={() => {
              setIsSignUpModal(true);
              setIsLoginModal(false);
            }}
          >
            Inscription
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="bg-primary p-2 rounded-lg"
          onClick={() => {
            logoutMutation();
          }}
        >
          Deconnexion
        </button>
      )}
    </div>
  );
}

export default Header;
