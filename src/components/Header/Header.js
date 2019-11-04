import React from "react";
import PropTypes from "prop-types";

import Avatar from "../Avatar";

// onerror="this.src='/images/image.png'"
const Header = ({ name, setMainMenu }) => {
  return (
    <section className="kcc-header-wrapper">
      <h1>Welcome, {name}</h1>
      <Avatar onClick={setMainMenu} />
    </section>
  );
};

export default Header;

Header.propTypes = {};

Header.defaultProps = {};
