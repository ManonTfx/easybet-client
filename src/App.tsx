import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import '@progress/kendo-theme-default/dist/all.css';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Router from './router';
import { AuthContext } from './context/authContext';
import { Login } from './API/types/Login';
import { DarkModeContext } from './context/darkModeContext';

function App(): JSX.Element {
  const [user, setUser] = useState<Login>(
    JSON.parse(
      localStorage.getItem('user') ||
        '{"login":{"id":"","email":"","firstName":"","lastName":"","token":"","role":"","__typename":""}}'
    )
  );
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expireDate, setExpireDate] = useState<string>('');
  const [tokenConnected, setTokenConnected] = useState<boolean>(true);

  const hour: number = 60 * 60 * 1000;

  const authContextValue = {
    user,
    updateUser: setUser,
    expireDate,
    updateExpireDate: setExpireDate,
  };

  const darkModeContextValue = {
    isDarkMode,
    updateIsDarkMode: setIsDarkMode,
    colorText: isDarkMode ? 'text-white' : 'text-black',
    colorCards: isDarkMode ? '#19191C' : '#DCDFF1',
  };

  useEffect(() => {
    if (user) {
      if (user !== JSON.parse(JSON.stringify(localStorage.getItem('user')))) {
        localStorage.setItem('user', JSON.stringify(user));
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
      localStorage.removeItem('token');
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
        {/* Same as */}
        <ToastContainer />
        {!tokenConnected && (
          <div className="banner-deco">
            Votre session a expiré ! {}
            <Link className="cursor-pointer" to="/homepage">
              Veuillez vous reconnecter.
            </Link>
          </div>
        )}
        <div className="min-h-screen w-screen">
          <Router />
        </div>
      </DarkModeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
