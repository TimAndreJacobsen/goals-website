import {Nav, Navbar, Container, ListGroup, Dropdown, DropdownButton, Card} from 'react-bootstrap';
import IndividualGoal from './components/IndividualGoal';
import React from 'react';
 
// goals as cards to make styling easier

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
        const stylesObj = {
            background: "#CDCDCD"
        };

      return (
    <div id="hello-world" style={stylesObj} className="full-page">

            <Navbar className="Navbar bg-secondary text-white">
                <Navbar.Brand className="text-white" href="#home">Goals</Navbar.Brand>
                <Nav className="Nav mr-auto">
                <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                <Nav.Link className="text-white" href="#Progress">Progress</Nav.Link>


                <DropdownButton className="bg-secondary" title="Settings" variant="secondary" id="dropdown-basic-secondary">
                    <Dropdown.Item href="#/action-1" className="">dark theme</Dropdown.Item>
                </DropdownButton>

                </Nav>
            </Navbar>

            <Container className="">
                <h1>Your Active Goals</h1>
                <Card style={{ width: '30rem' }}>
                    <ListGroup variant="flush">
                        <IndividualGoal />
                    </ListGroup>
                </Card>

                <form onSubmit={(e) => this.submitGoal(e)}>
                    <label htmlFor="NewGoal">Goal Title:</label>
                    <input onChange={(e) => this.newTodoChanged(e)} id="newGoal" name="newGoal" />
                    <button type="submit" className="btn-primary btn-large">
                        Create New Goal
                    </button>
                </form>

            </Container>
            


    </div>
      );
    }



}

export default Goals;