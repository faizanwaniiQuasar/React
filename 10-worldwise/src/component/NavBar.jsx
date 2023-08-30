import { NavLink } from "react-router-dom";

function NavBar() {
  return (
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
  );
}
export default NavBar;
