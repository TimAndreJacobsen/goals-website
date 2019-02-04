/*
[ ] - Display box on click
    [ ] - Title
[ ] - save goal to array
*/

import React from 'react';

class CreateGoal extends React.Component{
    constructor(props) {
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
        return(
                
            <div className="center-padded">

                <form onSubmit={(e) => this.submitGoal(e)}>
                    <label htmlFor="NewGoal">Goal Title:</label>
                    <input onChange={(e) => this.newTodoChanged(e)} id="newGoal" name="newGoal" />
                    <button type="submit" className="btn-primary btn-large">
                        Create New Goal
                    </button>
                </form>

            </div>

        );
    }
}

export default CreateGoal;