import { useMutation } from '@apollo/client';
import { Dispatch, SetStateAction, useContext } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LOGIN_MUTATION } from '../API/mutation/login';
import { AuthContext } from '../context/authContext';
import LoginInput from './formInputs/LoginInput';
import logoEasybet from '../assets/logos/logoEasybet.svg';
import close from '../assets/close.svg';
import { Login, LoginVariables } from '../API/types/Login';

interface IProps {
  setIsLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsSignUpModal: Dispatch<SetStateAction<boolean>>;
}

function LogIn({ setIsLoginModal, setIsSignUpModal }: IProps): JSX.Element {
  const { register, handleSubmit } = useForm();

  const { updateUser } = useContext(AuthContext);

  const router = useNavigate();

  const [loginMutation, { loading, error }] = useMutation<
    Login,
    LoginVariables
  >(LOGIN_MUTATION, {
    onCompleted: (data: Login) => {
      updateUser(data);
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
        <div className="m-auto lg:m-0 block p-8 rounded-lg bg-darkGray shadow-purple ">
          <button
            type="button"
            onClick={() => setIsLoginModal(false)}
            className="w-full flex justify-end	cursor-pointer opacity-80 hover:opacity-50"
          >
            <img src={close} alt="fermer" className="h-3" />
          </button>
          <img
            src={logoEasybet}
            alt="easybet logo"
            className="h-10 m-auto mb-6 mt-2 w-full"
          />
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
              className="rounded-lg w-full mt-5 text-white px-5 py-3"
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
              className="mt-4 w-full font-extralight drop-shadow-md"
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
