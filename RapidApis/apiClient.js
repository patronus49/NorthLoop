const axios = require("axios");
const dotenv = require('dotenv')

dotenv.config();

/**
 * IIFE to throw error in case the RapidApi key is not present
 */
(function () {
    if (!process.env.x_rapidapi_key) {
        throw new Error('RapidApi key missing. Required.');
    }
})();

class RapidApiClient {

    constructor(method, uri, queryParams, requestHeaders) {
        this.requestObject = {
            "method": method,
            "url": uri,
            "params": queryParams,
            "headers": requestHeaders,
        }
    }

    callApi() {
        this.requestObject.headers['x-rapidapi-key'] = process.env.x_rapidapi_key;
        
        return axios(this.requestObject)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(`RapidApi data fetch failed. ${error}`);
            })
    }
}

module.exports = RapidApiClient