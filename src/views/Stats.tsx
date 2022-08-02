import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';

function Stats(): JSX.Element {
  const { colorText } = useContext(DarkModeContext);
  return (
    <Layout>
      <div className={` ${colorText}`}>Stats</div>
    </Layout>
  );
}

export default Stats;
