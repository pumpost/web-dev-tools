import React, { Component, Fragment } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class InputObj extends Component {
  render() {
    const { result, index } = this.props;

    return (
      <Fragment>
        <Input
          value={this.props.value}
          onChange={e => this.props.handleUpdateVal(index, e.target.value)}
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
        {this.props.val}
      </Fragment>
    );
  }
}

export default InputObj;
