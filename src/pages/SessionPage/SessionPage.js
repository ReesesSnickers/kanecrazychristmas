import React from "react";
import PropTypes from "prop-types";

import GiftWrapper from "../../components/GiftWrapper";

const SessionPage = ({ session, currentUser }) => {
  return (
    <section className="kcc-sessionpage-wrapper">
      <GiftWrapper session={session} />
    </section>
  );
};

export default SessionPage;

SessionPage.propTypes = {};

SessionPage.defaultProps = {};
