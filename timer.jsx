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
    });
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

React.render(
  <TimerWrapper/>,
  document.body
);
