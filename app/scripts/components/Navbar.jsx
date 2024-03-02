import React from 'react';
import PropTypes from 'prop-types';
/**
 * The navbar component
 * @param {function} expandContainer function to show the search input field 
 * @returns {React.Component}
 */
export const Navbar = ({expandContainer}) => {
  return (
    <nav>
        <a href="#" className="nav-item">HOLIDAY</a>
        <a href="#" className="nav-item">WHAT'S NEW</a>
        <a href="#" className="nav-item">PRODUCTS</a>
        <a href="#" className="nav-item">BESTSELLERS</a>
        <a href="#" className="nav-item">GOODBYES</a>
        <a href="#" className="nav-item">STORES</a>
        <a href="#" className="nav-item">INSPIRATION</a>
        <a href="#" onClick={expandContainer}>
          <i className="material-icons search">search</i>
        </a>
    </nav>
  )
}

Navbar.propTypes = {
  expandContainer: PropTypes.func
}