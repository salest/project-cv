import React, { Component } from "react";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <h1>{this.props.fullName}</h1>
                <ul className="navbar-list">
                    <li><a href="">Skills</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="" target="_blank">Resume</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;