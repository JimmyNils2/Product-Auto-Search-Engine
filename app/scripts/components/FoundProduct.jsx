import React from 'react';
import PropTypes from 'prop-types';

/**
 * The product row
 * @param {string} thumbnailSrc product source
 * @param {string} name product name
 * @param {string} price product price
 * @returns {React.Component}
 */
export const FoundProduct = ({ thumbnailSrc, name, price }) => {
  return (
    <div className="productContainer">
      <div className="thumbnail">
        <div className="imgContainer">
          <img src={thumbnailSrc} alt={name} />
        </div>
        <h3 className="productName">{name}</h3>
        <span className="productRating">{price}</span>
      </div>
    </div>
  )
}

FoundProduct.propTypes = {
  thumbnailSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
