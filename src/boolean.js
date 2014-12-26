/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var type = require('type-detect');

var Bool = React.createClass({
  getDefaultProps() {
    return {
      uncheckedValue: false,
      checkedValue: true
    };
  },

  render(): ?ReactElement {
    return (
      <span>
        <input type="hidden" readOnly name={this.props.getName()} value={this.props.uncheckedValue} />
        <input type="checkbox" id={this.props.getId()} checked={this._isChecked()} name={this.props.getName()} value={this.props.checkedValue} onChange={this._handleChange} />
      </span>
    );
  },

  _isChecked(): boolean {
    var v = this.props.getValue();

    if (type(v) === 'undefined' && type(this.props.defaultValue) !== 'undefined') {
      v = this.props.defaultValue;
    }

    return [true, 1, 'true', '1'].indexOf(v) !== -1;
  },

  _handleChange(e: {target: HTMLInputElement}): void {
    if (this.props.onChange) {
      this.props.onChange(e);
      return;
    }

    var value = e.target.checked ? this.props.checkedValue : this.props.uncheckedValue;
    this.props.setValue(value);
  }
});

module.exports = Bool;
