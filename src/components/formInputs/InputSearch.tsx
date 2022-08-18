import { useContext } from 'react';
import search from '../../assets/search.svg';
import { DarkModeContext } from '../../context/darkModeContext';
import closePurple from '../../assets/closePurple.svg';

interface IProps {
  placeholder: string;
  value: string | undefined;
  setValue: (value: string) => void;
  submitValue: () => void;
}

function InputSearch({
  placeholder,
  value,
  setValue,
  submitValue,
}: IProps): JSX.Element {
  const { isDarkMode } = useContext(DarkModeContext);
  const searchWithKey = (e: any) => {
    if (e.key === 'Enter') {
      submitValue();
    }
  };
  return (
    <div className="flex justify-between overflow-hidden rounded-md mb-6 w-full mt-5 text-sm items-center border border-[#5D6AD2]">
      <input
        value={value}
        onKeyUp={(e) => searchWithKey(e)}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent   w-10/12 focus:outline-none p-2"
      />
      <div className="flex items-center">
        {value !== '' && (
          <button
            type="button"
            onClick={() => setValue('')}
            className={` p-3 `}
          >
            <img className="h-4 mr-2" src={closePurple} alt="rechercher" />
          </button>
        )}
        <button
          type="button"
          onClick={() => submitValue()}
          className={` p-3 ${isDarkMode ? 'bg-[#221C2D]' : 'bg-[#dcdff1]'}`}
        >
          <img className="h-5" src={search} alt="rechercher" />
        </button>
      </div>
    </div>
  );
}

export default InputSearch;
