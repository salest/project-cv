import React, { Component } from "react";

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {fullName, onChange} = this.props;
        return (
            <div className="sidebar">
                <label htmlFor="fullname">Enter your name: </label>
                <input name="fullname" type="text" value={fullName} onChange={onChange}></input>
            </div>
        );
    }
}

export default Sidebar;