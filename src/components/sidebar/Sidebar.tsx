import React, { useContext } from 'react';
import { DashboardContext } from '../../context/dashboardContext';
import LinkButton from './LinkButton';
import { nav } from './Navlinks';
import logoEasybet from '../../assets/logos/logoEasybet.svg';
import faviconEasbet from '../../assets/logos/faviconEasbet.svg';

function Sidebar(): JSX.Element {
  const { isSidebar } = useContext(DashboardContext);
  const witdhSidebar = isSidebar ? 'w-3/12' : '';
  return (
    <div
      className={`${witdhSidebar} z-20 h-screen bg-darkGray px-5 py-8 inset-0 lg:block hidden`}
    >
      {isSidebar ? (
        <img src={logoEasybet} alt="easybet" className="h-7" />
      ) : (
        <img src={faviconEasbet} alt="easybet" className="h-8" />
      )}

      <div className="h-full mt-8 flex lg:justify-between">
        <div>
          <div className="w-full">
            {nav.map((item) => {
              return (
                <div key={item.name}>
                  <LinkButton item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
