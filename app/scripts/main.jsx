/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu, Home } from './components';


// /**
//  * We can start our initial App here in the main.jsx file
//  */
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
            <Menu />
            <Home />
        </>
    </React.StrictMode>
)