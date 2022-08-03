import React, { Dispatch, SetStateAction, useContext } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../API/mutation/signup';
import LoginInput from './formInputs/LoginInput';
import { Signup, SignupVariables } from '../API/types/Signup';
import { AuthContext } from '../context/authContext';
import logoEasybet from '../assets/logos/logoEasybet.svg';
import close from '../assets/close.svg';

interface IProps {
  setIsLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsSignUpModal: Dispatch<SetStateAction<boolean>>;
}

function SignUp({ setIsLoginModal, setIsSignUpModal }: IProps): JSX.Element {
  const { updateUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const [signupMutation, { loading, error }] = useMutation<
    Signup,
    SignupVariables
  >(SIGNUP_MUTATION, {
    onCompleted: () => {
      updateUser(null);
      setIsLoginModal(true);
      setIsSignUpModal(false);
    },
  });

  // eslint-disable-next-line camelcase
  const onSubmit = (data: FieldValues) => {
    if (data.password === data.confirm_password) {
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
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="w-screen bg-black bg-opacity-70 fixed inset-0 z-50 h-full flex items-center justify-center ">
      <div className="m-auto lg:m-0 block py-8 rounded-lg bg-[#19191C] px-14 shadow-purple">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsSignUpModal(false)}
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
            placeholder="firstname"
            register={register}
            name="firstName"
            type="text"
            required
            error=""
            id="firstname"
          />
          <LoginInput
            label=""
            placeholder="lastname"
            register={register}
            name="lastName"
            type="text"
            required
            error=""
            id="lastName"
          />
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
          <LoginInput
            label=""
            placeholder="confirm password"
            register={register}
            name="confirm_password"
            type="password"
            required
            error=""
            id="confirm_password"
          />
          <button
            type="submit"
            className="rounded-lg text-white bg-[#5762C0] hover:bg-[#2C38A6] duration-1000 w-full px-5 mt-5 py-3"
          >
            Signup
          </button>
          <button
            type="button"
            onClick={() => {
              setIsLoginModal(true);
              setIsSignUpModal(false);
            }}
            className="mt-4 text-center w-full font-extralight drop-shadow-md font-extralight"
            style={{ color: '#5762C0' }}
          >
            Already have an account?{' '}
            <span className="font-medium underline"> Login in</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
