import React from "react";
import PropTypes from "prop-types";

// onerror="this.src='/images/image.png'"
const TextInput = ({ name, label, ...props }) => {
  return (
    <section className="kcc-textinput-wrapper">
      <label className="kcc-textinput-label" for={name}>
        {label}
      </label>
      <input className="kcc-textinput-input" type="text" name={name} />
    </section>
  );
};

export default TextInput;

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
};

TextInput.defaultProps = { name: "textinput", label: "label" };
