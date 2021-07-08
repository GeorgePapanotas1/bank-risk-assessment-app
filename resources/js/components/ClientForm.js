import axios from "axios";
import React, { Component } from "react";

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
            responseErrors: [],
        };

        this.handleSSN = this.handleSSN.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleOccupation = this.handleOccupation.bind(this);
        this.handleTotalDeposits = this.handleTotalDeposits.bind(this);
        this.handleUnpaidLoans = this.handleUnpaidLoans.bind(this);
        this.handleActiveLoans = this.handleActiveLoans.bind(this);
        this.handleUnsettledAmount = this.handleUnsettledAmount.bind(this);
        this.storeClient = this.storeClient.bind(this);
        this.handleResponseErrors = this.handleResponseErrors.bind(this);
    }

    handleResponseErrors(obj) {
        this.setState({ responseErrors: obj });
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
        console.log($(document));
        try {
            const response = await axios({
                method: "post",
                url: `${this.state.baseURL}client/store`,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(this.state.clientData),
            });

            const client = response.data;
            this.handleResponseErrors({});

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
            $("#exampleModalCenter").modal("show");
            this.props.changedScore(risk_score.risk);
        } catch (err) {
            this.handleResponseErrors(err.response.data.errors);
            return;
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
                            error={this.state.responseErrors.SSN}
                        />
                    </div>
                </div>
                <div className="row form-items-wrapper">
                    <div className="col-md-6">
                        <FormTextInput
                            id="full_name"
                            type="text"
                            title="Full Name"
                            handler={this.handleName}
                            error={this.state.responseErrors.fullname}
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="occupation"
                            type="text"
                            title="Occupation"
                            handler={this.handleOccupation}
                            error={this.state.responseErrors.occupation}
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
                            error={this.state.responseErrors.total_deposits}
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_unpaid_loans"
                            type="number"
                            title="Total Unpaid Loans"
                            min="0"
                            handler={this.handleUnpaidLoans}
                            error={this.state.responseErrors.total_unpaid_loans}
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
                            error={
                                this.state.responseErrors.active_loans_number
                            }
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_unsettled_amount"
                            type="number"
                            title="Total Unsettled Amount"
                            min="0"
                            handler={this.handleUnsettledAmount}
                            error={
                                this.state.responseErrors.total_unsettled_amount
                            }
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
