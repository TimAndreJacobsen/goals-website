/*
[ ] - Static Mockup
    [ ] - create a background
    [x] - create a navbar
    [ ] - render the page
    [ ] - create a navbar
    [ ] - create a table like structure for goals

*/

import {Nav, Navbar} from 'react-bootstrap';
import React from 'react';

class Goals extends React.Component{

    render() {
      return (
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Goals</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Progress">Progress</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
            </Nav>
        </Navbar>
      );
    }
}

export default Goals;