import { useEffect, useState } from 'react';
import Router from './router';
import { AuthContext } from './context/authContext';

function App(): JSX.Element {
  const [token, setToken] = useState<string>(
    sessionStorage.getItem('token') || ''
  );

  const authContextValue = {
    token,
    updateToken: setToken,
  };

  useEffect(() => {
    if (token) {
      if (token !== sessionStorage.getItem('token')) {
        sessionStorage.setItem('token', token);
      }
    } else {
      sessionStorage.removeItem('token');
    }
  }, [token]);

  return (
    <AuthContext.Provider value={authContextValue}>
      <div className="min-h-screen w-screen pb-5 bg-black text-white">
        <Router />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
