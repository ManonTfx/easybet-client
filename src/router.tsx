import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import Feed from './views/Feed';
import HomePage from './views/Homepage';
import Settings from './views/Settings';
import Stats from './views/Stats';
import Tutos from './views/Tutos';

function Router(): JSX.Element {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/feed" element={token ? <Feed /> : <Navigate to="/" />} />
      <Route path="/tutos" element={token ? <Tutos /> : <Navigate to="/" />} />
      <Route path="/stats" element={token ? <Stats /> : <Navigate to="/" />} />
      <Route
        path="/settings"
        element={token ? <Settings /> : <Navigate to="/" />}
      />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
