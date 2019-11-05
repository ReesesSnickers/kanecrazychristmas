import React from "react";
import PropTypes from "prop-types";

const Rules = () => {
  return (
    <section className="kcc-rules">
      <p>The game is simple, steal or be stolen from.</p>

      <p>
        When you see your name and photo appear on the screen it is your turn.
        During your turn you may:
      </p>
      <p>
        {" "}
        Choose a unclaimed gift or steal a claimed gift. A gift can only be
        chosen 2 times before the gift is eliminated out of the selection. The
        individual who stole that gift for the second time will also be
        eliminated from the game. Game continues until all gifts have been
        claimed and eliminated.
      </p>

      <p>Good Luck!</p>
    </section>
  );
};

export default Rules;

Rules.propTypes = {};

Rules.defaultProps = {};
