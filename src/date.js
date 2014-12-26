/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var DateInput = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} type="date" />;
  }
});

module.exports = DateInput;
