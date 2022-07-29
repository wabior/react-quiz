import React from "react";

function Answer({ answer, idx }) {
    const handleAnswerClick = (userAnswer) => {

        console.log(userAnswer)
    }

    return (
        <div className={"col-12 col-md-6 p-3"}>
            <button type={"button"}
                    onClick={() => handleAnswerClick(idx)}
                    className={'btn btn-outline-secondary fs-5 w-100 py-3'}
            >
                { answer }
            </button>
        </div>
    );
}

export default Answer;