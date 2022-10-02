import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_ONE_BET } from '../API/query/bets';
import OneBet from '../components/feed/OneBet';
import LayoutDashboard from './LayoutDashboard';

function BetDetail() {
  const betId = useParams();

  // ** READ ONE BET
  const { data, loading, error } = useQuery(GET_ONE_BET, {
    variables: { getBetByIdId: betId.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <LayoutDashboard>
      <div className="m-8 text-white">
        <OneBet datas={data.getBetByID} />
      </div>
    </LayoutDashboard>
  );
}

export default BetDetail;
