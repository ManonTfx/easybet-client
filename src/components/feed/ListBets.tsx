/* eslint-disable camelcase */
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import OneBet from './OneBet';
import { GET_ALL_BETS } from '../../API/query/bets';
import { GetOneBet_getBetByID } from '../../API/types/GetOneBet';
import { GetAllbets } from '../../API/types/GetAllbets';
import InputSearch from '../formInputs/InputSearch';

function ListBets(): JSX.Element {
  const [search, setSearch] = useState('');
  // FETCH THE TASK LIST
  const { loading, error, data } = useQuery<GetAllbets>(GET_ALL_BETS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }
  const dataSort = [...data.getAllBets];

  const submitSearch = (searchValue: string) => {
    console.log(searchValue);
  };
  return (
    <div className="py-4 px-4">
      <InputSearch
        submitValue={() => submitSearch(search)}
        placeholder="Rechercher"
        value={search}
        setValue={setSearch}
      />
      {dataSort.reverse().map((el: GetOneBet_getBetByID) => {
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
