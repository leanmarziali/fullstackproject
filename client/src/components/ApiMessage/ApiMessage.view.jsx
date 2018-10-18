import React from 'react';
import {
    Jumbotron,
    Row, Col
} from 'reactstrap';

const ApiMessageView = ({ message }) => (
    <div>
        { (message.trim() !== '') && showMessage(message) }
    </div>
);

const showMessage = (message) => {
    return (
    <Row>
        <Col>
            <Jumbotron>
                <h2>API Message</h2>
                <p>{ message }</p>
            </Jumbotron>
        </Col>
    </Row>
    );
};

export default ApiMessageView;
