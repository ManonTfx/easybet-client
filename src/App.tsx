import { useState } from 'react';
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
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <DarkModeContext.Provider value={darkModeContextValue}>
        <div className="min-h-screen w-screen pb-5">
          <Router />
        </div>
      </DarkModeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
