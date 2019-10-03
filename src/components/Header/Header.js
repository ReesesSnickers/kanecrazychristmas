import React from "react";
import PropTypes from "prop-types";

import Avatar from "../Avatar";

// onerror="this.src='/images/image.png'"
const Header = ({ name, ...props }) => {
  return (
    <section className="kcc-header-wrapper">
      <h1>Welcome, {name}</h1>
      <Avatar onClick={() => console.log("header avatar")} />
    </section>
  );
};

export default Header;

Header.propTypes = {};

Header.defaultProps = {};
