import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useClickOutside } from 'react-click-outside-hook';
import { useDebounce } from '../../hooks/useDebounce';
import { FoundProductList } from './index';
import PropTypes from 'prop-types';

/**
 * The search bar component, manages the http request
 * @param {function} expandContainer a function to show the search input field
 * @param {boolean} isExpanded to check the result field visibility
 * @returns {React.Component}
 */
export const SearchBar = ({expandContainer, isExpanded}) => {

    // Init several hooks
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [targetReference, isClickedOutside] = useClickOutside();
    
    // Check product results
    const isEmpty = !products || products.length === 0;

    // Handle the click  on the page
    useEffect(() => {
        if(isClickedOutside) expandContainer();
    }, [isClickedOutside])

    // Handle the input value
    const changeHandler = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    // Handle the visibility of the input
    const handleClose = () => {
        if(searchQuery!=='') {
            setSearchQuery('');
        }else{
            expandContainer();
        }
    }

    // Parse the url query
    const prepareQuery = () => {
        const URL = 'http://localhost:3035/products?q=' + searchQuery.trim().toLowerCase();
        console.log(searchQuery);
        return encodeURI(URL)
    }
    
    // Handle the http request
    const getProducts = async () => {
        if(!searchQuery || searchQuery.trim() === '') return;
    
        setIsLoading(true);
    
        const URL = prepareQuery(searchQuery);
        const response = await axios.get(URL).catch((e) => console.log('Error', e));
        setIsLoading(false);
        setProducts(response.data.products)
    }

    // Trigger the http request
    useDebounce(searchQuery, 500, getProducts)
    
  return (
    <div 
        // Check if is expanded and set the click reference
        className={`searchBarContainer${(isExpanded && searchQuery!=="")? " expanded" : ""}`} 
        ref={targetReference}
    >
        <div className="inputContainer">
            <input 
                type="text" 
                className="input"
                placeholder="Search products"
                value={searchQuery}
                onChange={changeHandler}
            />
            <span className="closeIcon" onClick={handleClose}>
            <i className="material-icons close">close</i>
            </span>
        </div>
        {/* Check if there are results */}
        {isExpanded && <span className="lineSeparator"/>}
        {isExpanded && 
            <FoundProductList
                isLoading={isLoading}
                isEmpty={isEmpty}
                searchQuery={searchQuery}
                products={products}
            />
        }
    </div>
  )
}
SearchBar.propTypes = {
    expandContainer: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired
}

