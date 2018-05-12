const express     = require("express");
const mailchimp   = require("mailchimp-node")(process.env.mailchimpkey);
const morgan      = require("morgan");
const path        = require("path");

const app = express();
require("dotenv").load();
var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');

app = express();
app.use(history());
app.use(express.static(__dirname + '/dist'));

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/dist")));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});
console.log('Server started on: ' + port + '!');
