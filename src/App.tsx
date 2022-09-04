import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import '@progress/kendo-theme-default/dist/all.css';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Router from './router';
import { AuthContext } from './context/authContext';
import { DarkModeContext } from './context/darkModeContext';
import { Login } from './API/types/Login';

function App(): JSX.Element {
  const [user, setUser] = useState<Login>(
    JSON.parse(
      localStorage.getItem('userlogin') ||
        '{"login":{"id":"","email":"","firstName":"","lastName":"","token":"","role":"","avatar":"","__typename":""}}'
    )
  );
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expireDate, setExpireDate] = useState<string>('');
  const [tokenConnected, setTokenConnected] = useState<boolean>(true);

  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false);

  const hour: number = 60 * 60 * 1000;

  const authContextValue = {
    user,
    updateUser: setUser,
    expireDate,
    updateExpireDate: setExpireDate,
    isLoginModal,
    updateIsLoginModal: setIsLoginModal,
    isSignUpModal,
    updateIsSignUpModal: setIsSignUpModal,
  };

  const darkModeContextValue = {
    isDarkMode,
    updateIsDarkMode: setIsDarkMode,
    colorText: isDarkMode ? 'text-white' : 'text-black',
    colorCards: isDarkMode ? '#19191C' : '#DCDFF1',
  };

  useEffect(() => {
    if (user) {
      if (
        user !== JSON.parse(JSON.stringify(localStorage.getItem('userlogin')))
      ) {
        localStorage.setItem('userlogin', JSON.stringify(user));
      }

      setInterval(() => {
        if (
          new Date().toLocaleDateString() <=
          new Date(expireDate).toLocaleDateString()
        ) {
          setTokenConnected(true);
        } else {
          setTokenConnected(false);
        }
      }, hour);
    } else {
      localStorage.removeItem('userlogin');
    }
  }, [user, expireDate]);
  return (
    <AuthContext.Provider value={authContextValue}>
      <DarkModeContext.Provider value={darkModeContextValue}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as
        <ToastContainer /> */}
        {!tokenConnected && (
          <div className="banner-deco">
            Votre session a expiré ! {}
            <Link className="cursor-pointer" to="/homepage">
              Veuillez vous reconnecter.
            </Link>
          </div>
        )}
        <div className="min-h-screen max-w-screen">
          <Router />
        </div>
      </DarkModeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
