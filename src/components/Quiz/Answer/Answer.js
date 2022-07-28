import React from "react";

function Answer({ answer }) {
    return (
        <div className={"col-12 col-md-6 p-3"}>
            <button type={"button"} className={'btn btn-outline-secondary w-100 py-3'}>
                { answer }
            </button>
        </div>
    );
}

export default Answer;