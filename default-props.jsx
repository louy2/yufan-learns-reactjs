/* globals React ReactDOM */
var Button = React.createClass({
  getDefaultProps: function () {
    return {buttonLabel: 'lorem ipsum'};
  },
  propTypes: {
    buttonLabel: React.PropTypes.string,
    handler: React.PropTypes.func.isRequired
  },
  render: function () {
    return <button >{this.props.buttonLabel}</button>;
  }
});

var Content = React.createClass({
  render: function () {
    return (
      <div>
        <Button buttonLabel="Start"/>
        <Button/>
        <Button/>
      </div>
    );
  }
});

ReactDOM.render(<Content/>, document.body);
