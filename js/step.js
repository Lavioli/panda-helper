var React = require('react');

module.exports = function(props) {
	var number = props.number, text = props.text;

	return (
		<div>
			Step: {number}<br/>
			{text}
		</div>
	);
};
