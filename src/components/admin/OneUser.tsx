/* eslint-disable camelcase */
import { useContext } from 'react';
import { GetOneUser_getUserByID } from '../../API/types/GetOneUser';
import { AdminContext } from '../../context/adminContext';
import { DarkModeContext } from '../../context/darkModeContext';

interface IProps {
  datas: GetOneUser_getUserByID;
}

function OneUser({ datas }: IProps): JSX.Element {
  const { updateUserActiv, userActiv } = useContext(AdminContext);
  const { colorCards } = useContext(DarkModeContext);

  const backroundColorRole = (role: string): string => {
    if (role === 'ADMIN') {
      return '#3EB5CA3';
    }
    if (role === 'SUPERADMIN') {
      return '#E4AC65';
    }
    if (role === 'USER') {
      return '#3DA184';
    }
    return '';
  };

  const backroundColorUserActivCard = (id: string): string => {
    if (id === userActiv?.id) {
      return '#5D6AD2';
    }
    return colorCards;
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      style={{ backgroundColor: backroundColorUserActivCard(datas.id) }}
      onClick={() => updateUserActiv(datas)}
      className="relative py-4 mb-4 px-6 rounded-[16px] cursor-pointer hover:opacity-80"
    >
      <div className="flex">
        <p className="mr-1">{datas.firstName} </p>
        <p>{datas.lastName.toUpperCase()}</p>
      </div>
      <p className="mt-1">{datas.email}</p>
      <p className="absolute top-4 right-4">
        Inscription le {new Date(datas.createdAt).toLocaleDateString('fr')}
      </p>
      <div>
        <div
          style={{ backgroundColor: backroundColorRole(datas.role) }}
          className="mt-5 rounded-[16px] bg-red-200 w-[120px] text-center"
        >
          {datas.role.charAt(0).toUpperCase() +
            datas.role.slice(1).toLowerCase()}
        </div>
      </div>
    </div>
  );
}

export default OneUser;
