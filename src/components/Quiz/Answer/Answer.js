import React from "react";

function Answer({answer, answerNo, onAnswer}) {
    const handleAnswerClick = (userAnswer) => {
        onAnswer(userAnswer);
    }

    return (
        <div className={'col-12 col-md-6 p-3'}>
            <button type={'button'}
                    onClick={() => handleAnswerClick(answerNo)}
                    className='btn btn-outline-secondary fs-5 w-100 h-100 py-3'
            >
                {answer}
            </button>
        </div>
    );
}

export default Answer;