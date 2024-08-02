"use strict";
import express from 'express';

const app = express();

const PORT = 3000;

app.use('/', ()=>{})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})