import {Nav, Navbar, Container, ListGroup} from 'react-bootstrap';
import IndividualGoal from './IndividualGoal';
import React from 'react';


class Goals extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newGoal: ''
        };
    }

    newTodoChanged(e) {
                this.setState({
            newGoal: e.target.value
        })
    }

    submitGoal(e) {
        e.preventDefault();
        console.log(this.state.newGoal);
    }

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

            <div className="center-padded">
                <form onSubmit={(e) => this.submitGoal(e)}>
                    <label htmlFor="NewGoal">Goal Title:</label>
                    <input onChange={(e) => this.newTodoChanged(e)} id="newGoal" name="newGoal" />
                    <button type="submit" className="btn-primary btn-large">
                        Create New Goal
                    </button>
                </form>
            </div>

        </div>

      );
    }



}

export default Goals;