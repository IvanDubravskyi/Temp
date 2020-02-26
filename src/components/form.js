import React from "react";

class Form extends React.Component {

    render () {
        return (
            <form onSubmit= {this.props.tempMethod}>
                <input type="number" name="temperature" placeholder="Цельсій"/>
                <button>Перевести</button>
            </form>
        );
    }
}

export default Form;
