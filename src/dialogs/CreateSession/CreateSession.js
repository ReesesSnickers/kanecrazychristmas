import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/Button";

const CreateSession = ({ onCreate }) => {
  return (
    <section className="kcc-createsession">
      <div className="kcc-createsession-button">
        <Button text="Create" type="secondary" onClick={onCreate} />
      </div>
    </section>
  );
};

export default CreateSession;

CreateSession.propTypes = {};

CreateSession.defaultProps = {};
