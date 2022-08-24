import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { GET_ALL_BETS } from '../../API/query/bets';
import { GET_ALL_USERBETS } from '../../API/query/userBets';
import { GetAllUserBets } from '../../API/types/GetAllUserBets';
import { AuthContext } from '../../context/authContext';
import MoreImportantFigures from './MoreImportantFigures';
import { GetAllBets } from '../../API/types/GetAllBets';

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
  } = useQuery<GetAllBets>(GET_ALL_BETS);

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
  // WINNINGS
  const totalStakeSum = dataBets.getAllBets.reduce((acc, obj) => {
    return acc + obj.stake;
  }, 0);

  const totalWinArray = dataBets.getAllBets.map((bet: any) => {
    return bet.result * bet.stake * bet.odd;
  });
  const totalWinSum = totalWinArray.reduce((acc, obj) => {
    return acc + obj;
  }, 0);

  const winnings = totalWinSum - totalStakeSum;

  // ROI
  const roi = (winnings / dataBets.getAllBets.length) * 100;

  return (
    <div className="w-9/12">
      <MoreImportantFigures
        totalBets={
          isMyStats ? userBetsUserId.length : dataBets.getAllBets.length
        }
        winnings={winnings}
        roi={roi}
      />
    </div>
  );
}

export default StatsContainer;
