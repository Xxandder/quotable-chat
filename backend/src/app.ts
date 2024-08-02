"use strict";
import "dotenv/config";
import express from 'express';
import connectDB from './config/db';

const app = express();

const PORT = 3000;

connectDB();

app.use('/', ()=>{})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})