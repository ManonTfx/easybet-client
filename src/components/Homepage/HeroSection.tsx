import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function HeroSection(): JSX.Element {
  const { updateIsSignUpModal, user } = useContext(AuthContext);
  return (
    <div className="hero-section h-screen relative">
      <div className="lg:pt-[30vh] pt-[20vh] lg:pl-[15vw] pl-[20px]">
        <h1 className="lg:text-[70px] text-[50px] font-bold lg:pb-0 pb-8">
          Pari Comme un pro
        </h1>
        <p className="mb-3 lg:text-[30px]">
          Respecte nos 2 piliers fondateurs: Contrôle tes émotions et Track tous
          tes résultats
        </p>
        {user.login.token === '' ? (
          <button
            onClick={() => updateIsSignUpModal(true)}
            type="button"
            className="bg-primary px-4 py-3 rounded-lg lg:mt-4 mt-16"
          >
            Rejoins Nous
          </button>
        ) : (
          <Link to="/feed">
            <button
              onClick={() => updateIsSignUpModal(true)}
              type="button"
              className="bg-primary px-4 py-3 rounded-lg lg:mt-4 mt-16"
            >
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
