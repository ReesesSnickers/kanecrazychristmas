import React, { useState } from "react";
import PropTypes from "prop-types";

import Logo from "../../assets/icons/kanecrazychristmas.png";

import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import CustomLink from "../../components/CustomLink";
import ErrorToast from "../../components/ErrorToast";
import Dialog from "../../components/Dialog";

import JoinSession from "../../dialogs/JoinSession";
import CreateSession from "../../dialogs/CreateSession";
import GiftNumber from "../../dialogs/GiftNumber";

const SessionChoicePage = ({ ...props }) => {
  let profile;
  profile = {
    name: "Bobbylee Ingalls"
  };
  let error = false;
  const [isMainMenuOpen, toggleMainMenu] = useState(false);
  const [isDialogOpen, toggleDialog] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  return (
    <section className="kcc-sessionchoicepage-wrapper">
      <>
        {profile && (
          <Header
            name={profile.name}
            setMainMenu={() => toggleMainMenu(!isMainMenuOpen)}
          />
        )}
        <img
          className="kcc-sessionchoicepage-logo"
          src={Logo}
          style={{ marginTop: "80px" }}
        />
        {profile && (
          <section className="kcc-sessionchoicepage-session-buttons">
            <Button
              text="Create Session"
              onClick={() => {
                toggleDialog(true);
                setDialogType("create");
              }}
            />
            <Button
              text="Join Session"
              onClick={() => {
                toggleDialog(true);
                // setDialogType("join");
              }}
            />
          </section>
        )}
        {!profile && (
          <section className="kcc-sessionchoicepage-login-container">
            <section className="kcc-sessionchoicepage-login-generic">
              <TextInput label="Email" name="email" />
              <TextInput label="Password" name="password" />
              <section className="kcc-sessionchoicepage-login-generic-links">
                <p>
                  Forgot my email or password.
                  <CustomLink text="Recover" />
                </p>
                <p>
                  I don't have an account.
                  <CustomLink text="Apply" />
                </p>
              </section>
              <div className="kcc-sessionchoicepage-login-generic-loginbutton">
                <Button text="Login" onClick={() => console.log("login")} />
              </div>
            </section>
            <section className="kcc-sessionchoicepage-login-ssooptions">
              sso
            </section>
          </section>
        )}
      </>
      {isMainMenuOpen && (
        <section className="kcc-sessionchoicepage-menu">
          <Button text="Logout" onClick={() => toggleMainMenu(false)} />
          <Button text="Edit Photo" onClick={() => toggleMainMenu(false)} />
        </section>
      )}
      {error && <ErrorToast error="something went wrong" />}
      {isDialogOpen && (
        <Dialog
          overlayOnclick={() => {
            toggleDialog(false);
            setDialogType(null);
          }}
        >
          {dialogType === "join" && (
            <JoinSession
              onJoin={() => {
                toggleDialog(false);
                setDialogType(null);
              }}
            />
          )}
          {dialogType === "create" && <CreateSession />}
        </Dialog>
      )}
    </section>
  );
};

export default SessionChoicePage;

SessionChoicePage.propTypes = {};

SessionChoicePage.defaultProps = {};
