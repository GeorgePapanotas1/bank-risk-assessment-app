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
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h4 className="text-center thin">
                                            Client's Risk Score:
                                        </h4>
                                        <small className="text-center thin">
                                            (Static Rules)
                                        </small>
                                        <h2
                                            className={`final-score text-center ${colorClass}`}
                                        >
                                            {this.props.score}
                                        </h2>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h4 className="text-center thin">
                                            Client's Risk Score:
                                        </h4>
                                        <small className="text-center thin">
                                            (Dynamic Rules)
                                        </small>
                                        <h2
                                            className={`final-score text-center ${colorClass}`}
                                        >
                                            {this.props.dynamic_score}
                                        </h2>
                                    </div>
                                </div>

                                <hr className="row-divider" />
                                <div className="client-data">
                                    <h4 className="text-center thin">
                                        Client Data
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>
                                                SSN:{" "}
                                                <strong>
                                                    {this.props.client.SSN}
                                                </strong>
                                            </p>
                                            <p>
                                                Full Name:{" "}
                                                <strong>
                                                    {
                                                        this.props.client
                                                            .full_name
                                                    }
                                                </strong>
                                            </p>
                                            <p>
                                                Occupation:{" "}
                                                <strong>
                                                    {
                                                        this.props.client
                                                            .occupation
                                                    }
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                Total Deposits:{" "}
                                                <strong>
                                                    {
                                                        this.props.client
                                                            .total_deposits
                                                    }
                                                </strong>
                                            </p>
                                            <p>
                                                Total Unpaid Loans:{" "}
                                                <strong>
                                                    {
                                                        this.props.client
                                                            .total_unpaid_loans
                                                    }
                                                </strong>
                                            </p>
                                            <p>
                                                Total Active Loans:{" "}
                                                <strong>
                                                    {
                                                        this.props.client
                                                            .active_loans_number
                                                    }
                                                </strong>
                                            </p>
                                            <p>
                                                Total Unsettled Amount:{" "}
                                                <strong>
                                                    {
                                                        this.props.client
                                                            .total_unsettled_amount
                                                    }
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
