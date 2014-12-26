/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');

var ArrayMixin = {
  statics: {
    array: true
  },

  propTypes: {
    collection: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]).isRequired
  },

  renderChildren(): Array<?ReactElement> {
    var c = this.props.collection;

    if (Array.isArray(this.props.collection)) {
      c = this._mapArrayCollectionToObject();
    }

    return Object.keys(c).map(k => this.renderChild(k, c[k]), this);
  },

  _mapArrayCollectionToObject(): Object {
    var c = {};
    this.props.collection.forEach(v => c[v] = v);
    return c;
  }
};

module.exports = ArrayMixin;
