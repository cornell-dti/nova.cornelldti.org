if (process.env.environment !== 'production') {
  console.log('Development environment detected, loading environment from available .env files.');
  require('dotenv').load();
}

const bodyParser = require('body-parser');
const express = require('express');
const history = require('connect-history-api-fallback');
const Mailchimp = require('mailchimp-api-v3');
const morgan = require('morgan');
const path = require('path');

const mailchimp = new Mailchimp(process.env.mailchimp_key);
const mailchimp_path = `/lists/${process.env.mailchimp_audience}`;

const app = express();

if (process.env.environment === 'production') {
  console.log('Production environment detected, enforcing HTTPS & SSL.');
  console.log(`Environment: ` + process.env.environment);

  const enforce = require('express-sslify');
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(history());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5001;

app.post('/email', (req, res) => {
  //TODO: Validate email address
  const { email } = req.body;

  mailchimp
    .post({
      path: mailchimp_path,
      body: {
        tags: [
          'Monthly Newsletter'
        ],
        members: [
          {
            email_address: email,
            status: 'subscribed'
          }
        ]
      }
    })
    .then(() => {
      return res.status(200).json({
        success: true,
        msg: 'Successfully subscribed!'
      });
    })
    .catch(error => {
      console.log(error);

      return res.status(500).json({
        success: false,
        msg: error
      });
    });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
