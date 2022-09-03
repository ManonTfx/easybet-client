import { Link } from 'react-router-dom';
import logoEasyBet from '../../assets/logos/logoEasybet.svg';

function Footer(): JSX.Element {
  return (
    <div className="w-full p-[20px] bg-[#0B1216]">
      <div className="lg:flex justify-between items-center">
        <img className="h-5 lg:mb-0 mb-5" src={logoEasyBet} alt="logo" />
        <div className="font-light opacity-70 flex">
          <p className="mr-5">contact@easybet.com</p>
          <Link to="/mentions-legales">
            <p>Mentions légales</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
