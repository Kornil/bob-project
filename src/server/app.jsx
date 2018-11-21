import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import 'es6-promise/auto';
import 'isomorphic-fetch';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { JssProvider, SheetsRegistry } from 'react-jss';

// webpack stuff for hot-reload
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

import App from '../client/App';
import htmlMarkup from './htmlMarkup';

import User from './UserSchema';

dotenv.config();

const app = express();

mongoose.connect(
  process.env.BOB_USER,
  { useNewUrlParser: true },
);

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig[0]);
  app.use(
    webpackDevMiddleware(compiler, {
      // noInfo: true,
      publicPath: webpackConfig[0].output.publicPath,
    }),
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/new', async (req, res) => {
  const user = req.query;

  User.create({ Name: user.name, Bags: user.bags })
    .then(() => res.send(200))
    .catch(err => res.status(400).send(err));
});

app.get('/get_data', (req, res) => {
  User.find({}, (err, users) => {
    res.json({ users });
  });
});

app.get('*', (req, res) => {
  const sheets = new SheetsRegistry();
  const context = {};

  const markup = renderToString(
    <JssProvider registry={sheets}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </JssProvider>,
  );

  /* istanbul ignore next */
  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  }
  res.send(htmlMarkup(markup, sheets));
});

export default app;
