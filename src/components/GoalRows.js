import {ListGroup, Container} from 'react-bootstrap';
import React from 'react';
import IndividualGoal from './IndividualGoal';

class GoalRows extends React.Component {

    render() {
        return (
            <Container>

                <h1>Your Active Goals</h1>

                <ListGroup>
                    <ListGroup.Item>
                        <IndividualGoal />
                    </ListGroup.Item>
                </ListGroup>

            </Container>
        );
    }


}

export default GoalRows;