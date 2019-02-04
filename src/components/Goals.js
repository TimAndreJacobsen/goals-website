/*
[ ] - Static Mockup
    [ ] - create a background
    [x] - create a navbar
    [x] - create a goal row
    [x] - render the page

*/

import {Nav, Navbar} from 'react-bootstrap';
import GoalRows from './GoalRows';
import CreateGoal from './CreateGoal';
import React from 'react';


class Goals extends React.Component{

    render() {
      return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Goals</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Progress">Progress</Nav.Link>
                <Nav.Link href="#settings">Settings</Nav.Link>
                </Nav>
            </Navbar>

            <GoalRows />

            <CreateGoal />

        </div>

      );
    }



}

export default Goals;