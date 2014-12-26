/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Hidden = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} type="hidden" />;
  }
});

module.exports = Hidden;
