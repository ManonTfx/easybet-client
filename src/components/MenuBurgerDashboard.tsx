import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../context/authContext';
import { DashboardContext } from '../context/dashboardContext';
import logoEasybet from '../assets/logos/logoEasybet.svg';
import logoEasybetDark from '../assets/logos/logoEasybetDark.svg';
import { Logout } from '../API/types/Logout';
import { LOGOUT_MUTATION } from '../API/mutation/logout';
import { DarkModeContext } from '../context/darkModeContext';

function MenuBurgerDashboard(): JSX.Element {
  const location = useLocation();
  const { updateIsMenuBurger, isMenuBurger } = useContext(DashboardContext);
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(DarkModeContext);

  const nav = [
    { name: "Fil d'actualité", link: '/feed' },
    { name: 'Tutoriels', link: '/articles' },
    { name: 'Statistiques', link: '/stats' },
    { name: 'Paramètres', link: '/settings' },
  ];

  const { updateUser } = useContext(AuthContext);

  const [logoutMutation] = useMutation<Logout>(LOGOUT_MUTATION, {
    onCompleted: () => {
      updateUser(null);
    },
  });

  const openOrCloseMenuBurger = () => {
    updateIsMenuBurger(!isMenuBurger);
  };

  const darkModeLogo = isDarkMode ? logoEasybet : logoEasybetDark;
  const colorMenuBurger = isDarkMode ? 'white' : 'black';

  const heightMenuBurger = !isMenuBurger ? 'max-h-[0px]' : 'max-h-[500px]';
  return (
    <div
      className={`
      py-3 px-2 w-full top-0 left-0 z-50
        ${isDarkMode ? ' bg-darkMode' : 'bg-[#ABB1DF]   '}
      `}
    >
      <div className="flex items-center justify-between">
        <img src={darkModeLogo} alt="logo" className="h-7" />
        <Hamburger
          toggled={isMenuBurger}
          toggle={openOrCloseMenuBurger}
          color={colorMenuBurger}
          size={25}
        />
      </div>

      <ul
        className={`w-full ${heightMenuBurger} overflow-hidden transition-menu-burger`}
      >
        {nav.map((el) => {
          return (
            <li key={el.name} className="w-full ">
              <Link to={el.link}>
                <button
                  style={{ textAlign: 'start' }}
                  type="button"
                  className={`w-full pt-[20px] pb-[20px] w-full  ${
                    isDarkMode ? 'text-white' : 'text-black'
                  } ${
                    location.pathname === el.link ? 'opacity-100' : 'opacity-40'
                  }`}
                  onClick={() => {
                    updateIsMenuBurger(!isMenuBurger);
                  }}
                >
                  {el.name}
                </button>
              </Link>
            </li>
          );
        })}
        {user?.login.role === 'SUPERADMIN' && (
          <li className="w-full">
            <Link to="/admin">
              <button
                style={{ textAlign: 'start' }}
                type="button"
                className={`w-full pt-[20px]  pb-[20px]   ${
                  location.pathname === '/admin?' ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={() => {
                  updateIsMenuBurger(false);
                }}
              >
                Admin
              </button>
            </Link>
          </li>
        )}
        <div
          onKeyDown={undefined}
          role="button"
          tabIndex={0}
          onClick={() => {
            logoutMutation();
          }}
          className={`w-full ${
            isDarkMode ? 'text-white' : 'text-black'
          } pt-[20px] pb-[20px] `}
        >
          Deconnexion
        </div>
      </ul>
    </div>
  );
}

export default MenuBurgerDashboard;
