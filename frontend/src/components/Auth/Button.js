import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  type: "button",
};

export default Button;
