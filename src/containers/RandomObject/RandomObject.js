import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class RandomObject extends Component {
  state = {
    objectVal: ""
  };

  updateInputValue = (input, evt) => {
    this.setState({ [input]: evt.target.value });
  };

  render() {
    console.log(this.state.objectVal);
    return (
      <div className="text-left container">
        <h2> Random Object Generator</h2>
        <FormGroup>
          <Label for="exampleEmail">Random Object</Label>
          Generate
          <Input
            value={this.state.objectVal}
            onChange={this.updateInputValue.bind(this, "objectVal")}
          />
          random array
        </FormGroup>
      </div>
    );
  }
}

export default RandomObject;
