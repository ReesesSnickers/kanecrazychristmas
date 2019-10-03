import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ icon, onClick, disabled, type, ...props }) => {
  return (
    <button
      className={
        disabled
          ? "kcc-iconbutton-disabled"
          : type === "secondary"
          ? "kcc-iconbutton-secondary"
          : "kcc-iconbutton-primary"
      }
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onClick}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"])
};

IconButton.defaultProps = {
  type: "primary",
  disabled: false
};
