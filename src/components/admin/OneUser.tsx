/* eslint-disable camelcase */
import { useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { GetOneUser_getUserByID } from '../../API/types/GetOneUser';
import { DarkModeContext } from '../../context/darkModeContext';
import dfltAvatar from '../../assets/dfltAvatar.svg';
import { GET_ALL_USERBETS } from '../../API/query/userBets';
import { GetAllUserBets } from '../../API/types/GetAllUserBets';
import trash_white from '../../assets/trash_white.svg';
import trash_black from '../../assets/trash_black.svg';
import update_white from '../../assets/update_white.svg';
import update_black from '../../assets/update_black.svg';
import UpdateRoleUser from './UpdateRoleUser';
import { DELETE_USER } from '../../API/mutation/settings';
import { GET_ALL_USERS } from '../../API/query/admin';

interface IProps {
  datas: GetOneUser_getUserByID;
}

function OneUser({ datas }: IProps): JSX.Element {
  const [isUpdateRole, setIsUpdateRole] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  // FETCH THE USERBETS LIST
  const {
    loading: loadingUserBets,
    error: errorUserBets,
    data: dataUserBets,
  } = useQuery<GetAllUserBets>(GET_ALL_USERBETS);

  const userBetsUserId = dataUserBets?.getAllUserBets.filter(
    (userBet) => userBet.userId === datas.id
  );

  const backroundColorRole = (role: string): string => {
    if (role === 'ADMIN') {
      return '#3EB5CA';
    }
    if (role === 'SUPERADMIN') {
      return '#E4AC65';
    }
    if (role === 'USER') {
      return '#3DA184';
    }
    return '';
  };

  const [deleteUser, { loading, error }] = useMutation(DELETE_USER, {
    onCompleted: () => {
      toast('L utilisateur a bien été supprimé');
      window.location.reload();
    },
    refetchQueries: [GET_ALL_USERS],
  });

  if (loading || loadingUserBets) {
    return <div>Loading</div>;
  }
  if (error || errorUserBets) {
    toast('Une erreur est survenue.');
  }

  const backroundColorSecondaryCard = isDarkMode ? '#221D2C' : '#DDDFF2';

  const trashIcon = isDarkMode ? trash_white : trash_black;
  const updateIcon = isDarkMode ? update_white : update_black;

  const backgroundColor = isDarkMode ? '#19191C' : '#A1A6D9';
  return (
    <div
      className={`hover:bg-[#6640D0] py-4 mb-4 px-6 rounded-[6px] lg:flex justify-between items-center bg-[${backgroundColor}]`}
    >
      {isUpdateRole && (
        <UpdateRoleUser setIsUpdateRole={setIsUpdateRole} datas={datas} />
      )}
      <div className="flex items-center">
        <div
          className="h-24 lg:h-10 lg:w-10 w-24 rounded-full border-4 lg:border-2 border-purple mr-3 "
          style={{
            backgroundImage: `url(${
              datas.avatar === '' ? dfltAvatar : datas.avatar
            })`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <div>
          <div className="flex">
            <p className={`mr-1 `}>{datas.firstName} </p>
            <p className={`mr-1 `}>{datas.lastName.toUpperCase()}</p>
          </div>
          <p className={`mt-1 `}>{datas.email}</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: backroundColorSecondaryCard }}
        className=" px-8 py-4 rounded-[8px] mt-5 lg:mt-0"
      >
        <div className="flex justify-between items-center">
          <div className="flex mr-11">
            <p>Nombre de paris effectués sur la plateforme:</p>
            <p className="text-primary ml-2">{userBetsUserId?.length}</p>
          </div>
          <button
            type="button"
            onClick={() =>
              deleteUser({
                variables: { deleteUserByIdId: datas.id },
              })
            }
          >
            <img src={trashIcon} alt="supprimer" />
          </button>
        </div>
        <div className="flex items-center mt-2">
          <p className="mr-2">Role: </p>
          <div
            className="rounded-[16px] w-[120px] text-center !text-white  "
            style={{ backgroundColor: backroundColorRole(datas.role) }}
          >
            <div>
              {datas.role.charAt(0).toUpperCase() +
                datas.role.slice(1).toLowerCase()}
            </div>
          </div>
          <button type="button" onClick={() => setIsUpdateRole(!isUpdateRole)}>
            <img className="ml-2" src={updateIcon} alt="modifier" />
          </button>
        </div>
        <div className="flex items-center mt-8">
          <p className="mr-2">Date d&apos;inscription:</p>
          <p className="text-primary">
            {new Date(datas.createdAt).toLocaleDateString('fr')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OneUser;
