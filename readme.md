# NorthLoop Yahoo Finance APIs backend
This project consists of a bakend app integrating Yahoo Finance APIs on RapidApi. It is implemented in NodeJS. It is targeted on node version > **v10.19.0**. 

### Project Structure

The project hierarchy is as follows:
 - Cache 
    - cache.js - implements a simple in-memory cache using memory-cache package
    - cacheWrapper.js - implements a middleware to be used for caching API response
 - Finance
    - constants.js - contains constants used in the module
    - controller.js - implements the logic to call the RapidApis
    - router.js - defines the routes availaible to the app
 - RapidApis
    - apiClient.js - implements a client to form the request object and call the RapidApi
    - yahooAnalysisApi.js - contains information about API
    - yahooNewsApi.js - contains information about API
 - .env - injects the RapidApi key from environment
 
 - **To start the App** -  change to app root folder as working directory then issue following command
    ```
    npm run start
    ```
- **Install app dependencies** - change to app root folder as working directory then issue the following command to install app dependecies as present in package.json
    ```
    npm install
    ```
- **Note** 
    - add your own RapidApi key in the .env file replacing the text in order to make successful requests to RapiApi.