/* globals React */
var Menu = React.createClass({
  getInitialState: function () {
    return {selectedItemIndex: 0};
  },
  clicked: function (index) {
    this.setState({selectedItemIndex: index});
  },
  render: function () {
    return (
      <div>
        <ul className="nav nav-pills nav-stacked">
          {this.props.items.map((menuItemName, menuItemIndex) => {
             var className = '';
             if (this.state.selectedItemIndex === menuItemIndex) {
               className = 'active';
             }
             return (
               <li role="presentation" className={className} onClick={this.clicked.bind(this, menuItemIndex)}>
                 <a href="#">{menuItemName}</a>
               </li>
               );
           })}
        </ul>
        <p>
          Selected: {this.props.items[this.state.selectedItemIndex]}
        </p>
      </div>
    );
  }
});

React.render(
  <Menu items={['Home', 'About', 'Prices', 'Contact us']}/>,
  document.body
);
