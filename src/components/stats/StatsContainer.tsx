import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { GET_ALL_BETS } from '../../API/query/bets';
import { GET_ALL_USERBETS } from '../../API/query/userBets';
import {
  GetAllUserBets_getAllUserBets,
  GetAllUserBets,
} from '../../API/types/GetAllUserBets';
import { AuthContext } from '../../context/authContext';
import MoreImportantFigures from './MoreImportantFigures';
import ProfitChart from './ProfitChart';
import SecondaryStatisticalsFigures from './SecondaryStatisticalsFigures';
import SportChart from './SportChart';
import { IBetsWithResult, IUserBetsWithResult } from '../../types/stats/stats';
import { GetAllBets_getAllBets } from '../../types/bets';

interface IProps {
  isMyStats: boolean;
}

// interface IBetsWithResult extends GetAllBets_getAllBets {
//   profit: string;
// }

interface Stats {
  total: {
    stake: number;
    profit: number;
    odd: number;
    betsWon: number;
  };
  average: {
    odd: number;
    stake: number;
  };
  percentage: {
    win: number;
    roi: number;
  };
}

function StatsContainer({ isMyStats }: IProps): JSX.Element {
  const { user } = useContext(AuthContext);
  const BANKROLL = 1;
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

  // =======================
  // ** GLOBAL STATS
  // =======================
  const pastBets = dataBets.getAllBets.filter(
    (bet: GetAllBets_getAllBets) => bet.result !== 0 && bet.result !== null
  );

  const betsStats: Stats = {
    total: {
      stake: 0,
      profit: 0,
      odd: 0,
      betsWon: 0,
    },
    average: {
      odd: 0,
      stake: 0,
    },
    percentage: {
      win: 0,
      roi: 0,
    },
  };
  const pastBetsWithProfit: IBetsWithResult[] = pastBets.map(
    (bet: GetAllBets_getAllBets) => {
      if (bet.result !== null) {
        const profit =
          bet.result < 0
            ? bet.stake * bet.result
            : (bet.stake * bet.odd - bet.stake) * bet.result;
        betsStats.total.stake += bet.stake * BANKROLL;
        betsStats.total.odd += bet.odd;
        betsStats.total.profit += profit * BANKROLL;
        betsStats.total.betsWon += bet.result > 0 ? 1 : 0;
        return { ...bet, profit };
      }
      return 0;
    }
  );
  betsStats.average.odd = betsStats.total.odd / pastBets.length;
  betsStats.average.stake =
    (betsStats.total.stake / pastBets.length) * BANKROLL;

  betsStats.percentage.win = Math.round(
    (betsStats.total.betsWon / pastBets.length) * 100
  );

  betsStats.percentage.roi = Math.round(
    (betsStats.total.profit / betsStats.total.stake) * 100
  );

  const ESPERANCE_NB = 10000;
  const esperance = Math.floor(
    ESPERANCE_NB * betsStats.average.stake * (betsStats.percentage.roi / 100)
  );

  // =======================
  // ** USER STATS
  // =======================
  const userBetsStats: Stats = {
    total: {
      stake: 0,
      profit: 0,
      odd: 0,
      betsWon: 0,
    },
    average: {
      odd: 0,
      stake: 0,
    },
    percentage: {
      win: 0,
      roi: 0,
    },
  };
  const userBetsUserId = dataUserBets.getAllUserBets.filter(
    (userBet) => userBet.userId === user?.login.id
  );

  const pastUserBetsWithProfit: IUserBetsWithResult[] = userBetsUserId
    .map((userBet: GetAllUserBets_getAllUserBets) => {
      // Find global bet from user bet
      const mainBet = pastBets.find(
        (globalBet: GetAllBets_getAllBets) => globalBet.id === userBet.betId
      );
      if (mainBet?.result) {
        console.log(userBet.amount, userBet.odd, mainBet.result);
        const profit =
          mainBet.result < 0
            ? userBet.amount * mainBet.result
            : (userBet.amount * userBet.odd - userBet.amount) * mainBet.result;
        userBetsStats.total.stake += userBet.amount;
        userBetsStats.total.odd += mainBet.odd;
        userBetsStats.total.profit += profit;
        userBetsStats.total.betsWon += profit > 0 ? 1 : 0;
        return { ...userBet, profit };
      }
      return { ...userBet, profit: 0 };
    })
    .filter((bet: any) => bet.profit !== 0 && bet.profit !== null);

  // pastUserBetsWithProfit.map((bet) => {
  //   console.log(bet);
  //   return 1;
  // });
  userBetsStats.average.odd =
    userBetsStats.total.odd / pastUserBetsWithProfit.length;
  userBetsStats.average.stake =
    (userBetsStats.total.stake / pastUserBetsWithProfit.length) * BANKROLL;

  userBetsStats.percentage.win = Math.round(
    (userBetsStats.total.betsWon / pastUserBetsWithProfit.length) * 100
  );
  userBetsStats.percentage.roi = Math.round(
    (userBetsStats.total.profit / userBetsStats.total.stake) * 100
  );
  const userEsperance = Math.floor(
    // eslint-disable-next-line prettier/prettier
    ESPERANCE_NB * userBetsStats.average.stake * (userBetsStats.percentage.roi / 100)
  );
  return (
    <div className="lg:w-9/12 w-full">
      {isMyStats ? (
        <>
          <MoreImportantFigures
            totalBets={pastUserBetsWithProfit.length}
            winnings={userBetsStats.total.profit}
            roi={userBetsStats.percentage.roi}
          />
          <ProfitChart
            betsProfit={pastUserBetsWithProfit.map((bet) => bet.profit)}
          />
          <div className="lg:flex justify-between w-full lg:px-11">
            <SecondaryStatisticalsFigures
              totalStaked={userBetsStats.total.stake}
              averageOdd={userBetsStats.average.odd}
              averageBet={userBetsStats.average.stake}
              totalWin={userBetsStats.total.profit}
              percentageWin={userBetsStats.percentage.win}
              esperance={userEsperance}
            />
            {/* <SportChart bets={dataBets} /> */}
          </div>
        </>
      ) : (
        <>
          <MoreImportantFigures
            totalBets={pastBets.length}
            winnings={betsStats.total.profit}
            roi={betsStats.percentage.roi}
          />
          <ProfitChart
            betsProfit={pastBetsWithProfit.map((bet) => bet.profit)}
          />
          <div className="lg:flex justify-between w-full lg:px-11">
            <SecondaryStatisticalsFigures
              totalStaked={betsStats.total.stake}
              averageOdd={betsStats.average.odd}
              averageBet={betsStats.average.stake}
              totalWin={betsStats.total.profit}
              percentageWin={betsStats.percentage.win}
              esperance={esperance}
            />
            <SportChart bets={dataBets} />
          </div>
        </>
      )}
      <div className="border border-[#221C2D] w-11/12 m-auto mt-2" />
    </div>
  );
}

export default StatsContainer;
