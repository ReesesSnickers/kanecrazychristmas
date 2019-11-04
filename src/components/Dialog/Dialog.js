import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconButton from "../IconButton";

const Dialog = ({ overlayOnclick, children }) => {
  return (
    <>
      <section className="kcc-dialog-overlay" onClick={overlayOnclick} />
      <section className="kcc-dialog">
        <div className="kcc-dialog-close">
          <IconButton
            onClick={overlayOnclick}
            type="secondary"
            icon={<FontAwesomeIcon icon="times" />}
          />
        </div>
        {children}
      </section>
    </>
  );
};

export default Dialog;

Dialog.propTypes = {};

Dialog.defaultProps = {};
