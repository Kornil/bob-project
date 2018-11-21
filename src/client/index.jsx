import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { injectGlobal } from 'emotion';
import emotionNormalize from 'emotion-normalize';

/* eslint-disable-next-line */
injectGlobal`
  ${emotionNormalize}
`;

import { AppContainer } from 'react-hot-loader';

import App from './App';

const root = document.getElementById('root');

const render = (Component) => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
