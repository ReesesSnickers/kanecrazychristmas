import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// onerror="this.src='/images/image.png'"
const Avatar = ({ image, altText, onClick, ...props }) => {
  const [avatarImage, setAvatarImage] = useState(image);
  if (!avatarImage) {
    return (
      <div className="kcc-noavatar" onClick={onClick}>
        <FontAwesomeIcon icon="snowman" />
      </div>
    );
  } else {
    return (
      <img
        onError={() => {
          setAvatarImage(undefined);
        }}
        onClick={onClick}
        className="kcc-avatar"
        alt={altText}
        src={image}
      />
    );
  }
};

export default Avatar;

Avatar.propTypes = {
  image: PropTypes.string,
  altText: PropTypes.string,
  onClick: PropTypes.func
};

Avatar.defaultProps = {};
