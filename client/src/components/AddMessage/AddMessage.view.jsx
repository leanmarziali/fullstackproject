import React from 'react';
import {
    Input, InputGroupAddon, InputGroup,
    Row, Container, Col,
    Badge,
    Button
} from 'reactstrap';

const AddMessageView = ({ onClick }) => {
    let input;
    return (
    <Container>
        <Row>
            <Col>
                <h3>Try the Node/Express API! <Badge color="secondary">New</Badge></h3>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <InputGroup size="lg">
                    <Input 
                        placeholder="type something"  
                        onChange={ e => input = e.target.value} />
                    <InputGroupAddon addonType="prepend">
                        <Button color="primary" onClick={ () => onClick(input) }>Send</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>
    </Container>
    );
};

export default AddMessageView;