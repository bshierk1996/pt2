import { Router } from 'express';
import Stripe from 'stripe';
import * as firebase from 'firebase';

// const keyPublishable = process.env.PUBLISHABLE_KEY;
const routes = Router();
const keySecret = 'sk_test_oXne2jo4cropmchd4NOFsKm300gPlgih2d';
const stripe = new Stripe(keySecret);

routes.get('/', (req, res) => {
  res.send({ title: 'Express Babel' });
});

routes.post('/charge', (req, res) => {
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
  .then(charge => {
    console.log(charge)
    return res.send(charge)
  })
  .catch(err => {
    console.log('Error:', err);
    res.status(500).send({error: 'Purchase Failed'});
  });
});

export default routes;

// curl -d '{"id":"1234", "email":"test@test.com"}' -H "Content-Type: application/json" -X POST http://localhost:8000/charge