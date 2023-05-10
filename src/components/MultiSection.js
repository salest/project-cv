import React, {Component} from "react";

class MultiSection extends Component{

    render(){
        const {experience} = this.props;
        return(
            <div className="section">
                <h1>{experience[0].jobName}</h1>
            </div>
        );
    }
}

export default MultiSection;