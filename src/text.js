/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Text = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} type="text" />;
  }
});

module.exports = Text;
