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
      localStorage.setItem('token', data.login.token);
      updateUser(data);
      router('/feed', { replace: true });
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
    return <p>laoding</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <div className="w-screen fixed inset-0 z-50 h-full bg-black bg-opacity-70 flex items-center justify-center ">
      <div className="justify-center ">
        <div className="m-auto lg:m-0 block py-8 px-16 rounded-lg bg-[#19191C] shadow-purple ">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLoginModal(false)}
              className="w-full flex justify-end absolute left-12 bottom-1	cursor-pointer opacity-80 hover:opacity-50"
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
              className="rounded-lg w-full duration-1000 mt-5 text-white px-5 py-3 bg-[#5762C0] hover:bg-[#2C38A6]"
            >
              Connexion
            </button>
            <button
              type="submit"
              onClick={() => {
                setIsLoginModal(false);
                setIsSignUpModal(true);
              }}
              className="mt-4 w-full font-extralight drop-shadow-md text-sm"
              style={{ color: ' #5762C0' }}
            >
              Pas encore inscrit?{' '}
              <span className="font-medium underline">Inscrit toi!</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
