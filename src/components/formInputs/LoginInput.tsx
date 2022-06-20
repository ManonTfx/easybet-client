import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  type: 'email' | 'password' | 'text';
  error: string | null;
  id: string;
  required: boolean;
}

function LoginInput({
  placeholder,
  label,
  register,
  name,
  type,
  required,
  id,
  error,
}: IProps): JSX.Element {
  return (
    <label htmlFor={id} className="flex w-full flex-col text-sm">
      {label}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(name, { required })}
        className="p-4 bg-white text-lightPurple  rounded-md focus:outline-none peer h-10"
      />
      <p className="text-red text-xs">{error}</p>
      {required && (
        <p className="invisible peer-invalid:visible text-xs text-purple mt-1">
          Fieds required
        </p>
      )}
    </label>
  );
}

export default LoginInput;
