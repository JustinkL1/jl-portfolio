import { NavLink, useLocation } from "react-router-dom";
import "./index.css";

function Navbar() {
  const ParentNavLink = ({ to, children, ...props }) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to);
    return (
      <NavLink
        className={isActive ? "link-style active-link" : "link-style"}
        to={to}
        {...props}
      >
        {children({ isActive })}
      </NavLink>
    );
  };
  return (
    <div className="navbar-container">
      <div className="links">
        <NavLink className="link-style" to="/">
          {({ isActive }) => (
            <span className={isActive ? "active-link" : ""}>Home</span>
          )}
        </NavLink>
        <NavLink className="link-style" to="/about-me">
          {({ isActive }) => (
            <span className={isActive ? "active-link" : ""}>About</span>
          )}
        </NavLink>
        <ParentNavLink to="/projects">
          {({ isActive }) => (
            <span className={isActive ? "active-link" : ""}>Projects</span>
          )}
        </ParentNavLink>
      </div>
    </div>
  );
}

export default Navbar;
