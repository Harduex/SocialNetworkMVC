import express from 'express';

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { v4 as uuidv4 } from 'uuid';
import createError from 'http-errors';
import dotenv from 'dotenv';

// Authentication
import passport from 'passport';
import session from "express-session";
import flash from "express-flash";

// Database
import useDatabase from './App/config/database.js';

// Cloudinary SDK
import cloudinary from 'cloudinary';

// Router import
import useRouters from './routes.js';

// .env
dotenv.config();

// Express app
const app = express();

// Connect to db
useDatabase();

// Cloudinary SDK
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Init user auth
import initializePassport from './App/config/passport-config.js';
initializePassport();

// view engine
app.set('views', path.join(__dirname, '/App/Views'));
app.set('view engine', 'jsx');
const viewEngineOptions = { beautify: true };
app.engine('jsx', require('express-react-views').createEngine(viewEngineOptions));

// Session
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

// Static file 
app.use(express.static(path.join(__dirname, 'public')));

//Routers
useRouters(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app;
