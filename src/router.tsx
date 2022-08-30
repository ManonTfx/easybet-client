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
  const { token, userRole } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/feed"
        element={token !== null ? <Feed /> : <Navigate to="/" />}
      />
      <Route
        path="/articles"
        element={token !== null ? <Tutos /> : <Navigate to="/" />}
      />
      <Route
        path="/article/:id"
        element={token !== null ? <TutoDetail /> : <Navigate to="/" />}
      />

      <Route
        path="/stats"
        element={token !== null ? <Stats /> : <Navigate to="/" />}
      />
      <Route
        path="/settings"
        element={token !== null ? <Settings /> : <Navigate to="/" />}
      />
      <Route
        path="/admin"
        element={
          userRole === 'SUPERADMIN' && token !== null ? (
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
