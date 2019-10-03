import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, disabled, type, ...props }) => {
  return (
    <button
      className={
        disabled
          ? "kcc-button-disabled"
          : type === "secondary"
          ? "kcc-button-secondary"
          : "kcc-button-primary"
      }
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"])
};

Button.defaultProps = {
  type: "primary",
  disabled: false,
  text: "button"
};
