import React, { useState } from 'react';
import { Navbar, SearchBar } from './index';
/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
export const Menu = () => {

    const [isExpanded, setExpanded] = useState(false);

    /**
     * Change the visibility of the input field
     */
    const expandContainer = () => {
        setExpanded(!isExpanded);
    }

    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <Navbar
                        expandContainer={expandContainer}
                    />
                </div>
            </div>
            {/* Check the visibility of the input field */}
            {isExpanded &&
                <SearchBar
                    expandContainer={expandContainer}
                    isExpanded={isExpanded}
                />
            }
        </header>
    )
}
