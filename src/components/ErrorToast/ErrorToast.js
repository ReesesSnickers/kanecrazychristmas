import React from "react";
import PropTypes from "prop-types";

const ErrorToast = ({ error }) => {
  return <section className="kcc-errortoast">{error}</section>;
};

export default ErrorToast;

ErrorToast.propTypes = {};

ErrorToast.defaultProps = {};
