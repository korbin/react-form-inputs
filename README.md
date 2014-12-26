# react-form-inputs
[![npm version](https://badge.fury.io/js/react-form-inputs.svg)](http://badge.fury.io/js/engine.io)
[![Build Status](https://travis-ci.org/korbin/react-form-inputs.svg?branch=master)](https://travis-ci.org/korbin/react-form-inputs)

## Synposis
**react-form-inputs** is a baseline collection of pluggable input components for [react-form](https://github.com/korbin/react-form).

## Components
Name | Type | Browser Support | Details on Props | Valid initial values | Comments
---- | ---- | ------- | ----- | --------------- | -----
Base | Internal | All browsers | Pass-through to input | String-like values | Shim for other components. Should not be used directly.
Boolean | Extended | All browsers | Optional checkedValue, uncheckedValue | true, false, "true", "false", 1, 0 | Creates both a hidden input (uncheckedValue) and a checkbox input (checkedValue). Servers accepting POSTs must always use the last-encoded value.
Checkbox | Array | All browsers | Requires collection (object or array) | Array of String-like values | Creates a consistently-named checkbox input for each array item or key-value pair in *collection*. Value is always an array. 
Color | Standard (HTML5) | Modern browsers | Pass-through to input | Hex color strings
Datalist | Array | Modern browsers | Pass-through to input, requires array collection | String-like values | Creates a datalist and accompanying input field. Collection must be an array of String-like values.
Date | Standard (HTML5) | Modern browsers | Pass-through to input | Date strings
Datetime | Standard (HTML5) | Modern browsers | Pass-through to input | Datetime-local strings | Uses datetime-local for greater browser compatibility.
Email | Standard (HTML5) | Modern browsers | Pass-through to input | Valid email strings
Hidden | Standard | All browsers | Pass-through to input | String-like values
Number | Extended | All browsers | Pass-through to input, pattern (regex string) | Numeric String-like values | Implemented using an enhanced "text" input. Does not allow entry of non-numeric characters. Decimals okay.
Password | Standard | All browsers | Pass-through to input | String-like values
Radio | Array | All browsers | Requires collection (object or array) | String-like values (within collection) | Creates a label and matching radio button for each array item or key-value pair in *collection*. Value is always a single value contained within *collection*.
Range | Standard (HTML5) | Modern browsers | Pass-through to input, min, max, step | Numeric String-like values
Search | Standard (HTML5) | Modern browsers | Pass-through to input | String-like values
Select | Array | All browsers | Requires collection (object or array), optional multiple (boolean) | String-like values (within collection) | Creates a select or multi-select with an option for each array item or key-value pair in *collection*. If props.multiple=true, value is always an array of value(s) from *collection*, else value is a single , non-array value from *collection*.
Text | Standard | All browsers | Pass-through to input | String-like values | Standard, work-horse input component
Textarea | Standard | All browsers | Pass-through to textarea | String-like values
Time | Standard (HTML5) | Modern browsers | Pass-through to input | String time (HH:MM) values

#### A note on array-type (collection) components
Any array-type component accepting a collection consisting of an object or array will behave similarly. 

**If collection is an array of values:** those values will be used for both the visible label and underlying "value" used for selection/form submission.

**If collection is an object (key-value pairs):** object keys will be visible to users, object values will be used as the underlying "value" used for selection/form submission.

## Tips
- To reduce over-the-wire payload, only require specific components:
  ```JavaScript
  var Text = require('react-form-inputs/text');
  ```

## Developing
Install gulp, dependencies:
```Shell
npm install -g gulp
npm install
```

Build it!:
```Shell
#To build once:
gulp build

#To watch and rebuild on changes:
gulp watch
```

Link dependent project to ./dist/:
```Shell
#Within dependent project directory...
npm link ~/path-to-react-form-inputs/dist/
```

## Contributing
- [Fork](https://github.com/korbin/react-form-inputs/fork) the project.
- Create a descriptively-named branch for your changes. *(fix_whatever, add_this)*
- Commit your change.
- Add appropriate documentation, test coverage.
- Test with "npm test" (requires jest-cli).
- Issue a [pull request](https://github.com/korbin/react-form-inputs/pulls) for your branch.

## License
react-form-inputs is released under the [MIT License](https://github.com/korbin/react-form-inputs/blob/master/LICENSE).
