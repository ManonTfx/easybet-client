import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

interface IProps {
  children: React.ReactNode;
}

function Modal({ children }: IProps): JSX.Element {
  const { colorCards } = useContext(DarkModeContext);
  return (
    <div className="w-screen fixed inset-0 z-50 h-full flex items-center justify-center bg-black bg-opacity-20">
      <div className={` bg-[${colorCards}] rounded-md shadow-2xl lg:w-6/12`}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
