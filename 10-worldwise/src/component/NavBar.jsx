import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="*">Page not Found</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
