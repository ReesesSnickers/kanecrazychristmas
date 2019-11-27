import React from "react";
import PropTypes from "prop-types";
import Gift from "../Gift";

const GiftWrapper = ({ session }) => {
  return (
    <section className="kcc-giftwrapper-wrapper">
      {session.gifts.map(gift => {
        return (
          <Gift
            number={gift.key}
            inPossession={gift.inPossession}
            players={session.players}
          />
        );
      })}
    </section>
  );
};

export default GiftWrapper;

GiftWrapper.propTypes = {};

GiftWrapper.defaultProps = {};
