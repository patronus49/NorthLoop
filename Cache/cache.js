const cache = require('memory-cache');

/**
 * inserts a key value pair to cache map
 * @param {String} key key in cache map
 * @param {Object} value value in cache map
 * @param {Integer} timeToLive lifetime duation for entry
 * @return null
 */
const addKey = (key, value, timeToLive) => {
    cache.put(key, value, timeToLive);
}

/**
 * returns value for the key stored in cache map
 * @param {String} key 
 * @returns {Object} the corresponding value for key
 */
const getKeyValue = (key) => {
    return cache.get(key);
}

const cacheService = {
    addKey,
    getKeyValue
}

module.exports = cacheService