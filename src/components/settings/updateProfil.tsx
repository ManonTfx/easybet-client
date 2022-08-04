import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DarkModeContext } from '../../context/darkModeContext';
import TextInput from '../formInputs/TextInput';

function UpdateProfil(): JSX.Element {
  const { register } = useForm();

  const { colorCards } = useContext(DarkModeContext);
  return (
    <div className={`bg-[${colorCards}] py-4 w-full px-6 my-2`}>
      <h1> Modifier mes données personnelles</h1>
      <form action="update-user w-full">
        <div className="flex w-full">
          <div className="w-1/2">
            <TextInput
              placeholder="Prénom"
              label="Prénom"
              register={register}
              name="firstname"
              id="firstname"
              error=""
              required={false}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextInput
              placeholder="Nom"
              label="Nom"
              register={register}
              name="lastname"
              id="lastname"
              required={false}
              error=""
            />
          </div>
        </div>
        <div className="w-full">
          <TextInput
            placeholder="Adresse mail"
            label="Adresse mail"
            register={register}
            name="lastname"
            id="lastname"
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
