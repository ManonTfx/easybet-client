import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

interface IProps {
  children: React.ReactNode;
}

function Modal({ children }: IProps): JSX.Element {
  const { colorCards } = useContext(DarkModeContext);
  return (
    <div className="w-screen fixed inset-0 z-50 h-full flex items-center justify-center bg-black bg-opacity-10">
      <div
        className={` bg-[${colorCards}] h-32 rounded-md shadow-2xl lg:w-5/12`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
