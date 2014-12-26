/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var type = require('type-detect');
var ArrayMixin = require('./mixins/array');

var Radio = React.createClass({
  mixins: [ArrayMixin],

  propTypes: {
    defaultValue: React.PropTypes.any,
    value: React.PropTypes.any
  },

  render(): ?ReactElement {
    return (
      <span id={this.props.getId()}>
        {this.renderChildren()}
      </span>
    );
  },

  renderChild(key: any, value: any): ?ReactElement {
    var lk = key.toString().toLowerCase();
    var id = [this.props.getId(), lk].join('_');

    return (
      <label key={lk} htmlFor={id}>
        <input type="radio" onChange={this._handleChange} id={id} name={this.props.getName()} checked={this._isChecked(value)} value={value} />
        {key}
      </label>
    );
  },

  _isChecked(value: any): boolean {
    var pv = this.props.getValue();

    if (type(pv) !== 'undefined') {
      return (pv === value);
    } else if (type(this.props.defaultValue) !== 'undefined') {
      return (this.props.defaultValue === value);
    }

    return false;
  },

  _handleChange(e: {target: HTMLInputElement}): void {
    if (this.props.onChange) {
      this.props.onChange(e);
      return;
    }

    this.props.setValue(e.target.value);
  }
});

module.exports = Radio;
