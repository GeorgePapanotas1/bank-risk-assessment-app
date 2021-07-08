import React, { Component, useState } from "react";

class ModalContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let colorClass = "good-score";

        if (this.props.score > 30) {
            colorClass = "mediocre-score";
        }
        if (this.props.score > 60) {
            colorClass = "bad-score";
        }
        return (
            <div
                className="modal fade"
                id="exampleModalCenter"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLongTitle"
                            >
                                Client Risk Score Assessment
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="result">
                                <h4>Client's Risk Score:</h4>
                                <h2
                                    className={`final-score text-center ${colorClass}`}
                                >
                                    {this.props.score}
                                </h2>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalContent;
