import { useContext, useState } from 'react';
import HeaderStats from '../components/stats/HeaderStats';
import StatsContainer from '../components/stats/StatsContainer';
import Toolbox from '../components/stats/Toolbox';
import { DarkModeContext } from '../context/darkModeContext';
import Layout from './LayoutDashboard';

function Stats(): JSX.Element {
  const [isMyStats, setIsMyStats] = useState(true);
  const { colorText } = useContext(DarkModeContext);

  return (
    <Layout>
      <div className={` ${colorText}`}>
        <HeaderStats setIsMyStats={setIsMyStats} isMyStats={isMyStats} />
        <div className="flex">
          <StatsContainer isMyStats={isMyStats} />
          <Toolbox />
        </div>
      </div>
    </Layout>
  );
}

export default Stats;
