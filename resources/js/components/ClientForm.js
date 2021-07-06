import React, { Component } from "react";

import FormTextInput from "./FormTextInput";

class ClientForm extends Component {
    // async sendRequest() {
    //     const BASE_URL = "http://127.0.0.1:8000/api/";
    //     await fetch(`${BASE_URL}client/store`);
    // }

    render() {
        return (
            <div className="client-form-wrapper">
                <div className="row form-items-wrapper">
                    <div className="col-md-12">
                        <FormTextInput
                            id="social_sec_number"
                            type="text"
                            title="Social Security Number"
                        />
                    </div>
                </div>
                <div className="row form-items-wrapper">
                    <div className="col-md-6">
                        <FormTextInput
                            id="full_name"
                            type="text"
                            title="Full Name"
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="occupation"
                            type="text"
                            title="Occupation"
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
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_unpaid_loans"
                            type="number"
                            title="Total Unpaid Loans"
                            min="0"
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
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_unsettled_amount"
                            type="number"
                            title="Total Unsettled Amount"
                            min="0"
                        />
                    </div>
                </div>
                <div className="row text-center">
                    <button
                        onClick="alert('hello')"
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
