import React from "react";

class Info extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.content}</h2>
            </div>
        )
    }
}
export default Info;
