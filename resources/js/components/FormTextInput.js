import React, { Component } from "react";

class FormTextInput extends Component {
    render() {
        let min;
        if (this.props.min) {
            min = {
                min: this.props.min,
            };
        }

        return (
            <div className="form-group single-form-item">
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <input
                    type={this.props.type}
                    className="form-control"
                    id={this.props.id}
                    placeholder={this.props.title}
                    {...min}
                    onChange={(e) => this.props.handler(e.target.value)}
                ></input>
                <small className="error-message">There was an error</small>
            </div>
        );
    }
}

export default FormTextInput;
