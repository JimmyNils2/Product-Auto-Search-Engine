/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const productRoutes = require('./routers/productRoutes');
const http = require('http');
const url = require('url');
const hostname = 'localhost';
const port = 3035;

/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true); // Retrieve teh pathname and the query params
    let path = parsedURL.pathname;
    path = path.replace(/^\/+|\/+$/g, ''); // Replace / character
    let queryParams = parsedURL.query;
    let reqHeaders = req.headers;
    let httpMethod = req.method.toLocaleLowerCase();
    
    // Add event listener when a chunk of data is received
    req.on('data', function () {
        console.log('Got some data');
    });

    /**
     * Event listener when the client has finished sending all the data
     */
    req.on('end', function () {
        // Check the endpoint
        let route = typeof productRoutes[path] !== 'undefined' ? productRoutes[path] : productRoutes['notFound'];

        let data = {
            path: path,
            queryString: queryParams,
            headers: reqHeaders,
            method: httpMethod,
        };

        // Invoke the router
        route(data, res);
    });
  }).listen(port, function(){
    console.log(`[Server running on ${hostname}:${port}`);
  });