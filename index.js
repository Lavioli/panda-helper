var React = require('react');
var ReactDOM = require('react-dom');


//Components: Board, List, Steps

var Steps = function (props) {
	console.log(props)
	return <li className="Step">{props.text}</li>;
};

var CheatSheet = function (props) {
	return (
		<div className="Sheet">
			<div className="title">{props.title}</div>
				<ol className="sheet-list">{props.step}</ol>
		</div>
	);
};
 
var SheetContainer = React.createClass({
	//intial state should have steps and title of the cheatsheet
	getInitialState: function() {
		return {
			title: 

		};
	},
});

var CheatSheet = function(props) {
	var step = <Steps />;
	return (
		<div className="CheatSheet">
			<Sheet title="CheatSheet1" step={step} />
		</div>
	);	
};


var Board = React.createClass({
	render: function() {
		return (
			<div className="title"> CheatSheet For cool people 
			<div className="Board">
				<CheatSheet/>
			</div>
			</div>
		);
	}
});

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Board />, document.getElementById('app'));
});