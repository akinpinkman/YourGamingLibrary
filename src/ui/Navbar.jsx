import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <li>
        <NavLink to="/homepage">Home</NavLink>
      </li>
      <li>
        <NavLink to="/playlater">Play Later</NavLink>
      </li>
      <li>
        <NavLink to="/gamelibrary">Game Library</NavLink>
      </li>
    </nav>
  );
}
