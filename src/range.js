/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Range = React.createClass({
  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      min: 0,
      max: 100,
      step: 1
    }
  },

  render(): ?ReactElement {
    return <Base {...this.props} type="range" />;
  }
});

module.exports = Range;
