const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

const apiRouter = require('./routes');
app.use('/api', apiRouter);

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})