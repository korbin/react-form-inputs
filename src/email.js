/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Email = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} type="email" />;
  }
});

module.exports = Email;
