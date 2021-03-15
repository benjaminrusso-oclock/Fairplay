const express = require('express');
const router = require('./router');
const cookieParser = require('cookie-parser');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const start = () => {
    app.listen(PORT, () => {
        console.log('Running on localhost :' + PORT );
    });
};

module.exports = { start };