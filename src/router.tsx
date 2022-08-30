import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import Feed from './views/Feed';
import HomePage from './views/Homepage';
import Settings from './views/Settings';
import Tutos from './views/Tutos';
import Admin from './views/Admin';
import TutoDetail from './views/TutoDetail';
import Stats from './views/Stats';

function Router(): JSX.Element {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Routes>
      <Route
        path="/feed"
        element={user !== null ? <Feed /> : <Navigate to="/" />}
      />
      <Route
        path="/articles"
        element={user !== null ? <Tutos /> : <Navigate to="/" />}
      />
      <Route
        path="/article/:id"
        element={user !== null ? <TutoDetail /> : <Navigate to="/" />}
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
          user !== null && user.login.role === 'SUPERADMIN' ? (
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
