const express = require('express');
const app = express();
const financeRouter = require('./Finance/router.js');

app.use('/finance', financeRouter);

app.listen(3000, () => { 
    console.log('app server running on localhost:3000');
})