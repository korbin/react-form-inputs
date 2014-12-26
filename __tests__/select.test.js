jest.autoMockOff();
describe('Select', function() {
  var Select = require('../src/select.js');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  var props = {
    getId: jest.genMockFn().mockReturnValue('id'),
    getName: jest.genMockFn().mockReturnValue('name'),
    getValue: jest.genMockFn().mockReturnValue('Baz'),
    setValue: jest.genMockFn(),
    collection: ['Foo', 'Bar', 'Baz']
  };

  var rendered = TestUtils.renderIntoDocument(React.createElement(Select, props));
  var select = TestUtils.findRenderedDOMComponentWithTag(rendered, 'select');
  var options = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'option');

  it('is an array input type', function() {
    expect(Select.array).toEqual(true);
  });

  it('renders options for props.collection', function() {
    expect(options.length).toEqual(props.collection.length);
    //Initially selected property
    expect(options[2].getDOMNode().selected).toEqual(true);
  });
});
