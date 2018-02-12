import React, { Component } from 'react';
import { Label, Jumbotron } from 'react-bootstrap';

export default class CustomResultRow extends Component {
    render() {
        return (
            <Jumbotron>
                <h2>
                    <Label bsStyle="default">
                        {this.props.title}
                    </Label>
                </h2>
            </Jumbotron>
        );
    }
}