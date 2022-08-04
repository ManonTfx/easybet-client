/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  required: boolean;
  error: string;
  id: string;
}

function NumberInput({
  label,
  placeholder,
  register,
  name,
  required,
  id,
  error,
}: IProps): JSX.Element {
  return (
    <label htmlFor={id} className="flex w-full mt-5 flex-col text-sm">
      {label}
      <input
        id={id}
        type="number"
        placeholder={placeholder}
        {...register(name, { required })}
        className="bg-transparent mt-1 border border-[#5D6AD2] rounded-md focus:outline-none p-2 border-purple"
      />
      <p className="text-red text-xs">{error}</p>
    </label>
  );
}

export default NumberInput;
