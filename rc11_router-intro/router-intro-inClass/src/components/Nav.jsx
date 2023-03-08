import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

// The Link component is used to trigger new routes. You import it
// from react-router-dom, and you can add the Link components to
// point at different routes, with the to attribute:

export default Nav;
