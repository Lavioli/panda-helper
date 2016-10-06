var React = require('react');
var Recipe = require('./recipe');
var RecipeContainer = require('./recipe-container');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			recipes: [
				{
					title: 'Github',
					steps: ['step1 text', 'step2 text']
				},
				{
					title: 'React',
					steps: ['step1 text', 'step2 text']
				},
				{
					title: 'Redux',
					steps: ['step1 text', 'step2 text']
				}
			]
		}
	},

	postRecipes: function() {
		var recipes = [];
		this.state.recipes.forEach(function(recipe, index) {
			recipes.push(
				<RecipeContainer 
					key={index}
					title={recipe.title} 
					steps={recipe.steps}
					number={index + 1}
				/>
			);
		});
		return recipes;
	},

	render: function() {
		return(
			<div>
				{this.postRecipes()}
			</div>
		);
	}
});