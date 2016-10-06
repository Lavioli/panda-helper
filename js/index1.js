var React = require('react');
var ReactDOM = require('react-dom');

var Step = React.createClass({
	render: function(props) {
		return (
			<div>
				<div>Step {this.props.step}
					<li>{this.props.text}</li>
				</div>
				
			</div>
		);
	}

});

var Recipe = React.createClass({
	getInitialState: function() {
		return {
			step: 0,
			text: ""
		}
	},
	onSubmit: function(event) {
		event.preventDefault();
		this.setState({step: this.state.step + 1});
		this.setState({text: event.target.value})
		console.log(this.state.step)
		// console.log(this.setState({text: event.target.value}))
		// this.refs.item.getDOMNode().value = ''
		// console.log('creating recipe step with item: ' + item);
		// this.

	},
	onInputChange: function(event) {
		
		console.log(this.setState(event.target.value);)
	},
	render: function(props) {
		return (
			<div>
				<Step step={this.state.step} text="step1"/>
					<form onSubmit={this.onSubmit}>
						<input step={this.state.step} type="text" ref="item"/>
					</form>
			</div>
		);
	}
}); 
	


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Recipe />, document.getElementById('app'));
});
