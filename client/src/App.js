import React, { Component } from 'react';
import { 
  Navbar, NavbarBrand, Nav, NavItem,
  Container
} from 'reactstrap';

import logo from './logo.svg';
import './App.css';
import AddMessage from './components/AddMessage/AddMessage';
import Message from './components/Message/Message';
import ApiMessage from './components/ApiMessage/ApiMessage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Home</NavbarBrand>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <img src={logo} className="App-logo" alt="logo" />
              </NavItem>
          </Nav>
        </Navbar>
        <br/>
        <Container>
          <AddMessage/>
          <br/>
          <Message/>
          <br/>
          <ApiMessage/>
        </Container>
      </div>
    );
  }
}

export default App;
