import React from 'react';

class IndividualGoal extends React.Component {


    render() {
        return (

                <div className="row" role="group">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <button className="btn-primary btn-block">Goal Name and text</button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <button className="btn-primary btn-block">Goal</button>
                    </div>
                </div>

        );
      }

}

export default IndividualGoal;