import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const JoinSession = ({ onJoin }) => {
  return (
    <section className="kcc-joinsession">
      <p>Thank you for joining. Please enter the session id to continue.</p>
      <TextInput label="Session Id" name="session" />
      <div className="kcc-joinsession-button">
        <Button text="Join" type="secondary" onClick={onJoin} />
      </div>
    </section>
  );
};

export default JoinSession;

JoinSession.propTypes = {};

JoinSession.defaultProps = {};
