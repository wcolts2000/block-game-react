import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import "./styles.css";

const Globals = createGlobalStyle`
html, body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
}
*,*::before, *::after{
  box-sizing: inherit
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
`;

const Board = styled.div`
  width: 600px;
  height: 600px;
  background: pink;
  display: flex;
  flex-wrap: wrap;
  font-family: sans-serif;
  font-size: 40px;
  font-weight: bold;

  .pad {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    border-left: 12px solid #90ee10;
    border-right: 12px solid darkgreen;
    border-top: 12px solid darkgreen;
    border-bottom: 12px solid lightgreen;
    cursor: pointer;
    background: aquamarine;
    user-select: none;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      background: green;
    }
  }
`;

const Button = styled.button`
  background: none;
  border: 4px solid darkgreen;
  text-transform: uppercase;
  color: darkgreen;
  letter-spacing: 1.8px;
  font-size: 20px;
  padding: 20px 30px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: white;
    background: darkgreen;
  }
`;

class App extends Component {
  state = {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, ""]
  };

  render() {
    return (
      <>
        <Globals />
        <Button onClick={this.randomize}>Randomize</Button>
        <Board className="App">
          {this.state.nums.map((num, i) => {
            return (
              <div key={i} className="pad" onClick={() => this.swapper(num)}>
                {num}
              </div>
            );
          })}
        </Board>
      </>
    );
  }

  randomize = () => {
    let newNums = [...this.state.nums];
    let randArr = [];
    let i = newNums.length;
    while (i > 0) {
      let randInt = this.findRandomNum(newNums);
      let randValue = newNums[randInt];
      newNums = newNums.filter(num => num !== randValue);
      randArr.push(randValue);
      i--;
    }
    this.setState({ nums: randArr });
  };

  findRandomNum = newNums => {
    let num = Math.floor(Math.random() * newNums.length);
    return num;
  };

  swapper = num => {
    if (num === "") return;
    let newNums = [...this.state.nums];
    // INDEX 0
    if (this.state.nums.indexOf(num) === 0) {
      if (this.state.nums[1] === "") {
        let temp = newNums[0];
        newNums[0] = newNums[1];
        newNums[1] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[3] === "") {
        let temp = newNums[0];
        newNums[0] = newNums[3];
        newNums[3] = temp;
        this.setState({ nums: newNums });
      }
    }
    // Index 1
    if (this.state.nums.indexOf(num) === 1) {
      if (this.state.nums[0] === "") {
        let temp = newNums[0];
        newNums[0] = newNums[1];
        newNums[1] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[2] === "") {
        let temp = newNums[1];
        newNums[1] = newNums[2];
        newNums[2] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[4] === "") {
        let temp = newNums[1];
        newNums[1] = newNums[4];
        newNums[4] = temp;
        this.setState({ nums: newNums });
      }
    }
    // Index 2
    if (this.state.nums.indexOf(num) === 2) {
      if (this.state.nums[1] === "") {
        let temp = newNums[2];
        newNums[2] = newNums[1];
        newNums[1] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[5] === "") {
        let temp = newNums[2];
        newNums[2] = newNums[5];
        newNums[5] = temp;
        this.setState({ nums: newNums });
      }
    }
    // Index 3
    if (this.state.nums.indexOf(num) === 3) {
      if (this.state.nums[0] === "") {
        let temp = newNums[3];
        newNums[3] = newNums[0];
        newNums[0] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[4] === "") {
        let temp = newNums[4];
        newNums[4] = newNums[3];
        newNums[3] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[6] === "") {
        let temp = newNums[6];
        newNums[6] = newNums[3];
        newNums[3] = temp;
        this.setState({ nums: newNums });
      }
    }
    // INDEX 4
    if (this.state.nums.indexOf(num) === 4) {
      if (this.state.nums[1] === "") {
        let temp = newNums[4];
        newNums[4] = newNums[1];
        newNums[1] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[3] === "") {
        let temp = newNums[4];
        newNums[4] = newNums[3];
        newNums[3] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[5] === "") {
        let temp = newNums[4];
        newNums[4] = newNums[5];
        newNums[5] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[7] === "") {
        let temp = newNums[4];
        newNums[4] = newNums[7];
        newNums[7] = temp;
        this.setState({ nums: newNums });
      }
    }
    // Index 5
    if (this.state.nums.indexOf(num) === 5) {
      if (this.state.nums[2] === "") {
        let temp = newNums[5];
        newNums[5] = newNums[2];
        newNums[2] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[4] === "") {
        let temp = newNums[5];
        newNums[5] = newNums[4];
        newNums[4] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[8] === "") {
        let temp = newNums[5];
        newNums[5] = newNums[8];
        newNums[8] = temp;
        this.setState({ nums: newNums });
      }
    }
    // Index 6
    if (this.state.nums.indexOf(num) === 6) {
      if (this.state.nums[3] === "") {
        let temp = newNums[6];
        newNums[6] = newNums[3];
        newNums[3] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[7] === "") {
        let temp = newNums[6];
        newNums[6] = newNums[7];
        newNums[7] = temp;
        this.setState({ nums: newNums });
      }
    }
    // Index 7
    if (this.state.nums.indexOf(num) === 7) {
      if (this.state.nums[6] === "") {
        let temp = newNums[7];
        newNums[7] = newNums[6];
        newNums[6] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[4] === "") {
        let temp = newNums[7];
        newNums[7] = newNums[4];
        newNums[4] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[8] === "") {
        let temp = newNums[7];
        newNums[7] = newNums[8];
        newNums[8] = temp;
        this.setState({ nums: newNums });
      }
    }
    // Index 8
    if (this.state.nums.indexOf(num) === 8) {
      if (this.state.nums[5] === "") {
        let temp = newNums[8];
        newNums[8] = newNums[5];
        newNums[5] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[7] === "") {
        let temp = newNums[8];
        newNums[8] = newNums[7];
        newNums[7] = temp;
        this.setState({ nums: newNums });
      }
    }
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
