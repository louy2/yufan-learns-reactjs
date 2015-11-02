/* globals React */
var TimerWrapper = React.createClass({
  getInitialState: function () {
    return {time: null, int: null};
  },
  startTimer: function (time) {
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
