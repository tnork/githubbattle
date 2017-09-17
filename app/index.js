const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const TylersApp = require('./components/App');

ReactDOM.render(
  <TylersApp />,
  document.getElementById('app')
);
