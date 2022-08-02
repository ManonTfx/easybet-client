import { useContext } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div>
      <Link to={item.link}>
        <button
          type="button"
          className="lg:shadow-none lg:py-4 lg:px-0 w-full rounded-lg flex items-center"
        >
          <img className="h-5 w-5" src={item.icon} alt="icon" />
          {isSidebar && <p className="ml-4 text-sm">{item.name}</p>}
        </button>
      </Link>
    </div>
  );
}

export default LinkButton;
