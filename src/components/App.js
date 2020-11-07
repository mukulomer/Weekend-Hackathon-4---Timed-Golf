import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      x: 0,
      y: 0,
      ballPosition: {
        left: "0px",
        top: "0px"
      },
      gameStart: false
    };
    this.count = 5;
    this.timer;
    this.top = this.count;
    this.handleClick = this.handleClick.bind(this);
    this.MoveRight = this.MoveRight.bind(this);
  }

  componentDidMount() {}

  componentWillUpdate() {
    if (this.state.gameStart) {
      this.setState({ gameStart: false });
      document.addEventListener("keydown", this.MoveRight);
      this.timer = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    }
  }

  handleClick() {
    this.setState({ gameStart: true });
    console.log(this.state.gameStart);
  }

  MoveRight(event) {
    if (event.key === "ArrowRight") {
      this.setState({
        ballPosition: { left: `${this.count}px`, top: `${this.top}px` }
      });
      this.count = this.count + 5;
    }
    if (event.key === "ArrowLeft") {
      this.setState({
        ballPosition: { left: `${this.count}px`, top: `${this.top}px` }
      });
      this.count = this.count - 5;
    }
    if (event.key === "ArrowDown") {
      this.setState({
        ballPosition: { top: `${this.top}px`, left: `${this.count}px` }
      });
      this.top = this.top + 5;
    }
    if (event.key === "ArrowUp") {
      this.setState({
        ballPosition: { top: `${this.top}px`, left: `${this.count}px` }
      });
      this.top = this.top - 5;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <div className="ball" style={this.state.ballPosition}></div>
        <div className="hole"></div>
        <button onClick={this.handleClick} className="start">
          Start
        </button>
        <div className="timer">{this.state.time}</div>
      </>
    );
  }
}

export default Timer;
