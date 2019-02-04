import React from 'react';

class IndividualGoal extends React.Component {

    render() {

        var goalOne = {'title': 'goal1',
                    'type': 'todo',
                    'isCompleted': true                    
        };

        var goalTwo = { 'title': 'goal2',
                        'type': 'todo',
                        'isCompleted': true                    
        };

        var goalThree = {
            'title': 'Goal two Title',
            'type': 'Todo',
            'isCompleted': false
        };

        var goalFour = {
            'title': 'Goal three Title',
            'type': 'Todo',
            'isCompleted': false,
        };

        const goalList = [goalOne, goalTwo, goalThree, goalFour];

        return goalList.map(item => {
            return (

                <div className="row" role="group" key={item.title}>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <button className="btn-primary btn-block">{item.title}</button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <button className="btn-primary btn-block">{item.isCompleted ? 'Yes!' : 'No'}</button>
                    </div>
                </div>

        );
      });
    }
}

export default IndividualGoal;