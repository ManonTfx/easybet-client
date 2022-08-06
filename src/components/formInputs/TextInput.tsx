interface IProps {
  label: string;
  placeholder: string;
  required: boolean;
  error: string;
  id: string;
  value: string | undefined;
  setValue: (value: string) => void;
}

function TextInput({
  label,
  placeholder,
  id,
  value,
  error,
  setValue,
  required,
}: IProps): JSX.Element {
  return (
    <label htmlFor={id} className="flex w-full mt-5 flex-col text-sm">
      {label}
      <input
        id={id}
        value={value}
        type="text"
        required={required}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent mt-1 border border-[#5D6AD2] rounded-md focus:outline-none p-2"
      />
      <p className="text-red text-xs">{error}</p>
    </label>
  );
}

export default TextInput;
