const express = require('express');
require('dotenv').config();
const User = require('./models/users');
const app = express();

const port = process.env.PORT || 3000;

const apiRouter = require('./routes');
app.use('/api', apiRouter);

app.listen(port, async ()=>{
    console.log(`listening on ${port}`)
    let t = await User.sync({alter: true});
    console.log(`hasil user sync ${t}`);
    
})