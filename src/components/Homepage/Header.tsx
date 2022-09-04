import { useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';

import { LOGOUT_MUTATION } from '../../API/mutation/logout';
import { Logout } from '../../API/types/Logout';
import logoEasybet from '../../assets/logos/logoEasybet.svg';
import { AuthContext } from '../../context/authContext';
import MenuBurger from '../MenuBurger';

function Header(): JSX.Element {
  const [isMenuBurger, setIsMenuBurger] = useState(false);
  const { user, updateIsLoginModal, updateIsSignUpModal } =
    useContext(AuthContext);
  const router = useNavigate();

  const [logoutMutation] = useMutation<Logout>(LOGOUT_MUTATION, {
    onCompleted: () => {
      localStorage.removeItem('userlogin');
      router('/', { replace: true });
      updateIsSignUpModal(false);
      updateIsLoginModal(false);
      window.location.reload();
    },
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  return (
    <>
      {!isMobile ? (
        <div
          style={{ zIndex: 20 }}
          className="bg-black flex px-4 justify-between fixed bg-opacity-50 w-full p-4"
        >
          <Link to="/">
            <img className="h-8" src={logoEasybet} alt="easybet" />
          </Link>
          {user.login.id === '' ? (
            <div>
              <button
                type="button"
                className="bg-transparent mr-4 border border-primary p-2 rounded-lg"
                onClick={() => updateIsLoginModal(true)}
              >
                Connexion
              </button>
              <button
                type="button"
                className="bg-primary p-2 rounded-lg"
                onClick={() => {
                  updateIsSignUpModal(true);
                  updateIsLoginModal(false);
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
      ) : (
        <MenuBurger
          setIsMenuBurger={setIsMenuBurger}
          isMenuBurger={isMenuBurger}
        />
      )}
    </>
  );
}

export default Header;
