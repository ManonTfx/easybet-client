import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import Feed from './views/Feed';
import HomePage from './views/Homepage';
import Settings from './views/Settings';
import Stats from './views/Stats';
import Tutos from './views/Tutos';
import Admin from './views/Admin';

function Router(): JSX.Element {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/feed"
        element={user !== null ? <Feed /> : <Navigate to="/" />}
      />
      <Route
        path="/tutos"
        element={user !== null ? <Tutos /> : <Navigate to="/" />}
      />
      <Route
        path="/stats"
        element={user !== null ? <Stats /> : <Navigate to="/" />}
      />
      <Route
        path="/settings"
        element={user !== null ? <Settings /> : <Navigate to="/" />}
      />
      <Route
        path="/admin"
        element={
          user?.login.role === 'SUPERADMIN' && user !== null ? (
            <Admin />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
