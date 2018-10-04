import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class RandomArray extends Component {
  state = {
    arrayVal: "",
    charactersVal: "",
    numeric: true,
    uppercase: false,
    lowercase: false,
    result: []
  };
  updateInputValue = (input, evt) => {
    this.setState({ [input]: evt.target.value });
  };

  generateArray() {
    let val = [];

    for (var i = 0; i < this.state.arrayVal; i++) {
      const data = this.randomAll();
      // console.log(data);
      val.push(data);
    }

    return val;
  }

  getResult = () => {
    this.setState({ result: JSON.stringify(this.generateArray()) });
  };

  handleCheckbox = evt => {
    const target = evt.target;
    this.setState({ [target.name]: target.checked });
  };

  randomAll() {
    let result = "";
    let text = "";
    let number = "0123456789";
    let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charLower = "abcdefghijklmnopqrstuvwxyz";
    const isNum = this.state.numeric;
    const isCharUpper = this.state.uppercase;
    const isCharLower = this.state.lowercase;

    if (isNum && isCharUpper && isCharLower) {
      text = number + charUpper + charLower;
    } else if (isNum && isCharUpper) {
      text = number + charUpper;
    } else if (isNum && isCharLower) {
      text = number + charLower;
    } else if (isCharUpper && charLower) {
      text = charUpper + charLower;
    } else if (isNum) {
      text = number;
    } else if (isCharUpper) {
      text = charUpper;
    } else if (isCharLower) {
      text = charLower;
    }

    for (var i = 0; i < this.state.charactersVal; i++) {
      result += text.charAt(Math.floor(Math.random() * text.length));
    }
    return result;
  }

  render() {
    console.log(this.state.result);
    return (
      <div className="text-left container">
        <h2> Random Array Generator</h2>
        <FormGroup>
          <Label for="exampleEmail">Random array</Label>
          Generate
          <Input
            value={this.state.arrNum}
            onChange={this.updateInputValue.bind(this, "arrayVal")}
          />
          random array
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Random strings</Label>
          Each string should be
          <Input
            value={this.state.charactersNum}
            onChange={this.updateInputValue.bind(this, "charactersVal")}
          />
          characters long
        </FormGroup>
        {/* <input value={this.state.inputValue} onChange={this.updateInputValue} /> */}
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={this.state.numeric}
              onChange={this.handleCheckbox}
              name="numeric"
            />{" "}
            Numeric digits (0-9)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={this.state.uppercase}
              onChange={this.handleCheckbox}
              name="uppercase"
            />{" "}
            Uppercase letters (A-Z)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={this.state.lowercase}
              onChange={this.handleCheckbox}
              name="lowercase"
            />{" "}
            Lowercase letters (a-z)
          </Label>
        </FormGroup>
        <button onClick={this.getResult} className="btn btn-secondary">
          Get Array
        </button>
        <div>Result</div>
        <FormGroup row>
          <Label for="exampleText" sm={2} />
          <Col sm={10}>
            <Input
              type="textarea"
              name="text"
              defaultValue={this.state.result}
            />
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default RandomArray;
