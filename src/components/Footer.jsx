// import de navlink pour la gestion des liens
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer
      className="flex h-32 text-white bg-black justify-between items-center fixed bottom-0 left-0 right-0"
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
    </footer>
    </>
  );
};

export default Footer;
