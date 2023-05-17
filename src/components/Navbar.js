import React from "react";

const Navbar = (props) => {
    const {info} = props;
    return (
        <div className="navbar">
            <div>
                <h1>{`${info.firstName} ${info.lastName}`}</h1>
                <p>{info.email}</p>
            </div>
            <ul className="navbar-list">
                <li><a href="">Skills</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="" target="_blank">Resume</a></li>
            </ul>
        </div>
    );
}

export default Navbar;