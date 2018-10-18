import React from 'react';
import {
    Jumbotron,
    Row, Col
} from 'reactstrap';

const MessageView = ({ message, getApiMessage }) => (
    <div>
        { (message.trim() !== '') && showMessage(message, getApiMessage) }
    </div>
);

const showMessage = (message, getApiMessage) => {
    getApiMessage(message);
    return (
    <Row>
        <Col>
            <Jumbotron>
                <h2>Your Message</h2>
                <p>{ message }</p>
            </Jumbotron>
        </Col>
    </Row>
    );
};

export default MessageView;
