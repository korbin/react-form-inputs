/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Number = React.createClass({
  propTypes: {
    pattern: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      pattern: '[0-9\.]+'
    };
  },

  render(): ?ReactElement {
    return <Base {...this.props} type="text" onChange={this._handleChange} />;
  },

  _handleChange(e: {target: HTMLInputElement}) {
    var match = e.target.value.match(new RegExp(this.props.pattern, 'g'));

    if (match && match.join('') === e.target.value) {
      this.props.setValue(e.target.value);
    }
  }
});

module.exports = Number;
