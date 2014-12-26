/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Datetime = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} type="datetime-local" />;
  }
});

module.exports = Datetime;
