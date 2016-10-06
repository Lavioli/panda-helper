var React = require('react');
var Recipe = require('./recipe');

module.exports = React.createClass({

	render: function() {
		return (
			<Recipe 
				number={this.state.number}
				title={this.props.title} 
				steps={this.props.steps}
				onAddStep={this.onAddStep}
			/>
		);
	}
});