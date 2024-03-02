import React from 'react';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';

/**
 * The loading spinner
 * @param {string} color the spinner color 
 * @param {number} size the spinner size 
 * @returns {React.Component}
 */
export const Spinner = ({color = '#000', size = 16}) => {
  return (
    <div className="spinnerContainer">
        <PulseLoader
            loading
            color={color}
            size={size}
        />
    </div>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}
