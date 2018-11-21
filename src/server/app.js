import dotenv from "dotenv";
import express from "express"; /* 
import mongoose from "mongoose"; */

import "es6-promise/auto";
import "isomorphic-fetch";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../client/App";
import htmlMarkup from "./htmlMarkup";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../client/reducers';

// webpack stuff for hot-reload
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../../webpack.config";
/* 
dotenv.config(); */

const app = express();

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

/* mongoose.connect(
  process.env.DB_USER,
  { useNewUrlParser: true }
); */

/* istanbul ignore next */
if (process.env.NODE_ENV === "development") {
  const compiler = webpack(webpackConfig[0]);
  app.use(
    webpackDevMiddleware(compiler, {
      // noInfo: true,
      publicPath: webpackConfig[0].output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static("public"));

app.get("*", (req, res) => {
  const context = {};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  /* istanbul ignore next */
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  }
  res.send(htmlMarkup(markup));
});

export default app;
