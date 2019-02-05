import {Nav, Navbar, Container, ListGroup, Dropdown, ButtonToolbar, DropdownButton} from 'react-bootstrap';
import IndividualGoal from './components/IndividualGoal';
import React from 'react';


class Goals extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newGoal: '',
            goals: []
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
        this.setState({
            goals: [...this.state.goals, {
                title: this.state.newGoal,
                isComplete: false
            }]
        });
    }

    render() {
      return (
        <div>
            <Navbar className="bg-secondary text-white">
                <Navbar.Brand className="text-white" href="#home">Goals</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                <Nav.Link className="text-white" href="#Progress">Progress</Nav.Link>

                <ButtonToolbar className="">
                    <DropdownButton className="" title="Settings" variant="secondary" id="dropdown-basic-secondary">
                        <Dropdown.Item href="#/action-1" className="">dark mode</Dropdown.Item>
                    </DropdownButton>
                </ButtonToolbar>
            
    

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