import { Navigate, Route, Routes } from 'react-router-dom';
import { useUserFromStore } from './store/user.slice';
import Feed from './views/Feed';
import HomePage from './views/Homepage';

function Router(): JSX.Element {
  const { user } = useUserFromStore();
  console.log(user);
  return (
    <Routes>
      <Route
        path="/feed"
        element={user.logged === true ? <Feed /> : <Navigate to="/" />}
      />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
