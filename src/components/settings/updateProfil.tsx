import { useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import TextInput from '../formInputs/TextInput';
import { UPDATE_USER_PROFIL } from '../../API/mutation/settings';

function UpdateProfil(): JSX.Element {
  const { handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [firstname, setFirstname] = useState<string | undefined>(
    user?.login.firstName
  );
  const [lastName, setLastName] = useState<string | undefined>(
    user?.login.lastName
  );
  const [email, setEmail] = useState<string | undefined>(user?.login.email);
  const { colorCards } = useContext(DarkModeContext);

  // UPDATE USER PROFIL
  const [update, { loading, error }] = useMutation(UPDATE_USER_PROFIL, {
    onCompleted: () => {
      toast('Vos informations personnelles ont bien étés mises à jour.');
    },
  });

  const onSubmit = () => {
    update({
      variables: {
        firstName: firstname,
        lastName,
        email,
        updateUserId: user?.login.id,
      },
    });
  };

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    toast('Une erreur est survenue.');
  }
  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-[${colorCards}] py-4 w-full px-6 my-2`}
    >
      <h1> Modifier mes données personnelles</h1>
      <form action="update-user w-full">
        <div className="flex w-full">
          <div className="w-1/2">
            <TextInput
              label="Prénom"
              placeholder="Prénom"
              id="firstname"
              value={firstname}
              setValue={setFirstname}
              required={false}
              error=""
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextInput
              label="Prénom"
              placeholder="Prénom"
              id="firstname"
              value={lastName}
              setValue={setLastName}
              required={false}
              error=""
            />
          </div>
        </div>
        <div className="w-full">
          <TextInput
            label="Adresse email"
            placeholder="Adresse email"
            id="mail"
            value={email}
            setValue={setEmail}
            required={false}
            error=""
          />
        </div>
        <button
          className="w-auto px-3 py-2 bg-[#5D6AD2] rounded-lg mt-6 text-lg"
          type="submit"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default UpdateProfil;
