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

                {this.props.error
                    ? this.props.error.map((err, index) => (
                          <small key={index} className="error-message">
                              {err}
                          </small>
                      ))
                    : ""}
            </div>
        );
    }
}

export default FormTextInput;
