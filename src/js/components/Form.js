import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Label, Form } from 'react-bootstrap';

export default class InterestForm extends Component {
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <Label
                        style={{ margin: "10px" }}
                        bsStyle="success">Principal</Label>
                    <FormControl
                        style={{ margin: "10px" }}
                        type="text"
                        value={this.props.input1Value}
                        placeholder="Enter Principal"
                        onChange={e => this.props.input1ValueHandler(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                        style={{ margin: "10px" }}
                        bsStyle="success">Rate of Interest</Label>
                    <FormControl
                        style={{ margin: "10px" }}
                        type="text"
                        value={this.props.input2Value}
                        placeholder="Enter Rate of Interest"
                        onChange={e => this.props.input2ValueHandler(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label
                        style={{ margin: "10px" }}
                        bsStyle="success">Number of Years</Label>
                    <FormControl
                        style={{ margin: "10px" }}
                        type="text"
                        value={this.props.input3Value}
                        placeholder="Enter Number of Years"
                        onChange={e => this.props.input3ValueHandler(e.target.value)}
                    />
                </FormGroup>

                <Button
                    bsStyle="primary"
                    onClick={this.props.handleClick}
                >Calculate</Button>
            </Form> // test
        );
    }
}
