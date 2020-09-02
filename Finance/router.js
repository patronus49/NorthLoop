const financeRouter = require('express').Router();
const financeController = require('./controller.js');
const cacheWrapper = require('../Cache/cacheWrapper');
const {
    CACHE_TIMEOUT
} = require('./constants')

financeRouter.get('/analysis', cacheWrapper(CACHE_TIMEOUT), (request, response, next) => {
    return financeController.getAnalysis()
        .then((data) => {
            response.send(data);
        })
        .catch((err) => {
            console.log(err);
            next('something went wrong')
        })
});

financeRouter.get('/news', cacheWrapper(CACHE_TIMEOUT), (request, response, next) => {
    return financeController.getNews()
        .then((data) => {
            response.send(data);
        })
        .catch((err) => {
            console.log(err);
            next('something went wrong')
        })
});

module.exports = financeRouter;