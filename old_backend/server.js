
const dot = require('dotenv').config()

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = 'sk_test_oXne2jo4cropmchd4NOFsKm300gPlgih2d';

const express = require('express');
const stripe = require('stripe')(keySecret);
const bodyParser = require('body-parser');
const firebase = require('firebase');

const app = express();

app.disable('x-powered-by')
app.set('trust proxy', true)

app.use(express.static('public'));
console.log(keySecret)

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/charge', (req, res) => {
  res.send(req)
})

app.post('/charge', (req, res) => {
  let amount = 500;


  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: 'Sample Charge',
      currency: 'usd',
      customer: customer.id
    }))
  .then(charge => res.send(charge))
  .catch(err => {
    console.log('Error:', err);
    res.status(500).send({error: 'Purchase Failed'});
  });
});

app.listen(8000);