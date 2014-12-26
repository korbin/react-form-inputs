/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');

var Base = React.createClass({
  propTypes: {
    element: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ])
  },

  getDefaultProps() {
    return {
      element: 'input'
    };
  },

  render(): ?ReactElement {
    var props = React.__spread({}, this.props, {
      id: this.props.getId(),
      name: this.props.getName(),
      onChange: this._handleChange,
      value: this.props.getValue()
    });

    return React.createElement(this.props.element, props);
  },

  _handleChange(e: {target: HTMLInputElement}): void {
    if (this.props.onChange) {
      this.props.onChange(e);
      return;
    }

    this.props.setValue(e.target.value);
  }
});

module.exports = Base;
