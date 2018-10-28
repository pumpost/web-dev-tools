import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import InputObj from "./InputObj";

class RandomObject extends Component {
  state = {
    objectVal: "",
    numeric: true,
    result: [{ text: "111" }, { text: "2222" }]
  };

  updateInputValue = (evt, input) => {
    this.setState({ [input]: evt.target.value });
  };

  handleCheckbox = evt => {
    const target = evt.target;
    this.setState({ [target.name]: target.checked });
  };

  randomAll() {
    let number = "0123456789";
    for (var i = 0; i < 5; i++) {
      return number.charAt(Math.floor(Math.random() * number.length));
    }
  }

  addButton = () => {
    const randomResult = this.randomAll();
    const objName = this.state.objectVal;
    let result = [];
    result.push({ [objName]: randomResult });
    this.setState({ result });
  };

  generateResult = () => {
    // console.log(111);
    // console.log(result);
  };

  renderInput() {
    return this.state.result.map((data, i) => {
      return (
        <InputObj
          key={i}
          handleUpdateVal={this.updateInputValue}
          value={data.text}
          numeric={this.state.numeric}
          handleCheckbox={this.handleCheckbox}
        />
      );
    });
  }

  render() {
    const { result } = this.state;

    console.log(result);
    return (
      <div className="text-left container">
        <h2> Random Object Generator</h2>
        <FormGroup>
          <Label for="exampleEmail">Random Object</Label>
          Generate
          {/* <InputObj
            handleUpdateVal={this.updateInputValue}
            value={this.state.objectVal}
            numeric={this.state.numeric}
            handleCheckbox={this.handleCheckbox}
          /> */}
          {/* {result.length > 0 ? (
            this.renderInput()
          ) : (
            <InputObj
              handleUpdateVal={this.updateInputValue}
              value={this.state.objectVal}
              numeric={this.state.numeric}
              handleCheckbox={this.handleCheckbox}
            />
          )} */}
          {result.map((data, i) => {
            return (
              <InputObj
                key={i}
                handleUpdateVal={this.updateInputValue}
                value={data.text}
                numeric={this.state.numeric}
                handleCheckbox={this.handleCheckbox}
              />
            );
          })}
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
