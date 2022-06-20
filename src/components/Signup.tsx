import React, { Dispatch, SetStateAction } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useUserFromStore } from '../store/user.slice';
import { SIGNUP_MUTATION } from '../API/mutation/signup';
import LoginInput from './formInputs/LoginInput';
import { Signup, SignupVariables } from '../API/types/Signup';

interface IProps {
  setIsLoginModal: Dispatch<SetStateAction<boolean>>;
  setIsSignUpModal: Dispatch<SetStateAction<boolean>>;
}

function SignUp({ setIsLoginModal, setIsSignUpModal }: IProps): JSX.Element {
  const { register, handleSubmit } = useForm();
  const { dispatchLogin } = useUserFromStore();
  const [signupMutation, { loading, error }] = useMutation<
    Signup,
    SignupVariables
  >(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      dispatchLogin(data.signup);
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
    <div className="w-screen fixed inset-0 z-50 h-full bg-opacity-50 flex items-center justify-center ">
      <div className="m-auto lg:m-0 block p-8 rounded-lg bg-darkGray w-96 shadow-purple border border-gray-600">
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
            className="rounded-lg w-full text-slate-800 px-5 mt-5 py-3"
            style={{
              background:
                'linear-gradient(181.76deg, rgba(255, 255, 255, 0.4) -72.83%, #8560EE 98.51%)',
            }}
          >
            Signup
          </button>
          <button
            type="button"
            onClick={() => {
              setIsLoginModal(true);
              setIsSignUpModal(false);
            }}
            className="mt-4 ml-6 text-center font-extralight drop-shadow-md"
            style={{ color: ' #8560EE' }}
          >
            Already have an account? Login in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
