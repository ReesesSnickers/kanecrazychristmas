import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/Button";

const GiftNumber = ({ onContinue, number }) => {
  return (
    <section className="kcc-giftnumber">
      <p>
        Your gift number is below. Please apply your gift number to the gift
        before continuing
      </p>
      <div className="kcc-giftnumber-number">{number}</div>
      <div className="kcc-giftnumber-button">
        <Button text="Continue" type="secondary" onClick={onContinue} />
      </div>
    </section>
  );
};

export default GiftNumber;

GiftNumber.propTypes = {};

GiftNumber.defaultProps = {
  number: 0
};
