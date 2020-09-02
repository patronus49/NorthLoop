const cacheService = require('./cache');

/**
 * Wrapper to use the cache map in app
 * @param {Integer} duration time in seconds for the key to persist in cache
 * if key is found in the cache map, returns it's value
 * else passes the request to next handler 
 * while overloadig res.send to allow insertion on response in cache
 */
const cacheWrapper = (duration) => {
    return (request, response, next) => {

        const key = '__express__' + (request.originalUrl || request.url);        
        const cachedResponse = cacheService.getKeyValue(key);
        
        if(cachedResponse) {
            response.send(cachedResponse);
            return;
        } 
        else {
            response.sendResponse = response.send
            
            response.send = (data) => {
                cacheService.addKey(key, data, duration * 1000);
                response.sendResponse(data);
            }
            next()
        }
    }
}

module.exports = cacheWrapper