var React = require('react');
var {connect} = require('react-redux');

export var Login = React.createClass({
	render:function(){
		return(
			<div>
				<h1 className="page-title">Todo APP</h1>
				
				<div className="row">
					<div className="columns small-centered small-10 medium-6 large-4">
						<div className="callout callout-auth">
							<h3>Login</h3>
							<p>
								Login with GitHub account Below
							</p>
								<button className="button">Login with GitHub</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
});