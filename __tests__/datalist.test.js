jest.autoMockOff();
describe('Datalist', function() {
  var Datalist = require('../src/datalist');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  var props = {
    getId: jest.genMockFn().mockReturnValue('id'),
    getName: jest.genMockFn().mockReturnValue('name'),
    getValue: jest.genMockFn().mockReturnValue('Baz'),
    collection: ['Foo', 'Bar', 'Baz']
  };

  it('assigns identifiers', function() {
    var rendered = TestUtils.renderIntoDocument(React.createElement(Datalist, props));

    var datalist = TestUtils.findRenderedDOMComponentWithTag(rendered, 'datalist');
    var input = TestUtils.findRenderedDOMComponentWithTag(rendered, 'input');

    expect(datalist.getDOMNode().id).toEqual(input.props.list);
  });

  it('renders options for props.collection', function() {
    var rendered = TestUtils.renderIntoDocument(React.createElement(Datalist, props));

    var options = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'option');
    expect(options.length).toEqual(props.collection.length);
  });
});
