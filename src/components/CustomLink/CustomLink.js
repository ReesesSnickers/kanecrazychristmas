import React from "react";
import PropTypes from "prop-types";

const CustomLink = ({ text, disabled, type, ...props }) => {
  return (
    <a
      className={
        disabled
          ? "kcc-customlink-disabled"
          : type === "secondary"
          ? "kcc-customlink-secondary"
          : "kcc-customlink-primary"
      }
      disabled={disabled}
      href="https://www.w3schools.com"
      {...props}
    >
      {text}
    </a>
  );
};

export default CustomLink;

CustomLink.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"])
};

CustomLink.defaultProps = {
  type: "primary",
  disabled: false,
  text: "link"
};
