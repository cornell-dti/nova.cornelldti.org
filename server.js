const express = require('express');
const history = require('connect-history-api-fallback');
const mailchimp = require('mailchimp-node')(process.env.mailchimpkey);
const morgan = require('morgan');
const path = require('path');

const app = express();
require('dotenv').load();

app.use(history());
app.use(express.static(__dirname + '/dist'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/dist')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
