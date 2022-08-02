import search from '../../assets/search.svg';

interface IProps {
  placeholder: string;
}

function SearchInput({ placeholder }: IProps): JSX.Element {
  return (
    <div className="p-4 py-2 bg-transparent flex justify-between w-3/4 items-center  rounded-[5px] border border-[#5762C0] focus:outline-none peer ">
      <input
        id="toto"
        type="text"
        placeholder={placeholder}
        className=" w-10/12 bg-transparent rounded-[5px] focus:outline-none peer"
      />
      <img className="h-5 opacity-80" src={search} alt="recherche" />
    </div>
  );
}

export default SearchInput;
