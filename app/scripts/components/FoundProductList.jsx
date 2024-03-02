import React from 'react';
import PropTypes from 'prop-types';
import { Message, Spinner, FoundProduct } from './index';


/**
 * The product list
 * @param {boolean} isLoading to check if the app is loading
 * @param {boolean} isEmpty to check if the input field is empty
 * @param {string} searchQuery The input field value
 * @param {array} products The product list
 * @returns {React.Component}
 */
export const FoundProductList = ({ isLoading, isEmpty, searchQuery, products }) => {
  return (
    // Check if is loading
    <div className="listContainer">
      {isLoading && (
        <Spinner
          color="#040a2b"
          size={13}
        />
      )}
      {/*  Check if there are not result*/}
      {!isLoading && isEmpty && searchQuery !== "" &&
        <Message
          message="No products found!"
        />
      }
      {/* Check if there are results */}
      {!isLoading && !isEmpty &&
        <>
          {products.map((prod) => (
            <FoundProduct
              key={prod._id}
              name={prod.name}
              price={prod.price}
              thumbnailSrc={prod.picture}
            />
          ))}
        </>
      }
    </div>
  )
}

FoundProductList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
}
