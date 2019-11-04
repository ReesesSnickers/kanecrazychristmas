import React from "react";
import PropTypes from "prop-types";

import Logo from "../../assets/icons/kanecrazychristmas.png";

const LoginPage = ({ ...props }) => {
  return (
    <section className="kcc-loginpage-wrapper">
      <img className="kcc-loginpage-logo" src={Logo} />
    </section>
  );
};

export default LoginPage;

LoginPage.propTypes = {};

LoginPage.defaultProps = {};
