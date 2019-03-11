// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// Import dependencies
//
// External react / redux libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Our redux files
import combinedReducers from './reducers';
import { addRows } from './search/actions';

import 'phoenix_html';
import socket from './socket';

import L from 'leaflet';

const reduxStore = createStore(combinedReducers, initialState);

if ($('.summary').parent().length) {
  ReactDOM.render(
    <Provider store={reduxStore}>
      <Summary />
    </Provider>,
    document.getElementById("react")
  );
}
