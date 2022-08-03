import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Router from './router';
import { AuthContext } from './context/authContext';
import { Login } from './API/types/Login';
import { DarkModeContext } from './context/darkModeContext';

function App(): JSX.Element {
  const [user, setUser] = useState<Login | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const authContextValue = {
    user,
    updateUser: setUser,
  };

  const darkModeContextValue = {
    isDarkMode,
    updateIsDarkMode: setIsDarkMode,
    colorText: isDarkMode ? 'text-white' : 'text-black',
    colorCards: isDarkMode ? '#19191C' : '#DCDFF1',
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <DarkModeContext.Provider value={darkModeContextValue}>
        <ToastContainer
          position="bottom-right"
          autoClose={9000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="min-h-screen w-screen">
          <Router />
        </div>
      </DarkModeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
