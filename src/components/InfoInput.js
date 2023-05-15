import React from "react";

const InfoInput = (props) => {
    const {info, handleInfoChange} = props;
    return(
        <div>
            <div className="input-section">
                <label htmlFor="firstName">First Name: </label>
                <input name="firstName"
                    type="text"
                    value={info.firstName}
                    onChange={handleInfoChange}></input>
            </div>
            <div className="input-section">
                <label htmlFor="lastName">Last Name: </label>
                <input name="lastName"
                    type="text"
                    value={info.lastName}
                    onChange={handleInfoChange}></input>
            </div>
            <div className="input-section">
                <label htmlFor="email">Email: </label>
                <input name="email"
                    type="text"
                    value={info.email}
                    onChange={handleInfoChange}></input>
            </div>
        </div>
    );
}

export default InfoInput;