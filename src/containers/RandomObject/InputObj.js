import React, { Component, Fragment } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class InputObj extends Component {
  render() {
    const { result } = this.props;

    return (
      <Fragment>
        <Input
          value={this.props.value}
          onChange={e => this.props.handleUpdateVal(e, "objectVal")}
        />
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={this.props.numeric}
              onChange={this.props.handleCheckbox}
              name="numeric"
            />{" "}
            Numeric digits (0-9)
          </Label>
        </FormGroup>
      </Fragment>
    );
  }
}

export default InputObj;
