import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  

  const closeMenu = () => {
    setShowSidebar(false);
  }

  return (
    <>
    {showSidebar ? (
      <button
        className="flex text-7xl text-black items-center cursor-pointer fixed left-12 top-4 z-50 transition duration-1000"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        x
      </button>
    ) : (
      <svg
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
        fill="#000000"
        viewBox="0 0 100 80"
        width="60"
        height="60"
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </svg>
    )}
    <p
     className='fixed text-7xl z-30 flex items-center cursor-pointer right-10 top-6 tracking-[-6px]	'>
      <Link to="/">
      PB
      </Link>
    </p>
    <div
      className={`top-0 left-0 w-[20vw] bg-white  p-10 pr-20 text-white fixed h-full z-40  ease-in-out duration-500 bg-opacity-75 ${
        showSidebar ? "-translate-x-0 " : "-translate-x-full"
      }`}
    >
          <ul className='w-full mt-20' >
          <li className="text-black text-xl mb-20">
                  <Link to="/" onClick={closeMenu}>
                    <span>Accueil</span>
                  </Link>
          </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="text-black text-xl">
                  <Link to={item.path} onClick={closeMenu}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          </div>
    </>
  );
}

export default Navbar;