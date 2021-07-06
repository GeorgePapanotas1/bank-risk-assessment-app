import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Explanations from "./Explanations";
import ClientForm from "./ClientForm";

function Homepage() {
    return (
        <div className="container">
            <Header />
            <Explanations />
            <ClientForm />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            I'm an example component!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;

ReactDOM.render(<Homepage />, document.getElementById("app"));
