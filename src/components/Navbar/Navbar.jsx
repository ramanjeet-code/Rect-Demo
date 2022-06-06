import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
///const Link = <a />;

const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div data-cy="navbar" style={{ display: "flex", gap: "100px" }}>
      <Link data-cy="navbar-home-link" to="/login" style={{ flex: 1 }}>
        logo
      </Link>
      <span data-cy="navbar-cart-items-count">Cart{0}</span>
      <button data-cy="navbar-login-logout-button">
        {" "}
        {isAuth ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Navbar;
