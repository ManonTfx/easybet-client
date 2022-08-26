import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

function Toolbox(): JSX.Element {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div
      style={{ backgroundColor: isDarkMode ? '#19191C' : '#DCDFF1' }}
      className="w-3/12 mx-5 rounded-[5px] px-3 mt-5  lg:block hidden"
    >
      <p className="p-3 text-lg">Aide</p>
      <div className="border border-primary" />
      <p className="p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        deserunt consectetur expedita hic excepturi iusto totam illum assumenda
        fugiat maiores consequatur cupiditate voluptas voluptatibus magnam neque
        natus ad optio praesentium. Modi suscipit, error enim temporibus autem
        veniam hic veritatis quas, provident unde odit, cupiditate illo. Nihil
        tenetur cumque unde laboriosam voluptatem ex facere, explicabo itaque,
        autem nam nulla eligendi sit? Vero aperiam illo cumque vel harum
        recusandae ea quisquam quasi fugiat similique exercitationem, inventore
        delectus excepturi ipsam.
      </p>
      <div className="border border-primary" />
      <p className="p-3 text-center">Besoin de plus d&quot;aides ?</p>
      <Link to="/articles">
        <div className="text-center pb-3">
          <button className="bg-primary rounded-[5px] p-3 " type="button">
            TUTOS
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Toolbox;
