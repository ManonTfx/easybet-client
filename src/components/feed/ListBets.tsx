/* eslint-disable camelcase */
import { useQuery } from '@apollo/client';
import OneBet from './OneBet';
import { GET_ALL_BETS } from '../../API/query/bets';
import { GetOneBet_getBetByID } from '../../API/types/GetOneBet';
import { GetAllbets } from '../../API/types/GetAllbets';

function ListBets(): JSX.Element {
  // FETCH THE TASK LIST
  const { loading, error, data } = useQuery<GetAllbets>(GET_ALL_BETS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }
  return (
    <div className="py-4 px-4">
      {data.getAllBets.map((el: GetOneBet_getBetByID) => {
        return (
          <div key={el.id}>
            <OneBet datas={el} />
          </div>
        );
      })}
    </div>
  );
}

export default ListBets;
