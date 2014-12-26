jest.autoMockOff();
describe('Radio', function() {
  var Radio = require('../src/radio');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  var props = {
    getId: jest.genMockFn().mockReturnValue('id'),
    getName: jest.genMockFn().mockReturnValue('name'),
    getValue: jest.genMockFn().mockReturnValue('Baz'),
    setValue: jest.genMockFn(),
    collection: ['Foo', 'Bar', 'Baz']
  };

  var rendered = TestUtils.renderIntoDocument(React.createElement(Radio, props));
  var inputs = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'input');

  it('is an array input type', function() {
    expect(Radio.array).toEqual(true);
  });

  it('renders options for props.collection', function() {
    expect(inputs.length).toEqual(props.collection.length);
    //Initially selected property
    expect(inputs[2].getDOMNode().checked).toEqual(true);
  });

  it('propagates changes via props.setValue', function() {
    React.addons.TestUtils.Simulate.change(inputs[0]);
    expect(props.setValue).toBeCalledWith('Foo');
  });
});
