import React, { Component } from 'react';
import {
    Jumbotron,
    Row, Col
} from 'reactstrap';

export default class MessageView extends Component {

    // We don't care about the initial render.
    // Redux will provide initial state (empty message).
    componentDidUpdate() {
      if (this.isValidMessage(this.props.message)) {
          this.props.getApiMessage(this.props.message);
      }
    };

    showMessage = message => (
        <Row>
            <Col>
                <Jumbotron>
                    <h2>Your Message</h2>
                    <p>{ message }</p>
                </Jumbotron>
            </Col>
        </Row>
    );
    
    isValidMessage = message => (
      message.trim() !== ''
    );

    render() {
      return (
        <div>
          { this.isValidMessage(this.props.message) && this.showMessage(this.props.message) }
        </div>
      );
    };
}
