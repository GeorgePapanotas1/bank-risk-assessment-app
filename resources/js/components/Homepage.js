import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Explanations from "./Explanations";
import ClientForm from "./ClientForm";
import ModalContent from "./ModalContent";

function Homepage() {
    const [score, setScore] = useState(0);
    const [dynamic_score, setDynamicScore] = useState(0);
    const [client, setSClient] = useState({
        SSN: "",
        fullname: "",
        occupation: "",
        total_deposits: null,
        total_unpaid_loans: null,
        active_loans_number: null,
        total_unsettled_amount: null,
    });

    return (
        <div className="container">
            <Header />
            <Explanations />
            <ClientForm
                changedScore={setScore}
                changedClient={setSClient}
                changedDynamicScore={setDynamicScore}
            />
            <ModalContent score={score} dynamic_score={score} client={client} />
        </div>
    );
}

export default Homepage;

ReactDOM.render(<Homepage />, document.getElementById("app"));
