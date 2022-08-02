import { useQuery } from '@apollo/client';
import { v4 } from 'uuid';
import { GET_ALL_USERS } from '../../API/query/admin';
import { GetListUsers } from '../../API/types/GetListUsers';
import OneUser from './OneUser';

function ListUsers(): JSX.Element {
  // FETCH THE TASK LIST
  const { loading, error, data } = useQuery<GetListUsers>(GET_ALL_USERS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }
  return (
    <div className="overflow-y-scroll max-h-[85vh]">
      {data.getAllUsers.map((el) => {
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
