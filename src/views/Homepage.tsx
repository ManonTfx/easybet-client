import { useState } from 'react';
import Header from '../components/Homepage/Header';
import HeroSection from '../components/Homepage/HeroSection';
import LogIn from '../components/Login';
import SignUp from '../components/Signup';

function HomePage(): JSX.Element {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false);

  return (
    <div className="!text-white">
      {isSignUpModal && (
        <SignUp
          setIsLoginModal={setIsLoginModal}
          setIsSignUpModal={setIsSignUpModal}
        />
      )}
      {isLoginModal && (
        <LogIn
          setIsSignUpModal={setIsSignUpModal}
          setIsLoginModal={setIsLoginModal}
        />
      )}
      <Header
        setIsLoginModal={setIsLoginModal}
        setIsSignUpModal={setIsSignUpModal}
      />
      <div>
        <HeroSection />
      </div>
    </div>
  );
}

export default HomePage;
