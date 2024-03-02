import React from "react";
import PropTypes from 'prop-types';

/**
 * Show a message 
 * @param {string} message the message description
 * @returns {React.Component}
 */
export const Message = ({message}) => {
  return (
    <div className="messageContainer">
        <span className="message">
            {message}
        </span>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}