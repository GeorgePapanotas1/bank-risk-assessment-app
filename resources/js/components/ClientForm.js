import React, { Component } from "react";

import FormTextInput from "./FormTextInput";

class ClientForm extends Component {
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
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_unpaid_loans"
                            type="number"
                            title="Total Unpaid Loans"
                        />
                    </div>
                </div>
                <div className="row form-items-wrapper">
                    <div className="col-md-6">
                        <FormTextInput
                            id="active_loans_number"
                            type="number"
                            title="Total Active Loans"
                            min="min=0"
                        />
                    </div>
                    <div className="col-md-6">
                        <FormTextInput
                            id="total_unsettled_amount"
                            type="number"
                            title="Total Unsettled Amount"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientForm;
