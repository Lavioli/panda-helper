var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./board');

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Board />, document.getElementById('app'));
});
