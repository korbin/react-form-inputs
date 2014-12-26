jest.autoMockOff();
describe('Checkbox', function() {
  var Checkbox = require('../src/checkbox');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  var props = {
    getId: jest.genMockFn().mockReturnValue('id'),
    getName: jest.genMockFn().mockReturnValue('name'),
    getValue: jest.genMockFn().mockReturnValue(['Baz']),
    setValue: jest.genMockFn(),
    collection: ['Foo', 'Bar', 'Baz']
  };

  var rendered = TestUtils.renderIntoDocument(React.createElement(Checkbox, props));
  var inputs = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'input');

  it('is an array input type', function() {
    expect(Checkbox.array).toEqual(true);
  });

  it('renders options for props.collection', function() {
    expect(inputs.length).toEqual(props.collection.length);
    //Initially selected property
    expect(inputs[2].getDOMNode().checked).toEqual(true);
  });

  it('adds a checked element to returned collection', function() {
    inputs[0].getDOMNode().checked = true;
    React.addons.TestUtils.Simulate.change(inputs[0]);
    expect(props.setValue).toBeCalledWith(['Baz', 'Foo']);
  });
});
