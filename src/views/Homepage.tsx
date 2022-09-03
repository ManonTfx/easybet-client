import React, { useContext } from 'react';
import Footer from '../components/Homepage/Footer';

import Header from '../components/Homepage/Header';
import HeroSection from '../components/Homepage/HeroSection';
import StatsEasyBetSection from '../components/Homepage/StatsEasyBetSection';
import WhyEasyBet from '../components/Homepage/WhyEasyBet';
import LogIn from '../components/Login';
import SignUp from '../components/Signup';
import { AuthContext } from '../context/authContext';

function HomePage(): JSX.Element {
  const { isSignUpModal, isLoginModal } = useContext(AuthContext);
  return (
    <div className="!text-white">
      {isSignUpModal && <SignUp />}
      {isLoginModal && <LogIn />}
      <Header />
      <HeroSection />
      <StatsEasyBetSection />
      <WhyEasyBet />
      <Footer />
    </div>
  );
}

export default HomePage;
