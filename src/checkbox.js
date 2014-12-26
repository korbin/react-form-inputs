/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var type = require('type-detect');
var ArrayMixin = require('./mixins/array');

var Checkbox = React.createClass({
  mixins: [ArrayMixin],

  propTypes: {
    defaultValue: React.PropTypes.array,
    value: React.PropTypes.array
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
        <input {...this.props} type="checkbox" onChange={this._handleChange} id={id} name={this.props.getName()} checked={this._isChecked(value)} value={value} />
        {key}
      </label>
    );
  },

  _isChecked(value: any): boolean {
    var pv = this.props.getValue();

    if (type(pv) !== 'undefined') {
      return (pv.indexOf(value) !== -1);
    } else if (type(this.props.defaultValue) !== 'undefined') {
      return (this.props.defaultValue.indexOf(value) !== -1);
    }

    return false;
  },

  _handleChange(e: {target: HTMLInputElement}): void {
    if (this.props.onChange) {
      this.props.onChange(e);
      return;
    }

    var ov = this.props.getValue();
    var nv = e.target.value;
    var i = ov.indexOf(nv);


    if (e.target.checked === true && i === -1) {
      //Checkbox is checked, not in value array
      this.props.setValue(ov.concat([nv]));
    } else if (e.target.checked === false && i !== -1) {
      //Checkbox is not checked, in value array
      var na = [].concat(ov);
      na.splice(i,1);

      this.props.setValue(na);
    }
  }
});

module.exports = Checkbox;
