var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function() {
    // playersInfo was passed from ConfirmBattleContainer in handleInitiateBattle
    // and passed in from context.router.  It's location in the object this.props
    // is found in this.props.location.state
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function (scores) {
        console.log('SCORES : ', scores);
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}
      />
    );
  }
});

module.exports = ResultsContainer;
