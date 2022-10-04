/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import Dropzone from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/authContext';
import dfltAvatar from '../../assets/dfltAvatar.svg';
import { UPDATE_USER_AVATAR } from '../../API/mutation/settings';

function UpdateAvatar(): JSX.Element {
  const { user, updateUser } = useContext(AuthContext);

  // UPDATE USER PROFIL
  const [update, { loading, error }] = useMutation(UPDATE_USER_AVATAR, {
    onCompleted: () => {
      toast('Votre photo de profil a bien été mise à jour.');
    },
  });

  const uploadImage = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'bx4sdw4m');

    fetch('https://api.cloudinary.com/v1_1/dk2hhjwva/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then(async (res) => {
        const response = await res.json();
        updateUser({
          login: {
            firstName: user?.login.firstName,
            lastName: user?.login.lastName,
            email: user?.login.email,
            avatar: response.url,
            id: user?.login.id,
            token: user?.login.token,
            role: user?.login.role,
            __typename: 'IUserWithToken',
          },
        });
        update({
          variables: {
            updateUserAvatarId: user?.login.id,
            avatar: response.url,
          },
        });
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    updateUser({
      login: {
        firstName: user?.login.firstName,
        lastName: user?.login.lastName,
        email: user?.login.email,
        avatar: user?.login.avatar,
        id: user?.login.id,
        token: user?.login.token,
        role: user?.login.role,
        __typename: 'IUserWithToken',
      },
    });
    toast('Une erreur est survenue.');
  }

  return (
    <div className="mt-4 w-full text-center">
      <div
        className="h-24 lg:h-[160px] lg:w-[160px] w-24 rounded-full border-4 lg:border-2 border-purple mx-auto"
        style={{
          backgroundImage: `url(${
            user.login.avatar === '' ? dfltAvatar : user.login.avatar
          })`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Dropzone
        onDrop={(acceptedFiles) => {
          uploadImage(acceptedFiles[0]);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <button
              onClick={() => console.log('Avatar updated')}
              className="px-3 py-2 bg-[#6640d1] rounded-lg text-lg mt-3 !text-white"
              type="button"
            >
              {user.login.avatar === ''
                ? 'Ajouter une photo'
                : 'Modifier la photo'}
            </button>
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default UpdateAvatar;
