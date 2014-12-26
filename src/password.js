/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Password = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} type="password" />;
  }
});

module.exports = Password;
