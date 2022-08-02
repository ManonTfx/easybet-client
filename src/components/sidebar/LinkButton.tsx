import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { DashboardContext } from '../../context/dashboardContext';

interface IProps {
  item: {
    icon: string;
    name: string;
    link: string;
  };
}

function LinkButton({ item }: IProps): JSX.Element {
  const { isSidebar } = useContext(DashboardContext);
  const { colorText } = useContext(DarkModeContext);

  const displayIsSidebar = isSidebar ? 'visible' : 'hidden';

  return (
    <div>
      <Link to={item.link}>
        <button
          type="button"
          className="lg:shadow-none lg:py-4 lg:px-0 w-full rounded-lg flex items-center"
        >
          <img className="h-5 w-5" src={item.icon} alt="icon" />

          <p
            className={`${colorText} ${displayIsSidebar} ml-4 text-sm w-[170px] text-left`}
          >
            {item.name}
          </p>
        </button>
      </Link>
    </div>
  );
}

export default LinkButton;
