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
import LegalNotice from './views/LegalNotice';
import BetDetail from './views/BetDetail';

function Router(): JSX.Element {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/feed"
        element={user.login.token !== '' ? <Feed /> : <Navigate to="/" />}
      />
      <Route
        path="/bet/:id"
        element={user.login.token !== '' ? <BetDetail /> : <Navigate to="/" />}
      />
      <Route
        path="/articles"
        element={user.login.token !== '' ? <Tutos /> : <Navigate to="/" />}
      />
      <Route
        path="/article/:id"
        element={user.login.token !== '' ? <TutoDetail /> : <Navigate to="/" />}
      />
      <Route
        path="/stats"
        element={user.login.token !== '' ? <Stats /> : <Navigate to="/" />}
      />
      <Route
        path="/settings"
        element={user.login.token !== '' ? <Settings /> : <Navigate to="/" />}
      />

      <Route
        path="/admin"
        element={
          user.login.token !== '' && user.login.role === 'SUPERADMIN' ? (
            <Admin />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route path="/mentions-legales" element={<LegalNotice />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
