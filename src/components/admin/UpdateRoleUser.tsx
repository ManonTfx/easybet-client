import { useContext, useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import Modal from '../modal/Modal';
import { DarkModeContext } from '../../context/darkModeContext';
import closeDark from '../../assets/closeDark.svg';
import closeWhite from '../../assets/closeWhite.svg';
import { GetOneUser_getUserByID } from '../../API/types/GetOneUser';
import { UPDATE_USER_ROLE } from '../../API/mutation/settings';

interface IProps {
  setIsUpdateRole: React.Dispatch<React.SetStateAction<boolean>>;
  datas: GetOneUser_getUserByID;
}

function UpdateRoleUser({ setIsUpdateRole, datas }: IProps): JSX.Element {
  const [roleSelected, setRoleSelected] = useState('');
  const { isDarkMode } = useContext(DarkModeContext);

  const rolesArray = ['ADMIN', 'SUPERADMIN', 'USER'];
  const closeIcon = isDarkMode ? closeWhite : closeDark;
  const background = isDarkMode ? '#19191C' : 'white';

  // UPDATE USER PROFIL
  const [update, { loading, error }] = useMutation(UPDATE_USER_ROLE, {
    onCompleted: () => {
      toast("Le role de l'utilisateur a bien été modifié");
      setIsUpdateRole(false);
      window.location.reload();
    },
  });

  const onSubmit = () => {
    update({
      variables: {
        updateUserRoleId: datas.id,
        role: roleSelected,
      },
    });
  };

  useEffect(() => {
    if (roleSelected !== '') {
      onSubmit();
    }
  }, [roleSelected]);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    toast('Une erreur est survenue.');
  }
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
  return (
    <Modal>
      <div
        style={{ backgroundColor: background }}
        className="relative text-center"
      >
        <button type="button" onClick={() => setIsUpdateRole(false)}>
          <img className="absolute right-4 top-4" src={closeIcon} alt="" />
        </button>
        <p className="text-lg">
          Choisir le role à attribuer à {datas.firstName}:
        </p>
        <div className="mt-11 pb-11">
          {rolesArray.map((role) => {
            return (
              <button
                type="button"
                onClick={() => setRoleSelected(role)}
                className="rounded-sm mb-2 w-full !text-white hover:opacity-95"
                style={{ backgroundColor: backroundColorRole(role) }}
                key={v4()}
              >
                {role}
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}

export default UpdateRoleUser;
