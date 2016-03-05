// React Router maps a URL to a certain Component

var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = React.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router>
    <Route path='/' component = {Main}>
      <Route path='/home' component = {Home} />
        // this.props.children on Main will be the component from the Route!
        // React Router keeps track of which Component will be activated
        // through this.props.children.

    </Route>
  </Router>
);

module.exports = routes;
