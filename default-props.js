/* globals React */
"use strict";

var Button = React.createClass({
  displayName: "Button",

  getDefaultProps: function getDefaultProps() {
    return { buttonLabel: 'lorem ipsum' };
  },
  render: function render() {
    return React.createElement(
      "button",
      null,
      this.props.buttonLabel
    );
  }
});

var Content = React.createClass({
  displayName: "Content",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start" }),
      React.createElement(Button, null),
      React.createElement(Button, null)
    );
  }
});

React.render(React.createElement(Content, null), document.body);
