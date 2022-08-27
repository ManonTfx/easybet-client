import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { GET_ALL_BETS } from '../../API/query/bets';
import { GET_ALL_USERBETS } from '../../API/query/userBets';
import { GetAllUserBets } from '../../API/types/GetAllUserBets';
import { AuthContext } from '../../context/authContext';
import MoreImportantFigures from './MoreImportantFigures';
import ProfitChart from './ProfitChart';
import SecondaryStatisticalsFigures from './SegondaryStatisticalsFigures';
import SportChart from './SportChart';

interface IProps {
  isMyStats: boolean;
}
function StatsContainer({ isMyStats }: IProps): JSX.Element {
  const { user } = useContext(AuthContext);
  // FETCH THE BETS LIST
  const {
    loading: loadingBets,
    error: errorBets,
    data: dataBets,
  } = useQuery(GET_ALL_BETS);

  // FETCH THE USERBETS LIST
  const {
    loading: loadingUserBets,
    error: errorUserBets,
    data: dataUserBets,
  } = useQuery<GetAllUserBets>(GET_ALL_USERBETS);

  if (loadingBets || loadingUserBets) {
    return <p>...loading</p>;
  }
  if (errorBets || !dataBets || errorUserBets || !dataUserBets) {
    return <p>error</p>;
  }

  // ** STATS USER
  const userBetsUserId = dataUserBets.getAllUserBets.filter(
    (userBet) => userBet.userId === user?.login.id
  );

  // ** STATS GLOBALES

  const pastBets = dataBets.getAllBets.filter((bet: any) => bet.result !== 0);

  // WINNINGS
  const totalStakeSum = pastBets.reduce((acc: any, obj: any) => {
    return acc + obj.stake;
  }, 0);

  const totalWinArray = pastBets.map((bet: any) => {
    return (bet.stake * bet.odd - bet.stake) * bet.result;
  });
  const winnings = Math.round(
    totalWinArray.reduce((acc: any, obj: any) => {
      return acc + obj;
    }, 0)
  );

  // ROI
  const roi = Math.round((winnings / totalStakeSum) * 100);

  return (
    <div className="lg:w-9/12 w-full">
      {isMyStats ? (
        <MoreImportantFigures
          totalBets={userBetsUserId.length}
          winnings={0}
          roi={0}
        />
      ) : (
        <MoreImportantFigures
          totalBets={isMyStats ? userBetsUserId.length : pastBets.length}
          winnings={winnings}
          roi={roi}
        />
      )}
      <ProfitChart bets={dataBets} />
      <div className="border border-[#221C2D] w-11/12 m-auto mt-2" />
      <div className="flex justify-between w-full px-11">
        <SecondaryStatisticalsFigures
          totalStaked={0}
          avarageOdd={0}
          avarageBet={0}
          totalWin={0}
          percentageWin={0}
          esperance={0}
        />
        <SportChart />
      </div>
    </div>
  );
}

export default StatsContainer;
