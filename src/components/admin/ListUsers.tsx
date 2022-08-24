import { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { DarkModeContext } from '../../context/darkModeContext';
import InputSearch from '../formInputs/InputSearch';
import OneUser from './OneUser';

interface IProps {
  datas: any;
}

function ListUsers({ datas }: IProps): JSX.Element {
  const [search, setSearch] = useState('');
  const [dataFiltered, setDataFiltered] = useState([...datas]);
  const { isDarkMode } = useContext(DarkModeContext);

  const submitSearch = (searchValue: string) => {
    if (searchValue !== '') {
      const newData = datas.filter(
        (item: any) =>
          item.email.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.firstName.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.lastName.toUpperCase().includes(searchValue.toUpperCase()) ||
          item.role.toUpperCase().includes(searchValue.toUpperCase())
      );
      setDataFiltered([...newData]);
    } else {
      setDataFiltered([...datas]);
    }
  };

  useEffect(() => {
    submitSearch(search);
  }, [search]);

  const scrollbarColor = isDarkMode
    ? 'scrollbar-darkMode'
    : 'scrollbar-lightMode';
  return (
    <div className={`overflow-y-scroll max-h-[85vh] ${scrollbarColor}`}>
      <div className="pr-4">
        <InputSearch
          submitValue={() => submitSearch(search)}
          placeholder="Rechercher"
          value={search}
          setValue={setSearch}
        />
      </div>
      {dataFiltered.map((el) => {
        return (
          <div className="mt-4 pr-4 " key={v4()}>
            <OneUser datas={el} />
          </div>
        );
      })}
    </div>
  );
}

export default ListUsers;
