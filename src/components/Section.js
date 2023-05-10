import React, { Component } from "react";

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title , contentHeader, contentList} = this.props;
        const list = contentList.map((element, index) => {
            return <li key={index}>{element}</li>
        });
        return (
            <div id={title.toLowerCase()} className="section">
                <h1 className="section-title">{title}</h1>
                <hr className="section-line"></hr>
                <div className="section-content">
                    <h2 className="content-header">{contentHeader}</h2>
                    <ul className="content-list">
                        {list}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Section;