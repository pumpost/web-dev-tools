import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import InputObj from "./InputObj";

class RandomObject extends Component {
  state = {
    objectVal: "",
    numeric: true,
    text: "",
    val: "",
    name: "",
    inputs: [{ name: "" }]
  };

  updateInputValue = (index, newValue) => {
    const value = this.state.inputs.map((val, valindex) => {
      if (index !== valindex) return val;
      return { ...val, name: newValue };
    });

    this.setState({ inputs: value });
  };

  // handleNameChange = (i, value) => {
  //   this.setState({ name: value });
  // };

  handleCheckbox = evt => {
    const target = evt.target;
    this.randomResult = this.randomAll();
    this.setState({ [target.name]: target.checked, val: this.randomResult });
  };

  randomAll() {
    let number = "0123456789";
    for (var i = 0; i < 5; i++) {
      return number.charAt(Math.floor(Math.random() * number.length));
    }
  }

  addButton = () => {
    this.setState({
      inputs: this.state.inputs.concat([{ name: "" }])
    });
  };

  generateResult = () => {
    // console.log(111);
    // console.log(result);
  };

  render() {
    const { result, inputs } = this.state;

    console.log(inputs);
    return (
      <div className="text-left container">
        <h2> Random Object Generator</h2>
        <FormGroup>
          <Label for="exampleEmail">Random Object</Label>
          Generate
          {/* <InputObj
            handleUpdateVal={this.handleNameChange}
            value={this.state.name}
            numeric={this.state.numeric}
            handleCheckbox={this.handleCheckbox}
          /> */}
          {inputs.map((data, i) => {
            return (
              <InputObj
                key={i}
                handleUpdateVal={this.updateInputValue}
                value={data.name}
                numeric={this.state.numeric}
                handleCheckbox={this.handleCheckbox}
                index={i}
              />
            );
          })}
          {/* {this.renderInput()} */}
          <Button onClick={this.addButton} color="success">
            +
          </Button>
          <div>
            {" "}
            <Button color="primary" onClick={this.generateResult}>
              Generate
            </Button>
          </div>
        </FormGroup>
      </div>
    );
  }
}

export default RandomObject;
