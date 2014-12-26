/**
 * @flow
 * @jsx React.DOM
*/
var React = require('react');
var Base = require('./base');

var Datalist = React.createClass({
  propTypes: {
    collection: React.PropTypes.array.isRequired
  },

  render(): ?ReactElement {
    var options = this.props.collection.map((v) => (<option key={v.toString().toLowerCase()} value={v} />));
    var listId = [this.props.getId(), 'list'].join('_');

    return (
      <span>
        <Base {...this.props} list={listId} />
        <datalist id={listId}>
          {options}
        </datalist>
      </span>
    );
  }
});

module.exports = Datalist;
