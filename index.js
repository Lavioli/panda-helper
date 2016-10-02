var React = require('react');
var ReactDOM = require('react-dom');


//Components: Board, List, Steps

var Steps = function (props) {
	console.log(props)
	return <li className="Step">{props.text}</li>;
};

var CheatSheet = React.createClass({
	render: function() {
		<div className="sheet">
			<div className="steps">
				<Steps text="step1"/>
			</div>
			<form>
				<input type="text" onChange={this.props.onAddInputChanged} />
				<input type="submit" onClick={this.props.onAddSubmit} />
			</form>
		</div>
	}
 });

// var CheatSheet = function (props) {
// 	return (
// 		<div className="Sheet">
// 			<div className="title">{props.title}</div>
// 				<ol className="sheet-list">{props.step}</ol>
// 		</div>
// 	);
// };
 
var SheetContainer = React.createClass({
	//intial state should have steps and title of the cheatsheet
	getInitialState: function() {
		return {
			title: "",
			step: this.props.steps
		};
	},
	render: function() {
		return (
			<CheatSheet 
				onAddInputChanged = {this.onAddInputChanged}
				steps={this.props.text}
			/>
		);
	},
	onAddInputChanged: function(event) {
		this.setState({step: event.target.value})
	},

	onAddSubmit: function(event) {
		event.preventDefault();
		this.state.steps.push(this.state.text);
		this.setState({steps: this.state.steps});
	}

});

// var CheatSheet = function(props) {
// 	var step = <Steps />;
// 	return (
// 		<div className="CheatSheet">
// 			<Sheet title="CheatSheet1" step={step} />
// 		</div>
// 	);	
// };

var items = [
	{
		title: "abc title",
		step: "step 1"
	}
];


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
