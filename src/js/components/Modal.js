import React, { Component } from 'react';
import CustomResultRow from './CustomResultRow';
import { Button, Label, Modal, Table } from 'react-bootstrap';

export default class InterestModal extends Component {
    render() {
        return (
            <Modal
                show={this.props.visible}
                onHide={this.props.handleClose}
                container={this} >
                <Modal.Header>
                    <Modal.Title align="center">
                        <Label bsStyle="info">{this.props.header}</Label></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>
                                    <Label bsStyle="success">{this.props.headData1}</Label>
                                </th>
                                <th>
                                    <Label bsStyle="success">{this.props.headData2}</Label>
                                </th>
                                <th>
                                    <Label bsStyle="success">{this.props.headData3}</Label>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((row) => {
                                return <CustomResultRow key={row.year} year={row.year} result={row.result} interest={row.interest} />
                            })}
                            <CustomResultRow year={this.props.tailData1} result={this.props.tailData2} interest={this.props.tailData3} />
                        </tbody>
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}
