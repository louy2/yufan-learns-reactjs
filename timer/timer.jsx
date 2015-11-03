/* globals React */
var TimerWrapper = React.createClass({
  getInitialState: function () {
    return {time: null, int: null};
  },
  startTimer: function (time) {
    clearInterval(this.state.int);
    var int = setInterval(() => {
      var tl = this.state.time - 1;
      if (tl === 0) clearInterval(int);
      this.setState({time: tl});
    }, 1000);
    return this.setState({time: time, int: int});
  },
  render: function () {
    return (
      <div>
        <h2>Timer</h2>
        <Button time="5" startTimer={this.startTimer}/>
        <Button time="10" startTimer={this.startTimer}/>
        <Button time="15" startTimer={this.startTimer}/>
        <Timer time={this.state.time}/>
      </div>
    );
  }
});

var Button = React.createClass({
  startTimer: function () {
    return this.props.startTimer(this.props.time);
  },
  render: function () {
    return <button onClick={this.startTimer}>{this.props.time} seconds</button>;
  }
});

var Timer = React.createClass({
  render: function () {
    if (this.props.time === null) return <div/>;
    return <h1>{this.props.time}</h1>;
  }
});

React.render(
  <TimerWrapper/>,
  document.body
);
