// React Router maps a URL to a certain Component

var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component = {Main}>
      <IndexRoute component = {Home} />
        // this.props.children on Main will be the component from the Route!
        // React Router keeps track of which Component will be activated
        // through this.props.children.

    </Route>
  </Router>
);

module.exports = routes;
