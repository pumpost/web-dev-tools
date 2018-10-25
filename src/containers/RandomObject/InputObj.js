import React, { Component, Fragment } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class InputObj extends Component {
  state = {
    objectVal: ""
  };

  updateInputValue = (input, evt) => {
    this.setState({ [input]: evt.target.value });
  };

  render() {
    return (
      <Fragment>
        <Input
          value={this.state.objectVal}
          onChange={this.updateInputValue.bind(this, "objectVal")}
        />
      </Fragment>
    );
  }
}

export default InputObj;
