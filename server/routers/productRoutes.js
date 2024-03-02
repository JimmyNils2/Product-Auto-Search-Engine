const products = require('../data');
const fs = require('fs');

/**
 * An object with the endpoints
 */

const resHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
}
const productRoutes = {

    // Endpoint to retrieve a filtered product list
    products: function (data, res) {
        
        let filteredProducts = [];
        
        // Check is must filter the list
        if(data.queryString.q !== '') filteredProducts = products.filter(prod => prod.name.toLowerCase().includes(data.queryString.q))
        else filteredProducts = products;

        let payload = {
            products: filteredProducts
        };

        let payloadStr = JSON.stringify(payload);
        res.writeHead(200, {
            ...resHeader,
			'Content-Type':'application/json'
		});
        console.log(payload);
        res.write(payloadStr);
        res.end('\n');
    },
    // Endpoint to retrieve a product by id
    'product': function (data, res) {

    },
    // Endpoint for error
    notFound: function (data, res) {
        let payload = { message: 'File not found!' };
        let payloadStr = JSON.stringify(payload);
        res.writeHead(404, {
            ...resHeader,
            'Content-Type':'application/json'
        });
        res.write(payloadStr);
        res.end('\n');
    }
}

module.exports = productRoutes;