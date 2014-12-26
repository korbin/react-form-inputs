/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Time = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} type="time" />;
  }
});

module.exports = Time;
