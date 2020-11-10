import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false,
      time: 0,
      x: 0,
      y: 0,
      ballPosition: {
        left: "0px",
        top: "0px"
      }
    };
    this.count = 5;
    this.flag = false;
    this.timer;
    this.top = this.count;
    this.MoveRight = this.MoveRight.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.state.gameStart) {
      this.setState({ gameStart: false });
      document.addEventListener("keydown", this.MoveRight);
      this.timer = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    }

    if (
      this.state.ballPosition.left === "250px" &&
      this.state.ballPosition.top === "250px"
    ) {
      this.componentWillUnmount();
    }
  }

  handleClick() {
    this.setState({ gameStart: true });
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
        <div className="heading-timer">{this.state.time}</div>
      </>
    );
  }
}

export default Timer;
