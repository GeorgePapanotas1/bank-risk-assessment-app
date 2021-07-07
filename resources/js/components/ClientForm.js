import React, { Component, useState } from "react";

import FormTextInput from "./FormTextInput";

class ClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientData: {
                SSN: "",
                fullname: "",
                occupation: "",
                total_deposits: null,
                total_unpaid_loans: null,
                active_loans_number: null,
                total_unsettled_amount: null,
            },
            baseURL: "http://127.0.0.1:8000/api/",
        };

        this.handleSSN = this.handleSSN.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleOccupation = this.handleOccupation.bind(this);
        this.handleTotalDeposits = this.handleTotalDeposits.bind(this);
        this.handleUnpaidLoans = this.handleUnpaidLoans.bind(this);
        this.handleActiveLoans = this.handleActiveLoans.bind(this);
        this.handleUnsettledAmount = this.handleUnsettledAmount.bind(this);
        this.storeClient = this.storeClient.bind(this);
    }

    handleSSN(ssn) {
        var tempClient = { ...this.state.clientData };
        tempClient.SSN = ssn;
        this.setState({ clientData: tempClient });
    }

    handleName(fn) {
        var tempClient = { ...this.state.clientData };
        tempClient.fullname = fn;
        this.setState({ clientData: tempClient });
    }

    handleOccupation(occ) {
        var tempClient = { ...this.state.clientData };
        tempClient.occupation = occ;
        this.setState({ clientData: tempClient });
    }

    handleTotalDeposits(td) {
        var tempClient = { ...this.state.clientData };
        tempClient.total_deposits = td;
        this.setState({ clientData: tempClient });
    }

    handleUnpaidLoans(ul) {
        var tempClient = { ...this.state.clientData };
        tempClient.total_unpaid_loans = ul;
        this.setState({ clientData: tempClient });
    }

    handleActiveLoans(al) {
        var tempClient = { ...this.state.clientData };
        tempClient.active_loans_number = al;
        this.setState({ clientData: tempClient });
    }

    handleUnsettledAmount(ua) {
        var tempClient = { ...this.state.clientData };
        tempClient.total_unsettled_amount = ua;
        this.setState({ clientData: tempClient });
    }

    async storeClient() {
        try {
            const response = await fetch(`${this.state.baseURL}client/store`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.state.clientData),
            });

            const client = await response.json();

            const risk_score_calc = await fetch(
                `${this.state.baseURL}client/score`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({ SSN: client.SSN }),
                }
            );

            const risk_score = await risk_score_calc.json();

            console.log(risk_score);
        } catch (err) {
            console.log(err);
        }
        // return response.json();
    }

    render() {
        return (
            <div className="client-form-wrapper">
                <div className="row form-items-wrapper">
                    <div className="col-md-12">
                        <FormTextInput
                            id="social_sec_number"
                            type="text"
                            title="Social Security Number"
                            handler={this.handleSSN}
                        />
                    </div>
                    <small>{this.state.SSN}</small>
                </div>
                <div className="row form-items-wrapper">
                    <div className="col-md-6">
                        <FormTextInput
                            id="full_name"
                            type="text"
                            title="Full Name"
                            handler={this.handleName}
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="occupation"
                            type="text"
                            title="Occupation"
                            handler={this.handleOccupation}
                        />
                    </div>
                </div>
                <div className="row form-items-wrapper">
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_deposits"
                            type="number"
                            title="Total Deposits"
                            min="0"
                            handler={this.handleTotalDeposits}
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_unpaid_loans"
                            type="number"
                            title="Total Unpaid Loans"
                            min="0"
                            handler={this.handleUnpaidLoans}
                        />
                    </div>
                </div>
                <div className="row form-items-wrapper">
                    <div className="col-md-6">
                        <FormTextInput
                            id="active_loans_number"
                            type="number"
                            title="Total Active Loans"
                            min="0"
                            handler={this.handleActiveLoans}
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_unsettled_amount"
                            type="number"
                            title="Total Unsettled Amount"
                            min="0"
                            handler={this.handleUnsettledAmount}
                        />
                    </div>
                </div>
                <div className="row text-center">
                    <button
                        onClick={this.storeClient}
                        type="button"
                        className="btn btn-primary m-auto"
                    >
                        SUBMIT
                    </button>
                </div>
            </div>
        );
    }
}

export default ClientForm;
