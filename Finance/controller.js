const apiClient = require('../RapidApis/apiClient');
const yahooAnalysisAPI = require('../RapidApis/yahooAnalysisAPI');
const yahooNewsApi = require('../RapidApis/yahooNewsAPI');

const getAnalysis = () => {
    return new apiClient(
        yahooAnalysisAPI.method,
        yahooAnalysisAPI.URL,
        yahooAnalysisAPI.queryParams,
        yahooAnalysisAPI.requestHeaders
    )
    .callApi()
    .then((apiData) => {
        return apiData;
    })
    .catch((error) => {
        throw new Error(`Analysis API failed. ${error}`);
    })
}

const getNews = () => {
    return new apiClient(
        yahooNewsApi.method,
        yahooNewsApi.URL,
        yahooNewsApi.queryParams,
        yahooNewsApi.requestHeaders
    )
    .callApi()
    .then((apiData) => {
        return apiData;
    })
    .catch((error) => {
        throw new Error(`News API failed. ${error}`);
    })
}

const financeController = {
    getAnalysis,
    getNews
};

module.exports = financeController;