import { useContext, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../API/mutation/signup';
import LoginInput from './formInputs/LoginInput';
import { Signup, SignupVariables } from '../API/types/Signup';
import logoEasybet from '../assets/logos/logoEasybet.svg';
import close from '../assets/close.svg';
import { AuthContext } from '../context/authContext';
import LoaderBar from './loader/LoaderBar';

function SignUp(): JSX.Element {
  const [errorMessageSignup, setErrorMessageSignup] = useState('');
  const { register, handleSubmit } = useForm();
  const { updateIsLoginModal, updateIsSignUpModal } = useContext(AuthContext);
  const [signupMutation, { loading, error }] = useMutation<
    Signup,
    SignupVariables
  >(SIGNUP_MUTATION, {
    onCompleted: () => {
      updateIsLoginModal(true);
      updateIsSignUpModal(false);
    },
  });

  let errorMessage = '';
  let loader = <div />;

  // eslint-disable-next-line camelcase
  const onSubmit = (data: FieldValues) => {
    if (data.password !== data.confirm_password) {
      setErrorMessageSignup('Les mots de passe ne sont pas identiques');
    }
    if (
      !data.password.match(/[0-9]/g || !data.passeword.match(/[A-Z]/g)) ||
      !data.password.match(/[a-z]/g)
    ) {
      setErrorMessageSignup(
        'Le mot de passe doit contenir au moins 1 chiffre et 1 majuscule'
      );
    }
    if (
      data.password === data.confirm_password &&
      data.password.match(/[0-9]/g || data.passeword.match(/[A-Z]/g)) &&
      data.password.match(/[a-z]/g)
    ) {
      signupMutation({
        variables: {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
        },
      });
    }
  };

  if (loading) {
    loader = <LoaderBar />;
  }
  if (error) {
    errorMessage = 'Une erreur est survenue veillez réessayer';
  }

  return (
    <div className="w-screen bg-black bg-opacity-70 fixed inset-0 z-50 h-full flex items-center justify-center ">
      <div className="m-auto lg:m-0 block py-8 rounded-lg bg-[#19191C] px-14 shadow-purple">
        <div className="relative">
          <button
            type="button"
            onClick={() => updateIsSignUpModal(false)}
            className="w-full flex justify-end absolute left-10 bottom-1	cursor-pointer opacity-80 hover:opacity-50"
          >
            <img src={close} alt="fermer" className="h-3" />
          </button>
        </div>
        <img
          src={logoEasybet}
          alt="easybet logo"
          className="h-10 m-auto mb-11 pr-4 mt-2 w-full"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginInput
            label=""
            placeholder="Prénom"
            register={register}
            name="firstName"
            type="text"
            required
            error=""
            id="firstname"
          />
          <LoginInput
            label=""
            placeholder="Nom"
            register={register}
            name="lastName"
            type="text"
            required
            error=""
            id="lastName"
          />
          <LoginInput
            label=""
            placeholder="Adresse email"
            register={register}
            name="email"
            type="email"
            required
            error=""
            id="email"
          />
          <LoginInput
            label=""
            placeholder="Mot de passe"
            register={register}
            name="password"
            type="password"
            required
            error=""
            id="password"
          />
          <LoginInput
            label=""
            placeholder="Confirmation du mot de passe"
            register={register}
            name="confirm_password"
            type="password"
            required
            error=""
            id="confirm_password"
          />

          <p className="text-sm text-red-400 mt-1">{errorMessageSignup}</p>
          <p className="text-sm text-red-400 mt-1">{errorMessage}</p>
          {loader}
          <button
            type="submit"
            className="rounded-lg text-white bg-[#5762C0] hover:bg-[#2C38A6] duration-1000 w-full px-5 mt-5 py-3"
          >
            S&apos;inscrire
          </button>
          <button
            type="button"
            onClick={() => {
              updateIsLoginModal(true);
              updateIsSignUpModal(false);
            }}
            className="mt-4 text-center w-full font-extralight drop-shadow-md font-extralight"
            style={{ color: '#5762C0' }}
          >
            Tu a déjà un compte ?
            <span className="font-medium underline"> Connecte toi ici </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
