import { useMutation } from '@apollo/client';
import { Dispatch, SetStateAction } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LOGIN_MUTATION } from '../API/mutation/login';
import { Login, LoginVariables } from '../API/types/Login';
import { useUserFromStore } from '../store/user.slice';
import LoginInput from './formInputs/LoginInput';

interface IProps {
  setIsLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsSignUpModal: Dispatch<SetStateAction<boolean>>;
}

function LogIn({ setIsLoginModal, setIsSignUpModal }: IProps): JSX.Element {
  const { register, handleSubmit } = useForm();
  const router = useNavigate();

  const { dispatchLogin } = useUserFromStore();
  const [loginMutation, { loading, error }] = useMutation<
    Login,
    LoginVariables
  >(LOGIN_MUTATION, {
    onCompleted: (data: Login) => {
      dispatchLogin(data.login);
      router('/feed', { replace: true });
      setIsLoginModal(false);
    },
  });

  const onSubmit = (data: FieldValues) => {
    loginMutation({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  };

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <div className="w-screen fixed inset-0 z-50 h-full bg-opacity-50 flex items-center justify-center ">
      <div className="justify-center mx-8">
        <div className="m-auto lg:m-0 block p-8 rounded-lg bg-darkGray shadow-purple border border-gray-600">
          <form onSubmit={handleSubmit(onSubmit)}>
            <LoginInput
              label=""
              placeholder="user@email.com"
              register={register}
              name="email"
              type="email"
              required
              error=""
              id="email"
            />
            <LoginInput
              label=""
              placeholder="password"
              register={register}
              name="password"
              type="password"
              required
              error=""
              id="password"
            />
            <button
              type="submit"
              className="rounded-lg w-full mt-5 text-slate-800 px-5 py-3"
              style={{
                background:
                  'linear-gradient(181.76deg, rgba(255, 255, 255, 0.4) -72.83%, #8560EE 98.51%)',
              }}
            >
              Connexion
            </button>
            <button
              type="submit"
              onClick={() => {
                setIsLoginModal(false);
                setIsSignUpModal(true);
              }}
              className="mt-4 ml-16  text-justify font-extralight drop-shadow-md"
              style={{ color: ' #8560EE' }}
            >
              Pas encore inscrit? Inscrit toi!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
