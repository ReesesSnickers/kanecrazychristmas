import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../Avatar";

const Gift = ({ number, disabled, inPossession, players }) => {
  let filteredPlayerPhoto;
  if (inPossession) {
    const filteredPlayer = players.filter(
      player => player.name === inPossession
    );
    filteredPlayerPhoto =
      filteredPlayer.length > 0 ? filteredPlayer[0].photo : "";
  }
  return (
    <section className={`kcc-gift-wrapper${disabled ? "-disabled" : ""}`}>
      <div className="kcc-gift-icon">
        <FontAwesomeIcon icon="gift" />
      </div>
      <div
        className={`kcc-gift-text kcc-gift-text-${
          number < 10 ? "single" : "double"
        }`}
      >
        {number}
      </div>
      {inPossession && (
        <div className="kcc-gift-avatar">
          <Avatar image={filteredPlayerPhoto} />
        </div>
      )}
    </section>
  );
};

export default Gift;

Gift.propTypes = {};

Gift.defaultProps = {};
