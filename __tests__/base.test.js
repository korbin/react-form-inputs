jest.autoMockOff();
describe('Base', function() {
  var Base = require('../src/base');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  var props = {
    getId: jest.genMockFn().mockReturnValue('id'),
    getName: jest.genMockFn().mockReturnValue('name'),
    getValue: jest.genMockFn().mockReturnValue('value')
  };

  it('derives id/name/value', function() {
    var base = TestUtils.renderIntoDocument(React.createElement(Base, props));

    expect(props.getId).toBeCalled();
    expect(props.getName).toBeCalled();
    expect(props.getValue).toBeCalled();

    var input = TestUtils.findRenderedDOMComponentWithTag(base, 'input');
    expect(input.getDOMNode().id).toEqual('id');
    expect(input.getDOMNode().name).toEqual('name');
    expect(input.getDOMNode().value).toEqual('value');
  });


  it('propagates changes via props.setValue', function() {
    props.setValue = jest.genMockFn()

    var base = TestUtils.renderIntoDocument(React.createElement(Base, props));

    var input = TestUtils.findRenderedDOMComponentWithTag(base, 'input');
    React.addons.TestUtils.Simulate.change(input.getDOMNode(), {target: {value: 'change'}});

    expect(props.setValue).toBeCalledWith('change');
  });

  it('respects override of onChange handler', function() {
    props.setValue = jest.genMockFn(),
    props.onChange = jest.genMockFn()

    var base = TestUtils.renderIntoDocument(React.createElement(Base, props));

    var input = TestUtils.findRenderedDOMComponentWithTag(base, 'input');
    React.addons.TestUtils.Simulate.change(input.getDOMNode(), {target: {value: 'change'}});

    expect(props.setValue).not.toBeCalled();
    expect(props.onChange).toBeCalled();
  });
});
