import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from'morgan';

// database
import database from './config/database';

// Router import
import routers from'./routes';

const app = express();
database();

// view engine
app.set('views', path.join(__dirname, '/App/Views'));
app.set('view engine', 'jsx');
var options = { beautify: true };
app.engine('jsx', require('express-react-views').createEngine(options));

// Cookie
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static file 
app.use(express.static(path.join(__dirname, 'public')));

//Routers
app.use(routers);

export default app;
