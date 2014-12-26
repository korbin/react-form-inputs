/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Textarea = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} element="textarea" />;
  }
});

module.exports = Textarea
