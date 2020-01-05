import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.disable('x-powered-by');
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Routes
app.use('/', routes);


export default app;