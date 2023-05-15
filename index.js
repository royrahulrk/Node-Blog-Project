const express = require('express');

const cors = require('cors');
const CONSTANTS = require('./configure/constant');
const router = require("./router/router");


const app = express();
app.use(cors())


app.use("/", router);


app.listen(CONSTANTS.PORT, ()=>{
    console.log(`Server is listening at ${CONSTANTS.PORT}`)
})