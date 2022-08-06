interface IProps {
  label: string;
  placeholder: string;
  required: boolean;
  error: string;
  id: string;
  value: string | undefined;
  setValue: (value: string) => void;
}

function NumberInput({
  label,
  placeholder,
  value,
  setValue,
  required,
  id,
  error,
}: IProps): JSX.Element {
  return (
    <label htmlFor={id} className="flex w-full mt-5 flex-col text-sm">
      {label}
      <input
        id={id}
        required={required}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent mt-1 border border-[#5D6AD2] rounded-md focus:outline-none p-2 border-purple"
      />
      <p className="text-red text-xs">{error}</p>
    </label>
  );
}

export default NumberInput;
