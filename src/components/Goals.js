import {Nav, Navbar, Container, ListGroup} from 'react-bootstrap';
import IndividualGoal from './IndividualGoal';
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

            <Container>

                <h1>Your Active Goals</h1>

                <ListGroup>
                    <ListGroup.Item>
                        <IndividualGoal />
                    </ListGroup.Item>
                </ListGroup>

            </Container>

            <CreateGoal />

        </div>

      );
    }



}

export default Goals;