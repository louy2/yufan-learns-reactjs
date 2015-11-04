/* globals React */
'use strict';

var Menu = React.createClass({
  displayName: 'Menu',

  getInitialState: function getInitialState() {
    return { selectedItemIndex: 0 };
  },
  clicked: function clicked(index) {
    this.setState({ selectedItemIndex: index });
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        { className: 'nav nav-pills nav-stacked' },
        this.props.items.map(function (menuItemName, menuItemIndex) {
          var className = '';
          if (_this.state.selectedItemIndex === menuItemIndex) {
            className = 'active';
          }
          return React.createElement(
            'li',
            { role: 'presentation', className: className, onClick: _this.clicked.bind(_this, menuItemIndex) },
            React.createElement(
              'a',
              { href: '#' },
              menuItemName
            )
          );
        })
      ),
      React.createElement(
        'p',
        null,
        'Selected: ',
        this.props.items[this.state.selectedItemIndex]
      )
    );
  }
});

React.render(React.createElement(Menu, { items: ['Home', 'About', 'Prices', 'Contact us'] }), document.body);
