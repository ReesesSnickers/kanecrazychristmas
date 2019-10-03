import React from "react";
import PropTypes from "prop-types";

import Logo from "../../assets/icons/kanecrazychristmas.png";

import Header from "../../components/Header";
import Button from "../../components/Button";
// onerror="this.src='/images/image.png'"
const profile = {
  name: "Bobbylee Ingalls"
};
const MainPage = ({ ...props }) => {
  return (
    <section className="kcc-mainpage-wrapper">
      <Header name={profile.name} />
      <img className="kcc-mainpage-logo" src={Logo} />
      <section className="kcc-mainpage-session-buttons">
        <Button text="Create Session" onClick={() => console.log("create")} />
        <Button text="Join Session" onClick={() => console.log("join")} />
      </section>
    </section>
  );
};

export default MainPage;

MainPage.propTypes = {};

MainPage.defaultProps = {};
