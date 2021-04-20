import express from 'express';

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { v4 as uuidv4 } from 'uuid';

// Authentication
import passport from 'passport';
import session from "express-session";
import flash from "express-flash";

// Database
import database from './config/database';

// Router import
import routers from './routes';

// Express app
const app = express();

// Connect to db
database();

// Init user auth
import initializePassport from './config/passport-config';
initializePassport();

// view engine
app.set('views', path.join(__dirname, '/App/Views'));
app.set('view engine', 'jsx');
const viewEngineOptions = { beautify: true };
app.engine('jsx', require('express-react-views').createEngine(viewEngineOptions));

// Session
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

// Static file 
app.use(express.static(path.join(__dirname, 'public')));

//Routers
routers(app);


export default app;
