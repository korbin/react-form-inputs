/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var ArrayMixin = require('./mixins/array');

var Select = React.createClass({
  mixins: [ArrayMixin],

  propTypes: {
    multiple: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      multiple: false
    };
  },

  render(): ?ReactElement {
    var value = this.props.getValue();
    if (this.props.multiple === true && !Array.isArray(value)) {
      value = [value];
    }

    return (
      <select {...this.props} id={this.props.getId()} name={this.props.getName()} onChange={this._handleChange} value={value}>
        {this.renderChildren()}
      </select>
    );
  },

  renderChild(key: any, value: any): ?ReactElement {
    var lk = key.toString().toLowerCase();
    var id = [this.props.getId(), lk].join('_');

    return (
      <option id={id} key={lk} value={value}>
        {key}
      </option>
    );
  },

  _handleChange(e: {target: HTMLInputElement}): void {
    if (this.props.onChange) {
      this.props.onChange(e);
      return;
    }

    var value = e.target.value;

    if (this.props.multiple === true) {
      value = Array.prototype.slice.call(e.target.children)
      .filter(c => (c.selected === true))
      .map(c => (c.value));
    }

    this.props.setValue(value);
  }
});

module.exports = Select;
