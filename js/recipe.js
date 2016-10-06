var React = require('react');

var Step = require('./step');

module.exports = React.createClass({
	
	getInitialState: function() {

		// console.log(this.props);

		return {
			steps: this.props.steps
		};
	},

	render: function() {
		// console.log(this.props)
		return (
			<div>
				<h2>{this.props.title}</h2>
				<div>
					{this.state.steps.map(function(step, index) {
						return <Step number={index + 1} key={index} text={step} />;
					})}
				</div>

				<form onSubmit={this.onClickSubmit}>
					<input type="text" name="step" ref="stepref" placeholder="Enter step here" />
					<input type="submit" />
				</form>
			</div>
		);
	},
	onClickSubmit: function(e) {
		e.preventDefault();
		var nstep = e.target.step.value;
		this.setState({
				steps: this.state.steps.concat(nstep),
			});
		// this.refs.cardref.value = "";
	}
})