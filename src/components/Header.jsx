// import de navlink pour la gestion des liens
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      id="header"
      className="flex justify-between z-20 fixed w-full top-0"
    >
      <div>
        <h1 className=" text-6xl">Pourquoi Bitcoin</h1>
      </div>
      <nav className="flex justify-center ">
        <ul className="flex">
          <li className=" text-6xl">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className=" text-6xl">
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
