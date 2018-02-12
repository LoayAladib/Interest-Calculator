import React, { Component } from 'react';

export default class CustomResultRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.year}</td>
                <td>{this.props.result}</td>
                <td>{this.props.interest}</td>
            </tr>
        );
    }
}