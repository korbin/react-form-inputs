/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Search = React.createClass({
  render(): ?ReactElement {
    return <Base {...this.props} type="search" />;
  }
});

module.exports = Search;
