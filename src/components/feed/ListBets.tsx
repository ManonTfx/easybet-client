/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import OneBet from './OneBet';
import InputSearch from '../formInputs/InputSearch';
import { GetBetByID_getBetByID } from '../../API/types/GetBetByID';

interface IProps {
  datas: any;
}

function ListBets({ datas }: IProps): JSX.Element {
  const [dataFiltered, setDataFiltered] = useState([...datas]);
  const [search, setSearch] = useState('');

  const submitSearch = (searchValue: string) => {
    if (searchValue !== '') {
      const newData = datas.filter(
        (item: any) =>
          item.bookmaker.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.category.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.name.toUpperCase().includes(searchValue.toUpperCase())
      );
      setDataFiltered([...newData]);
    } else {
      setDataFiltered([...datas]);
    }
  };

  useEffect(() => {
    submitSearch(search);
  }, [search]);

  return (
    <div className="px-4">
      <InputSearch
        submitValue={() => submitSearch(search)}
        placeholder="Rechercher"
        value={search}
        setValue={setSearch}
      />
      {dataFiltered.map((el: GetBetByID_getBetByID) => {
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
