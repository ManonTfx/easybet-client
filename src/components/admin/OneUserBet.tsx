/* eslint-disable camelcase */
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { GetOneBet } from '../../API/types/GetOneBet';
import { GetUserBetByID_getUserBetByID } from '../../API/types/GetUserBetByID';
import { GET_ONE_BET } from '../../API/query/bets';

interface IProps {
  datas: GetUserBetByID_getUserBetByID;
}

function OneUserBet({ datas }: IProps): JSX.Element {
  const { colorCards } = useContext(DarkModeContext);
  // FETCH THE USERBETS LIST
  const { loading, error, data } = useQuery<GetOneBet>(GET_ONE_BET, {
    variables: { getBetByIdId: datas.betId },
  });
  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }

  return (
    <div
      style={{ backgroundColor: colorCards }}
      className="relative py-4 mb-4 px-6 rounded-[16px] cursor-pointer hover:opacity-80"
    >
      <div>
        <p>{data.getBetByID.name}</p>
        <p className="mr-1">{datas.amount} </p>
        <p>{datas.odd}</p>
      </div>
    </div>
  );
}

export default OneUserBet;
