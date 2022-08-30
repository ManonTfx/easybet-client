/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import OneBet from './OneBet';
import InputSearch from '../formInputs/InputSearch';
import { GetBetByID_getBetByID } from '../../API/types/GetBetByID';
import { DashboardContext } from '../../context/dashboardContext';
import ModalTrack from './ModalTrack';
import { GET_ALL_USERBETS } from '../../API/query/userBets';

interface IProps {
  datas: any;
}

function ListBets({ datas }: IProps): JSX.Element {
  const [dataFiltered, setDataFiltered] = useState([...datas]);
  const [search, setSearch] = useState('');

  const { isModal } = useContext(DashboardContext);

  /// ** GET ALL USERBETS
  const { error: errorUserBets, data: dataUserBets } =
    useQuery(GET_ALL_USERBETS);

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

  if (errorUserBets) {
    toast('Une erreur est survenue');
  }
  return (
    <div className="px-4">
      <InputSearch
        submitValue={() => submitSearch(search)}
        placeholder="Rechercher"
        value={search}
        setValue={setSearch}
      />
      {dataFiltered.reverse().map((el: GetBetByID_getBetByID) => {
        return (
          <div key={el.id}>
            <OneBet datas={el} />
          </div>
        );
      })}
      {isModal && <ModalTrack dataUserBets={dataUserBets} />}
    </div>
  );
}

export default ListBets;
