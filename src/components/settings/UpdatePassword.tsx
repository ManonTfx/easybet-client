import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DarkModeContext } from '../../context/darkModeContext';
import LoginInput from '../formInputs/LoginInput';

function UpdatePassword(): JSX.Element {
  const { register } = useForm();

  const { colorCards } = useContext(DarkModeContext);
  return (
    <div className={`bg-[${colorCards}] py-4 w-1/2 px-6 my-6`}>
      <h1> Modifier mon mot de passe</h1>
      <form action="update-user" className="mt-4">
        <div className="w-full">
          <LoginInput
            type="password"
            placeholder="Mot de passe actuel"
            label="Mot de passe actuel"
            register={register}
            name="firstname"
            id="firstname"
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
            name="firstname"
            id="firstname"
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
            name="firstname"
            id="firstname"
            error=""
            required={false}
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

export default UpdatePassword;
