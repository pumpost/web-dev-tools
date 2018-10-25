import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import InputObj from "./InputObj";

class RandomObject extends Component {
  // state = {
  //   objectVal: ""
  // };

  // updateInputValue = (input, evt) => {
  //   this.setState({ [input]: evt.target.value });
  // };

  addButton = () => {
    console.log(111);
  };

  render() {
    // console.log(this.state.objectVal);
    return (
      <div className="text-left container">
        <h2> Random Object Generator</h2>
        <FormGroup>
          <Label for="exampleEmail">Random Object</Label>
          Generate
          <InputObj />
          <Button onClick={this.addButton}>+</Button>
        </FormGroup>
      </div>
    );
  }
}

export default RandomObject;
