"use strict";

var React = require('react');

var ReactDOM = require('react-dom');

require('./index.css');

var App = require('./components/App');

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));