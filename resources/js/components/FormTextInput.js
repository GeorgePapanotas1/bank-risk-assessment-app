import React, { Component } from "react";

class FormTextInput extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <input
                    type={this.props.type}
                    className="form-control"
                    id={this.props.id}
                    placeholder={this.props.title}
                ></input>
            </div>
        );
    }
}

export default FormTextInput;
