import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Explanations from "./Explanations";
import ClientForm from "./ClientForm";
import ModalContent from "./ModalContent";

function Homepage() {
    const [score, setScore] = useState(0);

    return (
        <div className="container">
            <Header />
            <Explanations />
            <ClientForm changedScore={setScore} />
            <ModalContent score={score} />
        </div>
    );
}

export default Homepage;

ReactDOM.render(<Homepage />, document.getElementById("app"));
