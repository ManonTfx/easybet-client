import { useState } from 'react';
import Router from './router';
import { AuthContext } from './context/authContext';
import { Login } from './API/types/Login';

function App(): JSX.Element {
  const [user, setUser] = useState<Login | null>(null);

  const authContextValue = {
    user,
    updateUser: setUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <div className="min-h-screen w-screen pb-5 bg-black text-white">
        <Router />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
