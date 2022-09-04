import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { UPDATE_USER_PASSWORD } from '../../API/mutation/settings';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';
import LoginInput from '../formInputs/LoginInput';

function UpdatePassword(): JSX.Element {
  const { register, handleSubmit } = useForm();

  const { user } = useContext(AuthContext);
  const { colorCards } = useContext(DarkModeContext);

  // UPDATE USER PASSWORD
  const [update, { loading, error }] = useMutation(UPDATE_USER_PASSWORD, {
    onCompleted: () => {
      toast('Votre mot de passe à été mis à jour.');
    },
  });

  const onSubmit = (d: FieldValues) => {
    console.log(d);
    if (d.password === d.passwordConfirm) {
      update({
        variables: {
          updateUserPasswordId: user?.login.id,
          lastPassword: d.lastPassword,
          password: d.password,
        },
      });
    } else {
      toast('Les mots de passe ne correspondent pas.');
    }
  };

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    toast('Une erreur est survenue.');
  }
  return (
    <div className={`bg-[${colorCards}] py-4 lg:w-1/2 px-6 my-6`}>
      <h1> Modifier mon mot de passe</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="update-user"
        className="mt-4"
      >
        <div className="w-full">
          <LoginInput
            type="password"
            placeholder="Mot de passe actuel"
            label="Mot de passe actuel"
            register={register}
            name="lastPassword"
            id="lastPassword"
            error=""
            required={false}
          />
        </div>
        <div className="w-full mt-4">
          <LoginInput
            type="password"
            placeholder="Nouveau mot de passe"
            label="Nouveau mot de passe"
            register={register}
            name="password"
            id="password"
            error=""
            required={false}
          />
        </div>
        <div className="w-full mt-4">
          <LoginInput
            type="password"
            placeholder="Confirmation mot de passe"
            label="Confirmation mot de passe"
            register={register}
            name="passwordConfirm"
            id="passwordConfirm"
            error=""
            required={false}
          />
        </div>
        <button
          className="w-auto px-3 py-2 bg-[#6640d1] rounded-lg mt-6 text-lg"
          type="submit"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default UpdatePassword;
